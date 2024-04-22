import { api } from "@/lib/axios";

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  description: string | null;
  managerId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export async function getManagedRestaurant() {
  const { data } = await api<GetManagedRestaurantResponse>(
    "/managed-restaurant"
  );

  return data;
}
