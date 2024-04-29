import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, doc, deleteDoc, setDoc, getDoc, WhereFilterOp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'
import { FirebaseControlService } from "src/app/services/firebase-control.service";

import { query, orderBy, limit } from "firebase/firestore";

@Component({
  selector: 'app-our-project-categories',
  templateUrl: './our-project-categories.component.html',
  styleUrls: ['./our-project-categories.component.css']
})
export class OurProjectCategoriesComponent {
  firestore: Firestore = inject(Firestore);

  getAddress: any;
  fbAddress: string = 'yungFolder/ourProject/' + this.router.url.split('/')[this.router.url.split('/').length - 2];;

  firestoreItemContainer: any;
  firebaseCollection2: any

  imageHolder: any;
  imageListHolder: any;
  resultText = 'projects in';

  projectState: string = '';
  location: string = '';
  cat: string = this.router.url.split('/')[this.router.url.split('/').length - 1];

  detailMenu = ['Department Store', 'Hotel', 'Restaurant', 'Theme Park']
  detailMenuHK = ["Residential", "Commercial", "Hotel", "Theme Park", "Retail"]
  detailMenuMC = ['Casino', 'Hotel', 'Restaurant', 'Retail']
  detailMenuCH = ['Residentia', 'Hotel', 'Retail']
  detailMenuSelector = ''

  urlArray = this.router.url.split('/');

  constructor(private fbs: FirebaseControlService, private route: ActivatedRoute, public router: Router) {
    this.firebaseCollection2 = this.t();
  }

  async t() {
    let result = await this.fbs.queryCondition(this.fbAddress, 200, "calgary", "==", this.getCat(), 'calgary');
    console.log(this.fbAddress,this.getCat());
    console.log(result);
    return result
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
  getCat(): string {
    const myArray: string[] = this.router.url.split('/');
    let result = myArray[myArray.length - 1].toString();
    result = this.transformString(result);
    return result.toLowerCase();
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
  transformString(input: string): string {
    let transformedString = input.replace(/ /g, '_');
    transformedString = transformedString.toLowerCase();
    return transformedString;
  }
  transformTitle(input: string): string {
    let transformedString = input.replace(/_/g, ' ');
    transformedString = transformedString.charAt(0).toUpperCase() + transformedString.slice(1).toLowerCase();
    return transformedString;
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
