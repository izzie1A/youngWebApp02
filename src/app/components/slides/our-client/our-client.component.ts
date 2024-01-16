import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, getDoc, addDoc, deleteDoc, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseControlService} from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
  styleUrls: ['./our-client.component.css']
})
export class OurClientComponent {
  ourClientArticels = [,]
  firestore: Firestore = inject(Firestore);
  // clientList$: Observable<any[]>;

  imageHolder: any;
  pageCounter: number = 0;
  pageArray: any[] = [];
  pageItemArray: any[] = [];

  constructor(private fbs: FirebaseControlService) {
    // const clientCollection = collection(this.firestore, '/yungFolder/ourClient/clientReferences');
    // this.clientList$ = collectionData(clientCollection);
    this.t();
  }
  async t() {
    let result = await this.fbs.queryCondition('/yungFolder/ourClient/clientReference', 100, "name", "!=", 'null','name');
    let pageItemlength = 9;
    for (let i = 0; i < result.length; i++) {
      let subArray = []
      for (let j = 0; j < pageItemlength; j++) {
        i++;
        console.log(i);
        subArray.push(result[i]);
      }
      this.pageItemArray.push(subArray);
    }
  }
  // pageSwitch(direction: number) {
  //   let ans = this.pageCounter + direction
  //   if (ans > this.pageItemArray.length+2) {
  //     console.log(ans);
  //     this.pageCounter = 0;
  //   } else if (ans < 0) {
  //     ans = this.pageItemArray.length;
  //     console.log(ans);
  //     this.pageCounter = ans;
  //   } else if(ans < this.pageItemArray.length+2 && ans > 0){
  //     console.log(ans);
  //     this.pageCounter = ans;
  //   }
  // }
  pageSwitch(direction: number) {
    const maxPageIndex = this.pageItemArray.length + 0;
    let ans = this.pageCounter + direction;
  
    if (ans >= 0 && ans < maxPageIndex) {
      console.log(ans);
      this.pageCounter = ans;
    } else if (ans < 0) {
      ans = this.pageItemArray.length;
      console.log(ans);
      this.pageCounter = ans;
    } else {
      console.log(ans);
      this.pageCounter = 0;
    }
  }

  viewImage(imageRef: any) {
    this.imageHolder = imageRef;
  }
  viewImageList(imageRef: any[]) {
  }
}
