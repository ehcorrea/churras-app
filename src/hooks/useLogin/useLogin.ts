import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { authFirebase } from '@/services/api';

import { useMutation } from '../useMutation/useMutation';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
});

export function useLogin() {
  const { login: loginGoogle } = useLoginGoogle();
  return { loginGoogle };
}

function useLoginGoogle() {
  const { mutate } = useMutation({ mutationFn: authFirebase });
  const login = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const googleResponse = await GoogleSignin.signIn();
    const credentials = auth.GoogleAuthProvider.credential(
      googleResponse.idToken
    );
    const firebaseResponse = await auth().signInWithCredential(credentials);
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
  return { login };
}
