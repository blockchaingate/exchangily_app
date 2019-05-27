import { Component, OnInit} from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';


@Component({
    selector: 'add-asset',
    moduleId: module.id,
    templateUrl: './add-asset.component.html',
    styleUrls: ['./add-asset.component.css']
})

export class AddAssetComponent implements OnInit {

    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true;
        if(isAndroid){
            let activity = android.startActivity || android.foregroundActivity;
        }
    }

    ngOnInit() {
        console.log("add asset component")
         console.log(this.page.getActualSize());
         
    }
}