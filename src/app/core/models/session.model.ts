export interface Session {
  token: string;
  userId: number;
  username: string;
  role: string;
  expiresAt: string;
}
