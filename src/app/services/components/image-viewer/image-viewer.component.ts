import { Component, Input } from '@angular/core'; // First, import Input
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @Input() image = ''; // decorate the property with @Input()
  @Input() imageList: any[] = []; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newItemEventList = new EventEmitter<any[]>();

  viewerIndex: number = 0;

  viewImage() {
    console.log('mmhb')
    this.newItemEvent.emit('');
  }

  viewImageList(imageRef: any[]) {
    this.newItemEventList.emit(imageRef);
  }

  viewImageListSwitch(inputInt: number) {
    let x = this.viewerIndex + inputInt;
    console.log(this.imageList.length, x)
    if (x < 0) {
      this.viewerIndex = this.imageList.length-1;
    } else if (x == this.imageList.length) {
      this.viewerIndex = 0;
    }
    else if (x < this.imageList.length) {
      this.viewerIndex = x;
    }
  }
}
