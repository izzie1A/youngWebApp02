import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {


  contactsUsItemList = [
    {
      egName: "Hong Kong Office",
      zhName: "香港辦公室",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/hkTransparentMap.png?alt=media&token=ec0eb74e-fae0-4a89-b265-f982df657e7e",
      englishAddress: "18/F Sunshine Plaza	353 Lockhart Road, Wanchai,	Hong Kong",
      chineseAddress: "上海市靜安區恆豐路638號蘇河一號1918室",
      egTelephone: "Tel: (852) 2866 6283 ",
      zhTelephone: "電話: (852) 2866 6283 ",
      egFax: "Email: company@fujichina.com",
      zhFax: "Email: company@fujichina.com",
    },
    {
      egName: "Macau Office",
      zhName: "澳門辦公室",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/macauVector.png?alt=media&token=e37a0d9d-c6c8-4738-837a-d392d351ea29",
      englishAddress: "Alm. Dr. Carlos'd Assumpcao No. 180 / Tong Nam Ah Central Comercio,10G andar, Macau ",
      chineseAddress: "澳門宋玉生廣場180號 / 東南亞商業中心",
      egTelephone: "Tel: (853) 2875 2730",
      zhTelephone: "電話: (853) 2875 2730",
      egFax: "Email: company@fujichina.com",
      zhFax: "Email: company@fujichina.com",
    },
    {
      egName: "Shanghai Office",
      zhName: "上海辦公室",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/macauVector.png?alt=media&token=e37a0d9d-c6c8-4738-837a-d392d351ea29",
      englishAddress: "Room 1918, No.638 Hengfeng Road / Suhe No.1, Jing An District, Shanghai, China 200070",
      chineseAddress: "上海市靜安區恆豐路638號 / 蘇河一號1918室",
      egTelephone: "Tel:(86) 21-5258 5002",
      zhTelephone: "電話:(86) 21-5258 5002",
      egFax: "Email: company@fujichina.com",
      zhFax: "Email: company@fujichina.com",
    },
    {
      egName: "Beijing Office",
      zhName: "北京办公室",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0material%2FbejingMap.png?alt=media&token=175db2d6-d263-4741-a18a-dd524cee62fc",

      englishAddress: "No.43 Anlelin Road, Dongcheng District,Beijing, China ",
      chineseAddress: "北京市東城區,安樂林路43號",
      egTelephone: "Tel: 010-85115851",
      zhTelephone: "電話: 010-85115851",
      egFax: "Email: company@fujichina.com",
      zhFax: "Email: company@fujichina.com",
    },
  ]
  contactUsItemListZH = [];
  ourTeamTextZH = "本公司現有行政及技術職員40多人,以雄厚實力及專業技術滿足各發展商,承辦 商,建築師及設計師等的不同要求。";
  ourTeamTextZH2 = "如遇有技術要求較高的工程,本公司將因應需求而委派土木工程師,結構工程 師,建築師或電機工程師作技術支援。";
  ourTeamTextEN = "We have over 40 experienced management and technical staff members at head office both financially and technically, we gain the advantage of fulfilling the diverse requirements of the developer, contractor, architect and designer";
  ourTeamTextEN2 = "Our company would assign civil and structural engineers, architects, electrical and mechanical engineers, and technical staff to participate in our project whenever the situation requires.";
  ourProjectTextZH = "富士(中國)成立於1984年,其主要業務為承辦室內裝飾工程。";
  ourProjectTextZH2 = "在過去多年間,本公司已完成了數以百計工程項目,其中包括有酒店,會所,餐 廳,商舖,辦公室及服務式公寓等,成績卓越。工程地點由香港遠至澳門及中國 大陸各省市。";
  ourProjectTextZH3 = "富士(中國)獲取ISO 9001品質管理證書,印證了本公司為顧客提供全面優質室內 裝飾工程施工管理的承諾,更標誌著本公司臻至國際認可標準的管理水平。";
  ourProjectTextEN = "Fuji (China) was incorporated in 1984 with its principal business in interior fitting-out and decoration services";
  ourProjectTextEN2 = "In the past years, we have successfully completed hundreds of reputable projects including hotel, cub houses, restaurants, retail outlets, commercial premises and service apartment in Hong Kong, Macau and Mainland China";
  ourProjectTextEN3 = "Fuji (China) was awarded with ISO 9001 certificate in project management of interior decoration. The award for Fuji (China) registers the company's outstanding tradition in quality assurance and that our company has achieved an internationally recognized status for quality management stardard.";
  contactUsTextZH = "";
  contactUsTextEN = "";
  imageUrl: string = "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/macauVector.png?alt=media&token=e37a0d9d-c6c8-4738-837a-d392d351ea29";

  // homePageArrayBackUp = [
  //   this.ourTeamTextZH,
  //   this.ourTeamTextZH2,
  //   this.ourTeamTextEN,
  //   this.ourTeamTextEN2,
  //   this.ourProjectTextZH,
  //   this.ourProjectTextZH2,
  //   this.ourProjectTextZH3,
  //   this.ourProjectTextEN,
  //   this.ourProjectTextEN2,
  //   this.ourProjectTextEN3,
  // ]
  homePageArray = [
    this.ourTeamTextEN,
    this.ourTeamTextEN2,
    this.ourProjectTextEN,
    this.ourProjectTextEN2,
    this.ourProjectTextEN3,
  ]
  xList: contactUsOffice[] = [];
  // x = new ("Beijing Office","北京辦公室",this.imageUrl)
  constructor(public stateService: StateService) {
  }
  
  changeLanguages(language: string): void {
    this.stateService.changeLanguage(language);
    console.log(this.stateService.language);
    if (this.stateService.language == 'zh') {
      this.homePageArray = [
        this.ourTeamTextZH,
        this.ourTeamTextZH2,
        this.ourProjectTextZH,
        this.ourProjectTextZH2,
        this.ourProjectTextZH3,
      ]
    } else if (this.stateService.language == 'eg') {
      this.homePageArray = [
        this.ourTeamTextEN,
        this.ourTeamTextEN2,
        this.ourProjectTextEN,
        this.ourProjectTextEN2,
        this.ourProjectTextEN3,
      ]
    }
  }
}
class contactUsOffice2 {
  egName = "undefinded"
  zhName = "undefinded"
  constructor(egName: string, zhName: string, imageUrl: string) {
    this.egName = egName;
    this.zhName = zhName;
  }
}

export class contactUsOffice {
  egName: string;
  zhName: string;
  egAddress: string;
  zhAddress: string;
  telephone: string;
  fax: string;
  imageUrl: string;

  constructor(
    egName: string,
    zhName: string,
    egAddress: string,

    zhAddress: string,
    telephone: string,
    fax: string,
    imageUrl: string,
  ) {
    this.imageUrl = imageUrl;
    this.egName = egName;
    this.zhName = zhName;
    this.egAddress = egAddress;
    this.zhAddress = zhAddress;
    this.telephone = telephone;
    this.fax = fax;
  };
}