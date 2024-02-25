import { Component } from '@angular/core';
import { FirebaseControlService } from "src/app/services/firebase-control.service";

@Component({
	selector: 'app-our-project',
	templateUrl: './our-project.component.html',
	styleUrls: ['./our-project.component.css']
})
export class OurProjectComponent {
	headerTitle = 'Our Project'

	ourProjectList: OurProjectItem[] = [];

	ourProjectHolder: any;
	ourProjectHolderState: string = 'Completed';

	ourCurrentProject: OurProjectItem[] = [];
	ourCompletedProject: OurProjectItem[] = [];

	ourTeamList: OurProjectItem[] = [];

	constructor(public fbS: FirebaseControlService) {
		let address = 'yungFolder/pageControl/ourProjectCompleted'
		this.getprojectList(address);
		this.ourProjectHolder = this.ourCompletedProject;
	}
	getprojectList(address: string) {
		this.ourTeamList = [];
		let itemS = this.fbS.getCollectionValueChange(address);
		itemS.subscribe((x) => {
			x.forEach((x) => {
				let hkCompleted = new OurProjectItem(
					x.name,
					x.image,
					x.imageArray,
					x.file,
				);
				console.log(hkCompleted);
				this.ourTeamList.push(hkCompleted);
			})
		});
	}
	clickImgSwitchButton(input: OurProjectItem, direction: number) {
		if (input.imgListIndex + direction > input.imgList.length - 1) {
			input.imgListIndex = 0;
		} else if (input.imgListIndex + direction < 0) {
			input.imgListIndex = input.imgList.length - 1;
		} else {
			input.imgListIndex = input.imgListIndex + direction;
		}
	}

	selectTeamList(inputIndex: string) {
		let address = 'yungFolder/pageControl/ourProjectCurrent'
		this.ourProjectHolderState = inputIndex;
		if (inputIndex == "Completed") {
			this.getprojectList('yungFolder/pageControl/ourProjectCompleted');
		} else if (inputIndex == "Current") {
			this.getprojectList('yungFolder/pageControl/ourProjectCurrent');
		}
	}



}
class OurProjectItem {
	imgListIndex: number = 0;
	imgList: any[] = [];
	background: any;
	name: string = '';
	fileURL: string = '';

	address: string = 'a';
	constructor(
		title: string,
		background: string,
		imgList: string[],
		fileURL: string,
	) {
		this.imgList = imgList;
		this.background = background;
		this.name = title;
		this.fileURL = fileURL;
		this.address = this.temGetAddress(this.name)
	}
	temGetAddress(title: string) {
		let ans = "undefinded";
		switch (title) {
			case "Current project in Hong Kong":
				ans = 'hkProjectListCurrent'
				break;
			case "Current project in Oversea":
				ans = 'overseasProjectListCurrent'
				break;
			case "Current project in China":
				ans = 'chinaProjectListCurrent'
				break;
			case "Current project in Macau":
				ans = 'macauProjectListCurrent'
				break;
			case "Completed project in China":
				ans = 'chinaProjectListComplete'
				break;
			case "Completed project in Hong Kong":
				ans = 'hkProjectListComplete'
				break;
			case "Completed project in Macau":
				ans = 'macauProjectListComplete'
				break;
			case "Completed project in Oversea":
				ans = 'overseasProjectListComplete'
				break;
		}
		return ans
	}
}

export class outProjectContainer {
	header: any;
	imgListIndex: number = 0;
	imgList: any[] = [];
	background: any;
	title: string = '';
	constructor() { }
}