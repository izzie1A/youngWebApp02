import { Component, ElementRef, ViewChild } from '@angular/core';
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})

export class CaroselComponent {
  @ViewChild('scrollableDiv')
  scrollableDiv!: ElementRef;
  @ViewChild('scrollableDiv2') scrollableDiv2: ElementRef | undefined;
  li:any[]  = [0, 0, 0, 0, 0, 0];
  pp:any[]  = [];
  scrollposition:number = 0;

  p:any

  constructor(private fbs: FirebaseControlService,private el: ElementRef) {
  this.t();
  }

  async t() {
    let result = await this.fbs.queryCondition('/yungFolder/ourProject/hkProjectListComplete/', 6, "name", "!=", 'null', 'name');
    console.warn(result);
    this.pp = result;
  }


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

  down(position: { x: number; y: number },x:any){
    this.p = position.x;
  }
  up(position: { x: number; y: number },x : HTMLElement){
    const direction = this.p-position.x
    // const perpage2 = this.scrollableDiv2?.nativeElement.scrollWidth/this.li.length;
    const perpage = (this.scrollableDiv2?.nativeElement as HTMLElement).scrollWidth/this.li.length;
    const positionLeft = (this.scrollableDiv2?.nativeElement as HTMLElement).scrollLeft;
    if(direction>0){
      (this.scrollableDiv2?.nativeElement as HTMLElement).scrollLeft = positionLeft+perpage;
    }else if(direction<0){
      (this.scrollableDiv2?.nativeElement as HTMLElement).scrollLeft = positionLeft-perpage;
    }
  }
}
