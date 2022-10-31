import { Component, OnInit } from '@angular/core';

// Model
import { Message, CreateMessageDTO } from '../../models/message.model';

// Service
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //variables
  messages: Message[] = [];

  constructor(

    private messageService: MessageService,

  ) { }

  ngOnInit(): void { }

  createNewMessage() {

    const message: CreateMessageDTO = {
      name: "Tomas",
      email: "Tomas@user.com",
      subject: "Titulo del mensaje enviado por Tomas",
      message: "Mensaje enviado por Tomas, desde la vista contactos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    }

    this.messageService.postMessage(message)
      .subscribe(message => {
        this.messages.unshift(message);
      });

  }
}
