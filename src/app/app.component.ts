import { Component } from '@angular/core';
import {Message, MessageService} from "primeng/api";
import {Image} from "./smart-galleria/smart-galleria.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {

  thumbnail: Image;
  images: Image[];

  constructor(private messageService: MessageService) {
    this.thumbnail = {src: 'assets/dog-thumbnail.png'};
    this.images = [
      {src: 'assets/dog-large.png'},
      {src: 'assets/flowers-276014_640.jpg'},
      {src: 'assets/istockphoto-1146517111-612x612.jpg'},
      {src: 'assets/OIG.jpg'},
      {src: 'assets/pexels-pixabay-268533.jpg'},
    ];
  }

}
