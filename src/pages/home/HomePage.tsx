import { user } from '@/lib/constants/user.constant.ts';

export function HomePage() {
  return <>
    <h1>{user.name}</h1>
  </>
}
