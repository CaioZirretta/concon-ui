import { cn } from '@/lib/utils/utils.ts';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
})

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
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return <footer className={cn(className, 'w-full mt-4')}>
    <Drawer>
      <DrawerTrigger asChild>
        <Button><PlusIcon/>Novo Cliente</Button>
      </DrawerTrigger>
      <DrawerContent className="px-6">
        <DrawerHeader>
          <DrawerTitle>Novo Usuário</DrawerTitle>
        </DrawerHeader>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
            <Button className="w-1/12" type="submit" variant="default">Confirmar</Button>
          </form>
        </Form>
        <DrawerFooter className="items-baseline px-0">
          <DrawerClose asChild>
            <Button className="w-1/12" variant="destructive">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </footer>;
}
