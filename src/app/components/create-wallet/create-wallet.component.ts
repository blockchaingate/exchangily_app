import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';

@Component({
    selector: 'create-wallet',
    moduleId: module.id,
    templateUrl: './create-wallet.component.html',
    styleUrls: ['./create-wallet.component.css']
})

export class CreateWalletComponent implements OnInit {
    constructor(private page: Page, private router: Router) {
        this.page.actionBarHidden = true;
     }

    ngOnInit() { 

    }

    createNewWalletClicked() {
        //verify password and then navigate to show mnemonics
        console.log("create new wallet clicked")
        this.router.navigate(['show-mnemonics']);
    }
}
