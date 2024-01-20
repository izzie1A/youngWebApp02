import { Component } from '@angular/core';
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-yung-cert-gallary',
  templateUrl: './yung-cert-gallary.component.html',
  styleUrls: ['./yung-cert-gallary.component.css']
})
export class YungCertGallaryComponent {
  pageindex: number = 0;
  pageItemArray: any[] = [];
  constructor(private fbs: FirebaseControlService) {
    // const clientCollection = collection(this.firestore, '/yungFolder/ourClient/clientReferences');
    // this.clientList$ = collectionData(clientCollection);
    this.t();
  }
  async t() {
    let result = await this.fbs.queryCondition('/yungFolder/ourClient/clientReference', 100, "name", "!=", 'null', 'name');
    let pageItemlength = 9;
    this.pageItemArray = result;
    // for (let i = 0; i < result.length; i++) {
    //   let subArray = []
    //   for (let j = 0; j < pageItemlength; j++) {
    //     i++;
    //     console.log(i);
    //     subArray.push(result[i]);
    //   }
    //   this.pageItemArray.push(subArray);
    // }
  }
  switchPage(inputInt: number) {
    if (this.pageindex + inputInt > this.pageItemArray.length-1) {
      this.pageindex = 0;
    } else if (this.pageindex + inputInt < 0) {
      this.pageindex = this.pageItemArray.length - 1;
    } else if (this.pageindex + inputInt < this.pageItemArray.length) {
      this.pageindex = this.pageindex + inputInt;
    }
  }
}
