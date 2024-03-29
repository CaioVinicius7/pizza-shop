import { useQuery } from "@tanstack/react-query";
import { Ban } from "lucide-react";

import { getMonthCanceledOrdersAmount } from "@/api/getMonthCanceledOrdersAmount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function MonthCanceledOrdersAmountCard() {
  const {
    data: monthCanceledOrdersAmount,
    isLoading: isLoadingMonthCanceledOrdersAmount
  } = useQuery({
    queryKey: ["metrics", "month-canceled-orders-amount"],
    queryFn: getMonthCanceledOrdersAmount
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>

        <Ban className="tex h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {!!monthCanceledOrdersAmount && !isLoadingMonthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>

            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth > 0 ? (
                <span className="text-rose-500 dark:text-rose-400">
                  +{monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-emerald-500 dark:text-emerald-400">
                  {monthCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              )}{" "}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
