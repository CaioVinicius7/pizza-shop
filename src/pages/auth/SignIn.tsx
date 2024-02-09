import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { signIn } from "@/api/signIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInForm = z.object({
  email: z.string().email()
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit: HookFormHandleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  });

  const handleSubmit = HookFormHandleSubmit(async (data) => {
    try {
      await authenticate(data);

      toast.success("Enviamos um link de autenticação para seu e-mail.");
    } catch {
      toast.error(
        "Ocorreu um erro ao enviar um link autenticação para seu e-mail."
      );
    }
  });

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>

              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
