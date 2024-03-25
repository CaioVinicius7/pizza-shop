import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getManagedRestaurant } from "@/api/getManagedRestaurant";

import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const storeProfileSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  description: z.string()
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant
  });

  const { register, handleSubmit: hookFormHandleSubmit } =
    useForm<StoreProfileSchema>({
      resolver: zodResolver(storeProfileSchema),
      values: {
        name: managedRestaurant?.name ?? "",
        description: managedRestaurant?.description ?? ""
      }
    });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(JSON.stringify(data, null, 2));
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>

        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form id="store-profile" onSubmit={handleSubmit}>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>

            <Input
              type="text"
              id="name"
              className="col-span-3"
              {...register("name")}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>

            <Textarea
              id="description"
              className="col-span-3"
              {...register("description")}
            />
          </div>
        </div>
      </form>

      <DialogFooter>
        <Button type="button" variant="ghost">
          Cancelar
        </Button>

        <Button type="submit" variant="success" form="store-profile">
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
