import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  description: string;
  managerId: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getManagedRestaurant() {
  const { data } = await api<GetManagedRestaurantResponse>(
    "/managed-restaurant"
  );

  return data;
}
