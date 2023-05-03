import {Component, OnInit} from '@angular/core';
import "./chat.component.js"
import {ChatService} from './chat.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(protected chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.getUsers()
    this.chatService.getMessages()
  }
  //version 1
  onSendMessage() {
     const messageInput = document.getElementById('message') as HTMLTextAreaElement;
     const chat_message = messageInput.value; 

     const usersSelect = document.getElementById('users') as HTMLSelectElement;;
    const id_utilisateur = parseInt(usersSelect.value);

    this.chatService.sendMessage(1, id_utilisateur, chat_message)
    .subscribe(
      (response) => {
        console.log('Message sent successfully:', response);
      },
      (error) => {
        console.error('Error sending message:', error);
      }
    );
  }
}








