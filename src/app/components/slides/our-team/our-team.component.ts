import { Component } from '@angular/core';
import { FirebaseControlService } from "src/app/services/firebase-control.service";


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  teamListSelector: any = 'HonKongMacau';
  ourTeamDisplayImageURL: string = 'https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0material%2FoutTeamDesign2.png?alt=media&token=4bc38144-04bf-4066-bc4a-cd037a5ad664';
  // itemCardArrayContainer: any[] = []
  ourTeamList: teamMember[] = [];



  constructor(private fbS: FirebaseControlService) {
    this.getTeamMemberList('yungFolder/ourTeam/chinaTeamMember');
  }

  selectTeamList(input: string) {
    switch (input) {
      case "HonKongMacau":
        this.teamListSelector = input;
        this.getTeamMemberList('yungFolder/ourTeam/chinaTeamMember');
        this.ourTeamDisplayImageURL = "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0material%2FoutTeamDesign2.png?alt=media&token=4bc38144-04bf-4066-bc4a-cd037a5ad664"
        break;
      case "China":
        this.teamListSelector = input;
        this.getTeamMemberList('yungFolder/ourTeam/hkMacauTeamMember');
        this.ourTeamDisplayImageURL = 'https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0material%2FoutTeamDesign.png?alt=media&token=5b3fe704-f6f6-40b6-9de8-5e293c387fe3';
        break;
      case "all":
        this.teamListSelector = input;
        this.getTeamMemberList('yungFolder/ourTeam/hkMacauTeamMember');
        this.ourTeamDisplayImageURL = 'https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0pdf%2FfullTeamOChart.pdf?alt=media&token=fee29bbd-a41d-41bd-b183-6499d5c9a11f';
        // this.ourTeamDisplayImageURL = 'https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/yungFolder%2F0material%2FoutTeamDesign.png?alt=media&token=5b3fe704-f6f6-40b6-9de8-5e293c387fe3';
        break;
    }
  }

  getTeamMemberList(address: string) {
    let itemS = this.fbS.getCollectionValueChange(address);
    itemS.subscribe((x) => {
      this.ourTeamList = x;
    });
  }



}

class teamMember {
  image: String = '';
  name: String = '';
  description: String = '';
  constructor(name: string, description: string, image: string) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}