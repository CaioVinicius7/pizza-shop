import { http, HttpResponse } from "msw";

import type { GetMonthOrdersAmountResponse } from "../getMonthOrdersAmount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7
  });
});
