// Düz TypeScript tipleri — Zod bağımlılığı yok, sadece tip tanımı

export type UserRole = 'admin' | 'manager' | 'customer';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
}

export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
