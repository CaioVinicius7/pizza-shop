import { api } from "@/lib/axios";

interface SignInParams {
  email: string;
}

export async function signIn({ email }: SignInParams) {
  await api.post("/authenticate", {
    email
  });
}
