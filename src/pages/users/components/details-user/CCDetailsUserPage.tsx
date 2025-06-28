import { Loader } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '@/pages/users/types/User.type.ts';
import { userMock } from '@/pages/users/mocks/user.mock.ts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { CCDetailsUserField } from '@/pages/users/components/details-user/components/CCDetailsUserField.tsx';
import { CCDetailsUserLine } from '@/pages/users/components/details-user/components/CCDetailsUserLine.tsx';
import { Gender } from '@/pages/users/enums/gender.enum.ts';

export function CCDetailsUserPage() {
  const { state } = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      id: state.id,
      ...userMock
    })
    setLoading(false);
  }, [state.id])

  if (loading) {
    return <Loader></Loader>
  }

  function fullGender(gender: Gender) {
    switch (gender) {
      case Gender.MALE: return 'Masculino';
      case Gender.FEMALE: return 'Feminino';
      default: return 'Outro';
    }
  }

  return <>
    <div className="w-full mt-12 flex items-center gap-4">
      <Avatar className="size-12 border-2">
        <AvatarImage></AvatarImage>
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <span className="text-lg">{user?.name}</span>
    </div>
    <CCDetailsUserLine className="flex-wrap">
      <CCDetailsUserField fieldName='Telefone' fieldValue={user!.phone}/>
      <CCDetailsUserField fieldName='E-mail' fieldValue={user!.email}/>
      {user!.birthDate && <CCDetailsUserField fieldName="Dt. Nascimento" fieldValue={user!.birthDate}/>}
      <CCDetailsUserField fieldName='Gênero' fieldValue={fullGender(user!.gender)}/>
    </CCDetailsUserLine>
  </>;
}
