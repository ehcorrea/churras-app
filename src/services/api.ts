import { client } from './client';

type AuthResponse = {
  jwt: string;
  user: {
    email: string;
    username: string;
    createdAt: Date;
  };
};

type AuthFirebaseParams = {
  idToken: string;
  profileMetaData: {
    firstName: string | null;
    lastName: string | null;
    email: string;
    phoneNumber: string | null;
  };
};

export async function authFirebase(params: AuthFirebaseParams) {
  const { data } = await client.post<AuthResponse>(
    `/api/firebase-auth`,
    params
  );
  return data;
}
