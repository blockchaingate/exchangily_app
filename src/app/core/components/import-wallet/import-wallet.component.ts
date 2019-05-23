import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';

@Component({
    selector: 'import-wallet',
    moduleId: module.id,
    templateUrl: './import-wallet.component.html',
    styleUrls: ['./import-wallet.component.css']
})

export class ImportWalletComponent implements OnInit {

    enterMnemonicsMessage: string;
    constructor(private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
     }

    ngOnInit() { 
        this.enterMnemonicsMessage = "Kindly enter your seed phrase."
    }

    importWalletClicked() {
        //verify password and then navigate to show mnemonics
        console.log("create new wallet clicked")
        this.router.navigate(['show-mnemonics']);
    }
}
