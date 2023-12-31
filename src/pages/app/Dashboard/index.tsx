import { Helmet } from "react-helmet-async";

import { DayOrdersAmountCard } from "./DayOrdersAmountCard";
import { MonthCanceledOrdersAmountCard } from "./MonthCanceledOrdersAmountCard";
import { MonthOrdersAmountCard } from "./MonthOrdersAmountCard";
import { MonthRevenueCard } from "./MonthRevenueCard";
import { RevenueChart } from "./RevenueChart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />

          <MonthOrdersAmountCard />

          <DayOrdersAmountCard />

          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  );
}
