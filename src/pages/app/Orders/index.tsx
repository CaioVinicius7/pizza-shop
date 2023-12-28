import { Helmet } from "react-helmet-async";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { OrderTableFilters } from "./OrderTableFilters";
import { OrderTableRow } from "./OrderTableRow";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>

      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16"></TableHead>
                <TableHead className="w-36">Identificador</TableHead>
                <TableHead className="w-44">Realizado há</TableHead>
                <TableHead className="w-36">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-36">Total do pedido</TableHead>
                <TableHead className="w-40"></TableHead>
                <TableHead className="w-32"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderTableRow key={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
