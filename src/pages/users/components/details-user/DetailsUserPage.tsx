import { CheckIcon, EditIcon, Loader, XIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '@/pages/users/types/User.type.ts';
import { userMock } from '@/pages/users/mocks/user.mock.ts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { DetailsUserField } from '@/pages/users/components/details-user/components/DetailsUserField.tsx';
import { DetailsUserLine } from '@/pages/users/components/details-user/components/DetailsUserLine.tsx';
import { fullGender } from '@/pages/users/enums/gender.enum.ts';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { Button } from '@/components/ui/button.tsx';

export function DetailsUserPage() {
  const { state } = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      id: state.id,
      ...userMock
    });
    setLoading(false);
  }, [state.id]);

  function isContractEnded(date: string): boolean {
    return (new Date(date).getTime() <= Date.now());
  }

  if (loading) {
    return <Loader></Loader>;
  }

  return <>
    <div className="w-full mt-12 flex items-center gap-6 bg-chart-2 p-4 rounded-xl">
      <Avatar className="size-12 border-2">
        <AvatarImage></AvatarImage>
        <AvatarFallback>?</AvatarFallback>
      </Avatar>

      <span className="text-lg text-accent">{user?.name}</span>

      {/* TODO Ajustar alinhamento ao final da linha*/}
      {user?.currentContractEnd &&
        <Tooltip>
          <TooltipTrigger className="gap-12">
            {isContractEnded(user?.currentContractEnd) ?
              (<XIcon className="p-1" color="var(--color-secondary)" size={32}/>) :
              <CheckIcon color="var(--color-secondary)"/>}
          </TooltipTrigger>
          <TooltipContent>
            {isContractEnded(user?.currentContractEnd) ?
              <span>Contrato Encerrado em {user?.currentContractEnd}</span> :
              <span>Contrato ativo até {user?.currentContractEnd}</span>}
          </TooltipContent>
        </Tooltip>}

      <Tooltip>
        <TooltipTrigger className="last:ml-auto">
          <Button >
            <EditIcon/>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Editar Usuário</TooltipContent>
      </Tooltip>
    </div>

    <DetailsUserLine>
      <DetailsUserField fieldName="Unidade" fieldValue={user?.unit}/>
      <DetailsUserField fieldName="Região" fieldValue={user?.building}/>
      <DetailsUserField fieldName="Residência" fieldValue={user?.residence}/>
      <DetailsUserField fieldName="Ocupação" fieldValue={user?.occupationTitle}/>
    </DetailsUserLine>

    <DetailsUserLine>
      <DetailsUserField fieldName="Telefone" fieldValue={user?.phone}/>
      <DetailsUserField fieldName="E-mail" fieldValue={user?.email}/>
      {user?.birthDate && <DetailsUserField fieldName="Dt. Nascimento" fieldValue={user?.birthDate}/>}
      <DetailsUserField fieldName="Gênero" fieldValue={fullGender(user!.gender)}/>
    </DetailsUserLine>
  </>;
}
