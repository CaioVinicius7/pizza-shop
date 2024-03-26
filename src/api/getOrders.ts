import { api } from "@/lib/axios";

export interface GetOrdersResponse {
  orders: {
    orderId: string;
    customerName: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    total: number;
    createdAt: string;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders() {
  const { data } = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: 0
    }
  });

  return data;
}
