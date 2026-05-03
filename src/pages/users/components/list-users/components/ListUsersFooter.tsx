import { cn } from '@/lib/utils/utils.ts';
import { Loader, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form.tsx';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import { fullGender, Gender, gendersArray } from '@/pages/users/enums/gender.enum.ts';
import { useListUsersFooter } from '@/pages/users/components/list-users/components/useListUsersFooter.ts';

type ListUsersFooterProps = {
  className?: string,
}



export function ListUsersFooter({ className }: ListUsersFooterProps) {
  const { form, units, loadingResidences, loading, onSubmit } = useListUsersFooter();

  if (loading) {
    return <Loader />;
  }

  return <footer className={cn(className, 'w-full mt-4')}>
    <Sheet>
      <SheetTrigger asChild>
        <Button><PlusIcon/>Novo usuário</Button>
      </SheetTrigger>
      <SheetContent className="pl-6 pr-4">
        <SheetHeader className="px-0 pt-3 pb-4">
          <SheetTitle className="">Novo Usuário</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form className="space-y-6 overflow-y-scroll" onSubmit={form.handleSubmit(onSubmit)}>
            <span className="font-light">Informações pessoais</span>
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
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder='Email' {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder='Telefone' {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Data de nascimento</FormLabel>
                    <FormControl>
                      <Input type="date" placeholder='Data de nascimento' {...field}/>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Gênero</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue {...field} placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {gendersArray().map((gender, index) => (
                            <SelectItem key={index} value={gender}>{fullGender(gender as Gender)}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <span className="font-light">Informações de trabalho</span>
            <Separator className="mt-2 mb-4"></Separator>

            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidade</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue {...field} placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map((unit, index) => (
                          <SelectItem key={index} value={unit.id}>{unit.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="building"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Construção</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue {...field} placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="building1">Construção 1</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="residence"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Residência</FormLabel>
                    <FormControl>
                      <Select disabled={loadingResidences}>
                        <SelectTrigger className="w-full">
                          <SelectValue {...field} placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1105">Ap. 1105</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
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
