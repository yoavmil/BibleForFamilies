import { Injectable } from '@angular/core';


/// TODO delete this
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public get hasUser(): boolean { return false; }
}
