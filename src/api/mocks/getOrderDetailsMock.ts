import { http, HttpResponse } from "msw";

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse
} from "../getOrderDetails";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "(35) 9 9999-9999"
    },
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: {
          name: "Pizza De Calabresa"
        },
        quantity: 1
      },
      {
        id: "order-item-2",
        priceInCents: 2000,
        product: {
          name: "Pizza Marguerita"
        },
        quantity: 2
      }
    ],
    status: "pending",
    totalInCents: 5000,
    createdAt: new Date().toISOString()
  });
});
