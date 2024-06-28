import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonsLibService {
  #others: Array<number> = [];
  private _others = new BehaviorSubject<number>(0);
  channel$ = this._others.asObservable();
  constructor() {}

  setOther(): void {
    this.#others.push(Math.random());
    localStorage.setItem('others', JSON.stringify(this.#others));
    this._others.next(this.#others.length);
  }
}
