import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from "tns-core-modules/platform";

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

        if (isAndroid) {
            let activity = android.startActivity || android.foregroundActivity;
            /*activity.onBackPressed = function () {
                console.log("back button pressed");
            }*/
        }
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
