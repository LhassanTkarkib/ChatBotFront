import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})export class ChatWindowComponent {
  messages: { content: string, sender: string }[] = [];
  newMessage: string = '';
  isChatVisible: boolean = false;
  isFirstOpen: boolean = true;

  toggleChatWindow() {
    if (this.isChatVisible) {
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.classList.add('closing');
        setTimeout(() => {
          this.isChatVisible = false;
          chatWindow.classList.remove('closing');
        }, 500);
      }
    } else {
      this.isChatVisible = true;
      setTimeout(() => {
        const chatWindow = document.querySelector('.chat-window');
        if (chatWindow) {
          chatWindow.classList.add('opening');
          setTimeout(() => {
            chatWindow.classList.remove('opening');
          }, 500);
        }
      }, 0);
      if (this.isFirstOpen) {
        this.messages.push({ content: 'Hey! How can I help you?', sender: 'bot' });
        this.isFirstOpen = false;
      }
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sender: 'user' });
      this.newMessage = '';
      this.scrollToBottom();
      setTimeout(() => {
        this.messages.push({ content: 'Hello! How can I help you?', sender: 'bot' });
        this.scrollToBottom();
      }, 1000);
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      const element = document.querySelector('.messages');
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    }, 100);
  }
}
