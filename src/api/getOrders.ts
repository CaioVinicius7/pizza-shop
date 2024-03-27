import { api } from "@/lib/axios";

interface GetOrdersParams {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status
}: GetOrdersParams) {
  const { data } = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex,
      orderId,
      customerName,
      status
    }
  });

  return data;
}
