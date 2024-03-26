import { api } from "@/lib/axios";

interface GetOrdersParams {
  pageIndex?: number | null;
}

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

export async function getOrders({ pageIndex }: GetOrdersParams) {
  const { data } = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex
    }
  });

  return data;
}
