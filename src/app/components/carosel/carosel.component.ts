import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent {
  @ViewChild('scrollableDiv') scrollableDiv: ElementRef | undefined;
  @ViewChild('scrollableDiv2') scrollableDiv2: ElementRef | undefined;
  li = [0, 0, 0, 0, 0, 0];
  scrollposition:number = 0;
  getScrollPosition() {
    const scrollPosition = this.scrollableDiv?.nativeElement.scrollTop;
    let answer = scrollPosition / this.scrollableDiv?.nativeElement.scrollHeight;
    console.log('Scroll Position:', answer);
    // console.log('Scroll Position:', scrollPosition);
  }
  getScrollPosition2() {
    // console.log('Scroll Position:', answer);
    const scrollPosition2 = this.scrollableDiv2?.nativeElement.scrollLeft;
    const totalScrollableWidth = this.scrollableDiv2?.nativeElement.scrollWidth;
    let ans = scrollPosition2 / totalScrollableWidth
    this.scrollposition =Math.floor(ans*this.li.length);
  }
}
