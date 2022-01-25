import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
// import { ChatComponent } from './chat/chat.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angularChatBot';
  colorBackRight: string = '#6d26f0';
  colorFontRight: string = '#ffffff';
  colorBackLeft: string = '#000000';
  colorFontLeft: string = '#ffffff';
  messages = [];
}
