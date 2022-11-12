import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, CreateMessageDTO } from '../models/message.model';
@Injectable({

  providedIn: 'root'

})
export class MessageService {
  // Url send data //
  private apiUrl = 'http://localhost:3000/api/message';

  constructor(private http: HttpClient) { }
  // Send message //
  postMessage(dto: CreateMessageDTO) {
    return this.http.post<Message>(this.apiUrl, dto);
  }
}