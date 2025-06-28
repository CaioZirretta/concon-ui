import { Gender } from '@/pages/users/enums/gender.enum.ts';

export type UserList = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  isActive: boolean;
}

export type User = UserList & {
  avatar: string; // url
  gender: Gender;
  phone: string;
  residence?: string;
  building?: string;
  unit: string
  birthDate?: string;
  occupationTitle?: string;
  currentContractStart?: string;
  currentContractEnd?: string;
  lastAccess: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}
