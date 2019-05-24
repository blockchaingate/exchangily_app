import { Component, OnInit } from "@angular/core";
import { AppRoutingModule } from '../../app-routing.module';
import { Page } from "tns-core-modules/ui/page"

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./landing-page.component.html"
})
export class LandingPageComponent implements OnInit {

    title : string;
    constructor( private page: Page ) {
        this.title = "Exchangily"

     }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    createWalletClicked() : void {
        
    }
}
