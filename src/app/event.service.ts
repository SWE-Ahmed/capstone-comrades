// event.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  emitEvent(data: any): void {
    this.eventEmitter.emit(data);
  }
}