import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarGidContainer: any = [];
  navExpanded = false;
  navHeight = '0px';

  atHomePage = false;
  routerUrl = ''

  selector: any | undefined
  currentRoute: string = '';

  constructor(private router: Router) {
    let x = this.onHomePage();

    let home: navBarItem = { dir: 'homepage', iconName: 'home' };

    this.navbarGidContainer = [
      { dir: 'homepage', iconName: 'home', displayName: 'Home' },
      { dir: 'ourTeam', iconName: 'engineering', displayName: 'Our Team' },
      { dir: 'ourProject', iconName: 'receipt_long', displayName: 'Our Project' },
      { dir: 'ourClient', iconName: 'groups', displayName: 'Our Client' },
      // { dir: 'contactUs', iconName: 'contact_support', displayName: 'Contact Us' },
      // { dir: 'admin_pannal', iconName: 'admin_pannal', displayName: '(tem)Admin Pannal' },
    ];

  }

  async onHomePage(){
    return await this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.router.url == "/") {
          this.routerUrl = this.router.url; 
          // this.atHomePage = true;
        } else {
          this.routerUrl = this.router.url;  
          this.atHomePage = false;
        }
      }
    });
  }



  expanNavbar(inputDiv: any,triggerArea:any) {
    inputDiv.style.width = this.navExpanded ? '0vw' : '40vw';
    triggerArea.style.width = this.navExpanded ? '0vw' : '100vw';
    inputDiv.style.opacity  = this.navExpanded ? '0' : '1';
    this.navExpanded = this.navExpanded ? false : true;
  }

  navBarClick(inputDiv: any) {
    inputDiv.classList.toggle("change");
  }

  self(input: any) {
    let selected = this.selector == input;
    if (selected!!) {
      input.id = "newid";
      console.log(input);

    }
  }

}

export interface navBarItem {
  dir: string;
  iconName: string;
}
