import { Component } from '@angular/core';
import { FirebaseControlService } from "src/app/services/firebase-control.service";


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  teamListSelector: any = 'HonKongMacau';
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
        break;
        case "China":
          this.teamListSelector = input;
          this.getTeamMemberList('yungFolder/ourTeam/hkMacauTeamMember');
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