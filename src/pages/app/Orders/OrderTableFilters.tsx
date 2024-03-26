import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional()
});

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>;

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    control,
    reset
  } = useForm<OrderFiltersSchema>({
    resolver: zodResolver(orderFiltersSchema),
    defaultValues: {
      orderId: orderId ?? "",
      customerName: customerName ?? "",
      status: status ?? "all"
    }
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    setSearchParams((prevParams) => {
      if (data.orderId) {
        prevParams.set("orderId", data.orderId);
      } else {
        prevParams.delete("orderId");
      }

      if (data.customerName) {
        prevParams.set("customerName", data.customerName);
      } else {
        prevParams.delete("customerName");
      }

      if (data.status) {
        prevParams.set("status", data.status);
      } else {
        prevParams.delete("status");
      }

      prevParams.set("page", "1");

      return prevParams;
    });
  });

  function handleClearFilters() {
    setSearchParams((prevParams) => {
      prevParams.delete("orderId");
      prevParams.delete("customerName");
      prevParams.delete("status");

      prevParams.set("page", "1");

      return prevParams;
    });

    reset({
      orderId: "",
      customerName: "",
      status: "all"
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register("orderId")}
      />

      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register("customerName")}
      />

      <Controller
        control={control}
        name="status"
        render={({ field: { name, value, onChange, disabled } }) => (
          <Select
            name={name}
            value={value}
            onValueChange={onChange}
            disabled={disabled}
            defaultValue="all"
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        type="button"
        variant="outline"
        size="xs"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
