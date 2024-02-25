import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, doc, deleteDoc, setDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-our-project-categories',
  templateUrl: './our-project-categories.component.html',
  styleUrls: ['./our-project-categories.component.css']
})
export class OurProjectCategoriesComponent {
  firestore: Firestore = inject(Firestore);

  getAddress: any;

  firestoreItemContainer: any;
  firebaseCollection: Observable<any>

  imageHolder: any;
  imageListHolder: any;
  resultText = 'projects in';

  projectState: string = '';
  location: string = '';

  detailMenu = ['Department Store', 'Hotel', 'Restaurant', 'Theme Park']
  detailMenuHK = ["Residential", "Commercial", "Hotel", "Theme Park", "Retail"]
  detailMenuMC = ['Casino', 'Hotel', 'Restaurant', 'Retail']
  detailMenuCH = ['Residentia', 'Hotel', 'Retail']
  detailMenuSelector = ''

  urlArray = this.router.url.split('/');

  constructor(private fbs: FirebaseControlService, private route: ActivatedRoute, public router: Router) {
    let x = this.router.url.split('/');
    this.getAddress = this.urlArray[this.urlArray.length - 2] ;
    console.warn(this.getAddress);
    let a = 'yungFolder/ourProject/'+this.urlArray[this.urlArray.length - 2];
    const itemCollection = collection(this.firestore, a);
    this.firebaseCollection = collectionData(itemCollection);
    // this.getTitle(this.getAddress);
    // this.t();
  }

  async ngOnInit() {
  }
  getFolderAddress(){

  }

  getLocation(address: string) {
    const myArray: string[] = address.split('/');
    const capArray: string[] = myArray[myArray.length - 1].split(/(?=[A-Z])/);
    capArray[capArray.length - 1] == 'complete' ? this.projectState = 'Current' : this.projectState = 'Completed'
    let x = capArray[0];
    switch (x) {
      case 'china': {
        x = "China";
        break;
      };
      case 'hk': {
        x = "Hong Kong";
        break;
      };
      case 'macau': {
        x = "Macau";
        break;
      };
      case 'overseas': {
        x = "Oversea";
        break;
      };
    }
    return x
  }
  getCat(address: string) {
    const myArray: string[] = address.split('/');
    return myArray[myArray.length - 1]
  }
  // current
  getTitle(address: string) {
    let ans = "Completed" + this.urlArray[this.urlArray.length - 1] + " projects in ";
    let ans2 = "Current projects in ";
    const myArray: string[] = address.split('/');
    const capArray: string[] = myArray[myArray.length - 1].split(/(?=[A-Z])/);
    capArray[capArray.length - 1] == 'complete' ? this.projectState = 'Current' : this.projectState = 'Completed'
    // this.projectState = capArray[capArray.length-1];
    this.location = capArray[0];

    switch (this.location) {
      // complete
      case 'china': {
        this.location = "China";
        break;
      };
      case 'hk': {
        this.location = "Hong Kong";
        break;
      };
      case 'macau': {
        this.location = "Macau";
        break;
      };
      case 'overseas': {
        this.location = "Oversea";
        break;
      };
    }

    let result = this.projectState + ' projects in ' + this.location;
    this.resultText = result;

    switch (address) {
      // current
      case 'yungFolder/ourProject/chinaProjectListCurrent': {
        return ans2 + "China";
      };
      case 'yungFolder/ourProject/hkProjectListCurrent': {
        return ans2 + "Hong Kong";
      };
      case 'yungFolder/ourProject/macauProjectListCurrent': {
        return ans2 + "Macau";
      };
      case 'yungFolder/ourProject/overseasProjectListCurrent': {
        return ans2 + "Oversea";
      };
      // complete
      case 'yungFolder/ourProject/chinaProjectListComplete': {
        return ans + "China";
      };
      case 'yungFolder/ourProject/hkProjectListComplete': {
        return ans + "Hong Kong";
      };
      case 'yungFolder/ourProject/macauProjectListComplete': {
        return ans + "Macau";
      };
      case 'yungFolder/ourProject/overseasProjectListComplete': {
        return ans + "Oversea";
      };
    }
    return
  }

  viewImageList(imageRef: any[] | string) {
    console.warn(imageRef)
    this.imageListHolder = imageRef;
  }

  replaceSpacesWithUnderscores(inputString: string) {
    return inputString.replace(/ /g, "_");
  }
  replaceSpacesWithSpacebar(inputString: string) {
    return inputString.replace(/ /g, "_");
  }
}

interface projectMenu {
  name: string;
  projectArray: any[];
}

interface project {
  name: string;
  imageArray: any[];
}
