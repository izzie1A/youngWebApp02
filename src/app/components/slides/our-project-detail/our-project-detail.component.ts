import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, doc, deleteDoc, setDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-our-project-detail',
  templateUrl: './our-project-detail.component.html',
  styleUrls: ['./our-project-detail.component.css']
})
export class OurProjectDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);

  getAddress: any;

  firestoreItemContainer: any;
  firebaseCollection: Observable<any>

  imageHolder: any;
  imageListHolder: any;
  resultText = 'projects in';

  projectState: string = '';
  location: string = '';

  detailMenuHolder: string[] = [];
  detailMenu = ['Department Store', 'Hotel', 'Restaurant', 'Theme Park']
  detailMenuHK = ["Residential", "Commercial", "Hotel", "Theme Park", "Retail"]
  detailMenuMC = ['Casino', 'Hotel', 'Restaurant', 'Retail']
  detailMenuCH = ['Resident', 'Hotel', 'Retail']
  detailMenuSelector = ''

  item$: Observable<any[]> | undefined;

  constructor(private fbs: FirebaseControlService, private route: ActivatedRoute, public router: Router) {
    let x = this.router.url.split('/')
    this.getAddress = "yungFolder/ourProject/" + x[x.length - 1];
    const itemCollection = collection(this.firestore, this.getAddress);
    this.firebaseCollection = collectionData(itemCollection);

    this.getTitle(this.getAddress);
    // this.t();
    this.getCatList();
  }

  async ngOnInit() {
  }



  getCatList() {
    // this.detailMenuHolder = this.detailMenuCH; 
    let add = ''
    const myArray: string[] = this.getAddress.split('/');
    const capArray: string[] = myArray[myArray.length - 1].split(/(?=[A-Z])/);
    capArray[capArray.length - 1] == 'complete' ? this.projectState = 'Current' : this.projectState = 'Completed'
    switch (capArray[0]) {
      // complete
      case 'china': {
        this.detailMenuHolder = this.detailMenuCH;
        add = 'yungFolder/pageControl/calgaryChina'
        break;
      };
      case 'hk': {
        this.detailMenuHolder = this.detailMenuHK;
        add = 'yungFolder/pageControl/calgaryHongKong'
        break;
      };
      case 'macau': {
        this.detailMenuHolder = this.detailMenuMC;
        add = 'yungFolder/pageControl/calgaryMacau'
        break;
      };
    }
    this.item$ = this.fbs.t(add);
    this.item$.subscribe((x)=>{
      console.warn(x)
      let y:string[] = [];
      x.forEach((number) => {
      y.push(number.name);
      });
      this.detailMenuHolder = y;
    })
    return capArray[0]
  }

  detailMenuSelect(input: string) {
    this.detailMenuSelector = input;
    let result = ['/yungFolder/ourProject/testHK', 100, "tag", "==", input, 'name'];
    console.warn(result);
    this.fbs.writeUserData('/yungFolder/ourProject/testHK', {
      name: "Los Angeles",
    })
  }

  async t() {
    let result = await this.fbs.queryCondition('/yungFolder/ourClient/clientReference', 100, "name", "!=", 'null', 'name');
    let pageItemlength = 9;
    let pageItemArray = [];
    console.warn(result)
    for (let i = 0; i < result.length; i++) {
      let subArray = []
      for (let j = 0; j < pageItemlength; j++) {
        i++;
        console.log(i);
        subArray.push(result[i]);
      }
      pageItemArray.push(subArray);
    }
    console.log(pageItemArray);
  }

  getLocation(address: string) {
    const myArray: string[] = address.split('/');
    const capArray: string[] = myArray[myArray.length - 1].split(/(?=[A-Z])/);
    return myArray[myArray.length - 1]
  }
  // current
  getTitle(address: string) {
    let ans = "Completed projects in ";
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

  writeProject() { }

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