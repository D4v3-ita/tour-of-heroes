import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // messages: String[] = [];

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    // this.messages = this.messageService.messages;
  }

}
