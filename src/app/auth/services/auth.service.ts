import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenKey = 'token'; // Clave donde se guarda el token

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token); // Guardar token en localStorage
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Eliminar el token al cerrar sesión
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey); // Verifica si hay un token
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Obtener el token
  }
}
