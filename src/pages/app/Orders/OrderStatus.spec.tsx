import { render } from "@testing-library/react";

import {
  OrderStatus,
  type OrderStatus as OrderStatusType
} from "./OrderStatus";

describe("Order Status", () => {
  it.each<{
    status: OrderStatusType;
    expectedStatusText: string;
    expectBadgeColorClass: string;
  }>([
    {
      status: "pending",
      expectedStatusText: "Pendente",
      expectBadgeColorClass: "bg-slate-400"
    },
    {
      status: "canceled",
      expectedStatusText: "Cancelado",
      expectBadgeColorClass: "bg-rose-400"
    },
    {
      status: "processing",
      expectedStatusText: "Em preparo",
      expectBadgeColorClass: "bg-amber-500"
    },
    {
      status: "delivering",
      expectedStatusText: "Em entrega",
      expectBadgeColorClass: "bg-amber-500"
    },
    {
      status: "delivered",
      expectedStatusText: "Entregue",
      expectBadgeColorClass: "bg-emerald-500"
    }
  ])(
    "Should display the right text when order status is $status",
    ({ status, expectedStatusText, expectBadgeColorClass }) => {
      const wrapper = render(<OrderStatus status={status} />);

      const statusText = wrapper.getByText(expectedStatusText);
      const badgeElement = wrapper.getByTestId("badge");

      expect(statusText).toBeInTheDocument();
      expect(badgeElement).toHaveClass(expectBadgeColorClass);
    }
  );
});
