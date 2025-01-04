import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export type UserRoleCheck = { id: string; role: UserRole };

type UserRole = keyof typeof USER_ROLES;
type UserPermission = (typeof USER_ROLES)[UserRole][number]

const USER_ROLES = {
  ADMIN: ["module:userManagement"],
  MANAGEMENT: [],
  OPERATOR_SENIOR: [],
  OPERATOR: [],
  RESIDENT: [],
  RESIDENT_MINOR: [],
  SERVICE: [],
  GUEST: []
} as const

@Injectable({ providedIn: 'root' })
export class UserRoleService {
  hasPermission(user: UserRoleCheck, permission: UserPermission): boolean {
    return (USER_ROLES[user.role] as readonly UserPermission[]).includes(permission);
  }
}
