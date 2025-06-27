import type { User } from '@/pages/users/types/User.type.ts';

export const user: Partial<User> = {
  name: 'Caio'
}

export const userList: User[] = [
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
