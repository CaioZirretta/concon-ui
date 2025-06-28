import type { User, UserList } from '@/pages/users/types/User.type.ts';
import { Gender } from '@/pages/users/enums/gender.enum.ts';

export const user: Partial<UserList> = {
  name: 'Caio'
}

export const userList: UserList[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@example.com",
    roles: ["admin", "user"],
    isActive: true,
  },
  {
    id: "2",
    name: "Maria Souza",
    email: "maria.souza@example.com",
    roles: ["user"],
    isActive: false,
  },
  {
    id: "3",
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    roles: ["manager", "user"],
    isActive: true,
  },
  {
    id: "4",
    name: "Ana Pereira",
    email: "ana.pereira@example.com",
    roles: ["user"],
    isActive: true,
  },
  {
    id: "5",
    name: "Pedro Alves",
    email: "pedro.alves@example.com",
    roles: ["developer"],
    isActive: true,
  },
  {
    id: "6",
    name: "Luísa Mendes",
    email: "luisa.mendes@example.com",
    roles: ["admin"],
    isActive: true,
  },
  {
    id: "7",
    name: "Rafael Costa",
    email: "rafael.costa@example.com",
    roles: ["user", "support"],
    isActive: false,
  },
  {
    id: "8",
    name: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    roles: ["manager"],
    isActive: true,
  },
  {
    id: "9",
    name: "Bruno Santos",
    email: "bruno.santos@example.com",
    roles: ["developer", "user"],
    isActive: false,
  },
  {
    id: "10",
    name: "Juliana Rocha",
    email: "juliana.rocha@example.com",
    roles: ["user"],
    isActive: true,
  },
  {
    id: "11",
    name: "Marcos Ferreira",
    email: "marcos.ferreira@example.com",
    roles: ["support"],
    isActive: true,
  },
  {
    id: "12",
    name: "Patrícia Gomes",
    email: "patricia.gomes@example.com",
    roles: ["admin", "manager"],
    isActive: false,
  },
];

export const userMock: Omit<User, 'id'> = {
  name: "Ana Carolina Silva",
  email: "ana.silva@example.com",
  roles: ["admin", "user"],
  isActive: true,
  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  gender: Gender.FEMALE,
  phone: "+55 (11) 98765-4321",
  residence: "Torre A",
  building: "Jardim Paulista",
  unit: "Ap 142B",
  birthDate: "1985-08-22",
  occupationTitle: "Arquiteta",
  currentContractStart: "2023-01-15",
  currentContractEnd: "2024-01-14",
  lastAccess: "2023-11-15T14:30:22Z",
  createdAt: "2022-05-10T09:15:33Z",
  updatedAt: "2023-11-10T16:45:18Z",
  updatedBy: "admin@system.com"
};
