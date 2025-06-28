import { Loader } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '@/pages/users/types/User.type.ts';
import { userMock } from '@/pages/users/mocks/user.mock.ts';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { CCDetailsUserField } from '@/pages/users/components/details-user/components/CCDetailsUserField.tsx';

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

  return <>
    <div className="w-full mt-12 flex items-center gap-4">
      <Avatar className="size-12 border-2">
        <AvatarImage></AvatarImage>
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <span className="text-lg">{user?.name}</span>
    </div>
    <div className="w-full flex gap-4 mt-8">
      <CCDetailsUserField fieldName='Gênero' fieldValue={user!.gender}/>
      <CCDetailsUserField fieldName='Gênero' fieldValue={user!.gender}/>
      <CCDetailsUserField fieldName='Gênero' fieldValue={user!.gender}/>
      <CCDetailsUserField fieldName='Gênero' fieldValue={user!.gender}/>
      <CCDetailsUserField fieldName='Gênero' fieldValue={user!.gender}/>
    </div>
  </>;
}
