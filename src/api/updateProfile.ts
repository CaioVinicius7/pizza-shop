import { api } from "@/lib/axios";

export interface UpdateProfileParams {
  name: string;
  description: string | null;
}

export async function updateProfile({
  name,
  description
}: UpdateProfileParams) {
  const { data } = await api.put("/profile", {
    name,
    description
  });

  return data;
}
