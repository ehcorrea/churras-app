import { useEffect, useState } from 'react';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import firebaseAuth from '@react-native-firebase/auth';
import { router } from 'expo-router';

import { authEmail, authFirebase } from '@/services/api';
import { authStore } from '@/stores/authStore';
import { setHeaderAuthorization } from '@/services/client';

import { useMutation } from '../useMutation/useMutation';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
});

export function useLogin() {
  const { login: loginGoogle } = useLoginGoogle();
  const { login: loginEmail } = useLoginEmail();
  return { loginGoogle, loginEmail };
}

function useLoginEmail() {
  const { setAuth } = authStore();
  const { mutate } = useMutation({
    mutationFn: authEmail,
    options: {
      onSuccess(data) {
        setHeaderAuthorization(data.jwt);
        setAuth({
          jwt: data.jwt,
          user: {
            email: data.user.email,
            inicio: data.user.createdAt,
            nome: data.user.displayName!,
            foto: null,
          },
        });
      },
    },
  });
  return { login: mutate };
}

function useLoginGoogle() {
  const [googleResponse, setGoogleResponse] = useState<User | null>(null);
  const { setAuth, auth, clearAuth } = authStore();
  const { mutate, isSuccess, data } = useMutation({ mutationFn: authFirebase });

  const login = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const googleResponse = await GoogleSignin.signIn();
    const credentials = firebaseAuth.GoogleAuthProvider.credential(
      googleResponse.idToken
    );
    const firebaseResponse =
      await firebaseAuth().signInWithCredential(credentials);
    setGoogleResponse(googleResponse);
    clearAuth();
    mutate({
      idToken: await firebaseResponse.user.getIdToken(),
      profileMetaData: {
        firstName: googleResponse.user.name,
        lastName: googleResponse.user.familyName,
        email: googleResponse.user.email,
        phoneNumber: firebaseResponse.user.phoneNumber,
      },
    });
  };

  useEffect(() => {
    const handleStoreAuth = () => {
      if (isSuccess && !auth && googleResponse) {
        setHeaderAuthorization(data.jwt);
        setAuth({
          jwt: data.jwt,
          user: {
            email: data.user.email,
            inicio: data.user.createdAt,
            nome: `${googleResponse.user.name} ${googleResponse.user.familyName}`,
            foto: googleResponse.user.photo,
          },
        });
        router.replace('/home');
      }
    };
    handleStoreAuth();
  }, [auth, data, googleResponse, isSuccess, setAuth]);

  return { login };
}
