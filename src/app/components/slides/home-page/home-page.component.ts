import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  contactsUsItemList = [
    {
      name:"Hong Kong",
      image:"https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/hkTransparentMap.png?alt=media&token=ec0eb74e-fae0-4a89-b265-f982df657e7e",
      address:"18/F Sunshine Plaza	353 Lockhart Road, Wanchai,	Hong Kong",
      phoneNumber:"Tel: (852) 2866 6283  Fax: (852) 2866 6732",
      email:"company@fujichina.com",
    },
    {
      name:"MACAU",
      image:"https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/macauVector.png?alt=media&token=e37a0d9d-c6c8-4738-837a-d392d351ea29",
      address:"18/F Sunshine Plaza	353 Lockhart Road, Wanchai,	Hong Kong",
      phoneNumber:"Tel: (853) 2875 2730  Fax: (853) 2875 2930",
      email:"company@fujichina.com",
    },
    {
      name:"Hong Kong",
      image:"https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/hkTransparentMap.png?alt=media&token=ec0eb74e-fae0-4a89-b265-f982df657e7e",
      address:"18/F Sunshine Plaza	353 Lockhart Road, Wanchai,	Hong Kong",
      phoneNumber:"Tel: (852) 2866 6283  Fax: (852) 2866 6732",
      email:"company@fujichina.com",
    },
    {
      name:"MACAU",
      image:"https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/macauVector.png?alt=media&token=e37a0d9d-c6c8-4738-837a-d392d351ea29",
      address:"18/F Sunshine Plaza	353 Lockhart Road, Wanchai,	Hong Kong",
      phoneNumber:"Tel: (853) 2875 2730  Fax: (853) 2875 2930",
      email:"company@fujichina.com",
    },
  ]
  contactUsItemListChinese = [];
}
