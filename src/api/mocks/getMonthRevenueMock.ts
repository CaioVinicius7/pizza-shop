import { http, HttpResponse } from "msw";

import type { GetMonthRevenueResponse } from "../getMonthRevenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 20_000,
    diffFromLastMonth: 10
  });
});
