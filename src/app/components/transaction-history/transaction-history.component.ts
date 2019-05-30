import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router, NavigationExtras } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';


@Component({
    selector: 'transaction-history',
    moduleId: module.id,
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.css']
})

export class TransactionHistoryComponent implements OnInit {

    public history: Array<any> = [];

    private title: string ;
    constructor(private page: Page, private router: Router) {

        this.title = "Wallet Transaction History"
        //page.actionBarHidden = true;
        if (isAndroid) {
            let activity = android.startActivity || android.foregroundActivity;
        }

        this.history.push(
            {
                type: "Send",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Receive",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Send",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Receive",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Send",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Receive",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Send",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            },
            {
                type: "Send",
                name: "EXG",
                date: '2019/04/28',
                amount: 3000,
                comment: 'Send from Mary for rewards'
            }
        )

    }
    /**/

    ngOnInit() {
        //console.log("my assets component")
        //console.log(this.page.getActualSize());

    }

    onTap(args) {
       // console.log(args)
        let navigationExtras: NavigationExtras = {
            queryParams: args
        } 
        this.router.navigate(['/transaction-history-item'],navigationExtras);
    }
}