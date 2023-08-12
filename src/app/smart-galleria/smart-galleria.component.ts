import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-smart-galleria',
  templateUrl: './smart-galleria.component.html',
  styleUrls: ['./smart-galleria.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SmartGalleriaComponent implements OnInit {

  @Input() thumbnail: Image | undefined;
  @Input() images: Image[] = [];
  @Input() thumbnailMaxWidth: string = '256px';
  @Input() thumbnailMaxHeight: string = '256px';

  visible = false;
  load = false;

  zoomLevel = 70
  minimumZoomLevel = 30
  maximumZoomLevel = 90;

  rotation = 0;

  displayedImage: Image | undefined;
  @ViewChild('displayedImg') imgHtml: any;

  constructor() {

  }

  ngOnInit() {

  }

  showDialog() {
    this.load = true;
    this.displayedImage = this.images[0];
    this.visible = true;
  }

  zoomIn() {
    if (this.zoomLevel < this.maximumZoomLevel) {
      this.zoomLevel += 10;
    }
  }

  zoomOut() {
    if (this.zoomLevel > this.minimumZoomLevel) {
      this.zoomLevel -= 10;
    }
  }

  rotateRight() {
    if (this.rotation === 270) {
      this.rotation = 0;
    } else {
      this.rotation += 90;
    }
  }

  rotateLeft() {
    if (this.rotation === -270) {
      this.rotation = 0;
    } else {
      this.rotation -= 90;
    }
  }

  setDisplayImage(image: Image) {
    this.resetZoom();
    this.resetRotation();
    this.displayedImage = image;
  }

  resetZoom() {
    this.zoomLevel = 70;
  }

  resetRotation() {
    this.rotation = 0;
  }


}

export interface Image {
  src: string;
}
