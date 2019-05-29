import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';


@Component({
    selector: 'my-assets',
    moduleId: module.id,
    templateUrl: './my-assets.component.html',
    styleUrls: ['./my-assets.component.css']
})

export class MyAssetsComponent implements OnInit {

    public coinList: Array<any> = [];
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true;
        if (isAndroid) {
            let activity = android.startActivity || android.foregroundActivity;
        }

        this.coinList.push(
            {
                name: "EXG",
                available: 19203.29302012,
                frozen: 2000,
                value: 389310.28
            },
            {
                name: "BTC",
                available: 19203.29302012,
                frozen: 0.0000,
                value: 389310.28
            },
            {
                name: "FAB",
                available: 19203.29302012,
                frozen: 100000.00,
                value: 389310.28
            },
            {
                name: "FAB",
                available: 19203.29302012,
                frozen: 100000.00,
                value: 389310.28
            },
            {
                name: "FAB",
                available: 19203.29302012,
                frozen: 100000.00,
                value: 389310.28
            }
        )

    }
    /**/

    ngOnInit() {
        //console.log("my assets component")
        //console.log(this.page.getActualSize());

    }
}