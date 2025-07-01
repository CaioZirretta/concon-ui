import { cn } from '@/lib/utils/utils.ts';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet.tsx';
import { Separator } from '@/components/ui/separator.tsx';

type CCListUsersFooterProps = {
  className?: string,
}

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email('E-mail inválido'),
  roles: z.array(z.string()),
  avatar: z.string(),
  gender: z.string().length(1),
  phone: z.string().min(10).max(11),
  residence: z.string().nonempty(),
  building: z.string().optional(),
  unit: z.string().nonempty(),
  birthDate: z.date(),
  occupationTitle: z.string().nonempty(),
  currentContractStart: z.date(),
  currentContractEnd: z.date(),
});

export function CCListUsersFooter({ className }: CCListUsersFooterProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      gender: '',
      roles: [],
      avatar: '',
      residence: '',
      building: '',
      unit: '',
      occupationTitle: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return <footer className={cn(className, 'w-full mt-4')}>
    <Sheet>
      <SheetTrigger asChild>
        <Button><PlusIcon/>Novo usuário</Button>
      </SheetTrigger>
      <SheetContent className="pl-6 pr-4">
        <SheetHeader className="px-0 pt-3 pb-0">
          <SheetTitle className="">Novo Usuário</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form className="space-y-6 overflow-y-scroll" onSubmit={form.handleSubmit(onSubmit)}>
            <span className="font-light">Informações Pessoais</span>
            <Separator className="mt-2 mb-4"></Separator>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira o nome completo." {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter className="justify-end flex flex-row">
          <Button className="w-1/3" variant="destructive">Cancelar</Button>
          <SheetClose asChild>
            <Button className="w-1/3" type="submit" variant="default">Confirmar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </footer>;
}
