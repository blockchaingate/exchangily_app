import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router, ActivatedRoute } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';


@Component({
    selector: 'transaction-history-item',
    moduleId: module.id,
    templateUrl: './transaction-history-item.component.html',
    styleUrls: ['./transaction-history-item.component.css']
})

export class TransactionHistoryItemComponent implements OnInit {

    public history: Array<any> = [];

    private title: string ;
    private transactionType : string;
    constructor(private page: Page, private route: ActivatedRoute) {
        this.title = "Wallet Transaction History"
        this.transactionType = route.snapshot.params.type;
        //page.actionBarHidden = true;
    }
    /**/

    ngOnInit() {
        console.log(this.transactionType)

    }
}