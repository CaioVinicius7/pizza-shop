import { api } from "@/lib/axios";

interface GetProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile() {
  const { data } = await api.get<GetProfileResponse>("/me");

  return data;
}
