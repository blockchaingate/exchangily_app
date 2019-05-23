import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from "@angular/router";

@Component({
    selector: 'verify-mnemonics',
    moduleId: module.id,
    templateUrl: 'verify-mnemonics.component.html',
    styleUrls:['verify-mnemonics.component.css']
})

export class VerifyMnemonicsComponent implements OnInit {
    verifyMnemonicsMessage: string;
    constructor(private router: Router, private page: Page) {

    }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.verifyMnemonicsMessage = "In order to finish backup your seed phrase."+
                                      "Please type in the seed phrases you copied in the correct sequence." ;
    }
}
