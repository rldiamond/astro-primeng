import { Component } from '@angular/core';
import {Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'PrimeNgAstro';
  dialogVisible = false;
  options = [
    {
      name: 'Test',
    },
    {
      name: 'Test2'
    },
    {
      name: 'Test3'
    }
  ]
  messages: Message[] = [
    {severity: 'info', summary: 'Success', detail: 'Message Content', sticky: true},
    {severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true},
    {severity: 'warn', summary: 'Success', detail: 'Message Content', sticky: true},
    {severity: 'error', summary: 'Success', detail: 'Message Content', sticky: true},
  ];
  selection: any;

  products = [
    {
      code: 'abc123',
      name: 'Watch',
      category: 'Accessories',
      quantity: 25
    },
    {
      code: 'abc123',
      name: 'Watch',
      category: 'Accessories',
      quantity: 25
    },
    {
      code: 'abc123',
      name: 'Watch',
      category: 'Accessories',
      quantity: 25
    },
    {
      code: 'abc123',
      name: 'Watch',
      category: 'Accessories',
      quantity: 25
    },
    {
      code: 'abc123',
      name: 'Watch',
      category: 'Accessories',
      quantity: 25
    },
  ]

  constructor(private messageService: MessageService) {
  }

  showMessage() {
    this.messages.forEach(m => this.messageService.add(m));
  }
}
