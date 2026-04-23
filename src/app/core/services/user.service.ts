import { Observable, of, catchError, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { req } from '../http/test-project-team';
import { Injectable, signal } from '@angular/core';

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  lastActive: string;
  membership: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/admin/users`;

  // Internal mock data
  private mockUsers: AdminUser[] = [
    { id: 1, name: 'Julian Voss', email: 'jvoss@cinema-studios.com', avatar: 'https://i.pravatar.cc/150?u=1', joinDate: 'Oct 12, 2023', lastActive: '2 minutes ago', membership: 'ENTERPRISE', status: 'Active' },
    { id: 2, name: 'Elena Rodriguez', email: 'elena.r@global-vfx.io', avatar: 'https://i.pravatar.cc/150?u=2', joinDate: 'Dec 04, 2023', lastActive: '5 hours ago', membership: 'PREMIUM', status: 'Active' },
    { id: 3, name: 'Marcus Thorne', email: 'm.thorne@indie-prod.net', avatar: 'https://i.pravatar.cc/150?u=3', joinDate: 'Jan 15, 2024', lastActive: '3 days ago', membership: 'FREE', status: 'Suspended' },
    { id: 4, name: 'Sarah Jenkins', email: 's.jenkins@media-core.com', avatar: 'https://i.pravatar.cc/150?u=4', joinDate: 'Feb 02, 2024', lastActive: 'Just now', membership: 'PREMIUM', status: 'Active' },
    { id: 5, name: 'Aiden Smith', email: 'aiden@independent.co', avatar: 'https://i.pravatar.cc/150?u=5', joinDate: 'Feb 11, 2024', lastActive: '1 hour ago', membership: 'FREE', status: 'Active' }
  ];

  private _users = signal<AdminUser[]>([...this.mockUsers]);
  users = this._users.asReadonly();

  getUsers(): Observable<AdminUser[]> {
    if (environment.useMockData) {
      return of(this._users());
    }

    return req<AdminUser[]>(this.apiUrl).get().pipe(
      tap(data => this._users.set(data)),
      catchError(error => {
        console.warn('UserService: API failed, falling back to mock.', error);
        return of(this._users());
      })
    );
  }

  addUser(user: Partial<AdminUser>): Observable<AdminUser> {
    if (environment.useMockData) {
      const newUser = {
        ...user,
        id: Math.max(...this._users().map(u => u.id)) + 1,
        joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        lastActive: 'Just now'
      } as AdminUser;
      this._users.update(list => [newUser, ...list]);
      return of(newUser);
    }

    return req<AdminUser>(this.apiUrl).body(user).post().pipe(
      tap(created => this._users.update(list => [created, ...list])),
      catchError(error => { throw error; })
    );
  }

  updateUser(id: number, updates: Partial<AdminUser>): Observable<AdminUser> {
    if (environment.useMockData) {
      this._users.update(list => list.map(u => u.id === id ? { ...u, ...updates } : u));
      return of(this._users().find(u => u.id === id)!);
    }

    return req<AdminUser>(`${this.apiUrl}/${id}`).body(updates).put().pipe(
      tap(updated => this._users.update(list => list.map(u => u.id === id ? updated : u))),
      catchError(error => { throw error; })
    );
  }

  deleteUser(id: number): Observable<void> {
    if (environment.useMockData) {
      this._users.update(list => list.filter(u => u.id !== id));
      return of(undefined);
    }

    return req<void>(`${this.apiUrl}/${id}`).delete().pipe(
      tap(() => this._users.update(list => list.filter(u => u.id !== id))),
      catchError(error => { throw error; })
    );
  }
}
