import { CheckIcon, EditIcon, Loader, XIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '@/pages/users/types/User.type.ts';
import { userMock } from '@/pages/users/mocks/user.mock.ts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { CCDetailsUserField } from '@/pages/users/components/details-user/components/CCDetailsUserField.tsx';
import { CCDetailsUserLine } from '@/pages/users/components/details-user/components/CCDetailsUserLine.tsx';
import { fullGender } from '@/pages/users/enums/gender.enum.ts';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { Button } from '@/components/ui/button.tsx';

export function CCDetailsUserPage() {
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

    <CCDetailsUserLine>
      <CCDetailsUserField fieldName="Unidade" fieldValue={user?.unit}/>
      <CCDetailsUserField fieldName="Região" fieldValue={user?.building}/>
      <CCDetailsUserField fieldName="Residência" fieldValue={user?.residence}/>
      <CCDetailsUserField fieldName="Ocupação" fieldValue={user?.occupationTitle}/>
    </CCDetailsUserLine>

    <CCDetailsUserLine>
      <CCDetailsUserField fieldName="Telefone" fieldValue={user?.phone}/>
      <CCDetailsUserField fieldName="E-mail" fieldValue={user?.email}/>
      {user?.birthDate && <CCDetailsUserField fieldName="Dt. Nascimento" fieldValue={user?.birthDate}/>}
      <CCDetailsUserField fieldName="Gênero" fieldValue={fullGender(user!.gender)}/>
    </CCDetailsUserLine>
  </>;
}
