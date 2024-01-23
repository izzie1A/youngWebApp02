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
    this.pageItemArray = [
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%EF%BC%88%E6%B2%AA%EF%BC%89JZ%E5%AE%89%E8%AE%B8%E8%AF%81%E5%AD%97%5B2013%5D011696-1.png?alt=media&token=6499c9c5-9188-4a76-98f5-d316632f8b96",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7%E6%AD%A3%E6%9C%AC-1.png?alt=media&token=17b082dc-78a4-4d9e-a0bb-8dd08aa2a7c3",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E6%B7%B1%E5%9C%B3%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%AE%BE%E8%AE%A1%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6%EF%BC%88%E6%96%B0%E5%9C%B0%E5%9D%80%EF%BC%89-1.png?alt=media&token=482a7e16-d71a-4437-90e3-3c954c7451f9",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E6%B7%B1%E5%9C%B3%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%A3%85%E4%BF%AE%E4%B8%80%E7%BA%A7%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6%EF%BC%88%E6%96%B0%E5%9C%B0%E5%9D%80%EF%BC%89-1.png?alt=media&token=a4696632-15c7-48a0-9955-44b9c6b18eab",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E6%B7%B1%E5%9C%B3%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7%E6%AD%A3%E6%9C%AC%EF%BC%8820231220%EF%BC%89-1.png?alt=media&token=a5032840-155e-42d8-bf14-e4afbf889e5c",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E6%B7%B1%E5%9C%B3%E5%AF%8C%E5%BB%BA%E5%A3%AB%E5%B9%95%E5%A2%99%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6%EF%BC%88%E6%96%B0%E5%9C%B0%E5%9D%80%EF%BC%89-1.png?alt=media&token=7238a42d-5d8b-44e0-9a07-d5bbd754a24d",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E5%AE%89%E5%85%A8%E8%AE%B8%E5%8F%AF%E8%AF%81-%E6%B7%B1%E5%9C%B3%E5%AF%8C%E5%BB%BA%E5%A3%AB%E6%96%B0%E7%89%88-1.png?alt=media&token=e0527aa7-5fe1-43a7-86c9-8b96a4fea213",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E5%8C%97%E4%BA%AC%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6%EF%BC%88%E6%9C%89%E6%95%88%E6%9C%9F%E8%87%B328%E5%B9%B412%E6%9C%8822%EF%BC%89-1.png?alt=media&token=b89a5cfe-703b-4c97-90fa-393d1aec16c7",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E5%8C%97%E4%BA%AC%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%90%A5%E4%B8%9A%E6%89%A7%E7%85%A7%E6%AD%A3%E6%9C%AC-1.png?alt=media&token=f094f071-8e38-4232-93e4-8511daa37009",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E5%8C%97%E4%BA%AC%E5%AF%8C%E5%BB%BA%E5%A3%AB%E5%AE%89%E8%AE%B8%E8%AF%812022.9.13-1.png?alt=media&token=b7175425-a1f9-4ea7-a133-c7d64f1b5e08",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E4%B8%8A%E6%B5%B7%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%A3%85%E9%A5%B0%E5%B7%A5%E7%A8%8B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%BB%BA%E7%AD%91%E4%B8%9A%E4%BC%81%E4%B8%9A%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6-20210621115600699-1.png?alt=media&token=495f16ed-3032-4254-a3e0-103467e27847",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2F%E4%B8%8A%E6%B5%B7%E5%AF%8C%E5%BB%BA%E5%A3%AB%E8%A3%85%E9%A5%B0%E5%B7%A5%E7%A8%8B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%B7%A5%E7%A8%8B%E8%AE%BE%E8%AE%A1%E8%B5%84%E8%B4%A8%E8%AF%81%E4%B9%A6-20230606101640760(1)-1.png?alt=media&token=54a80d49-241a-4771-bdbe-0c234f9c76e4",
      "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FpdfImage%2FCertificate%20of%20Minor%20Works2023-2026-1.png?alt=media&token=087f5e86-1f57-40de-a59d-57422bfe2861",
    ];
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
