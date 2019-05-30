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
    private currencyName : string;
    private transactionDate : string;
    private transactionAmount : string;
    private transactionComment : string;
    constructor(private page: Page, private route: ActivatedRoute) {
        this.title = "Wallet Transaction History"
        this.transactionType = route.snapshot.params.type;
        //page.actionBarHidden = true;
    }
    /**/

    ngOnInit() {
       // console.log(this.transactionType)
        (this.route.queryParams.subscribe(d => {
            //
           // console.log( d )
            this.transactionType = d.type;
            this.currencyName = d.name;
            this.transactionDate = d.date;
            this.transactionAmount = d.amount;
            this.transactionComment = d.comment;
            //amount
            //comment
        }))
    }
}