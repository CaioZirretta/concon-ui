import { user } from '@/pages/users/mocks/user.mock.ts';

export function CCHomePage() {
  return <>
    <h1>{user.name}</h1>
  </>
}
