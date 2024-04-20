import { api } from "@/lib/axios";

export interface SignInParams {
  email: string;
}

export async function signIn({ email }: SignInParams) {
  await api.post("/authenticate", {
    email
  });
}
