import { Component, OnInit } from "@angular/core";
import { AppRoutingModule } from '../../../app-routing.module'
import { Page } from "tns-core-modules/ui/page"
require("nativescript-nodeify");
const bip39 = require("bip39");

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./show-mnemonics.component.html",
    styleUrls: ["./show-mnemonics.component.css"]
})
export class ShowMnemonicsComponent implements OnInit {

    mnemonics: Array<string> = [];
    warning:string;
    constructor(private page: Page) {
        let b: string = bip39.generateMnemonic()
        this.mnemonics.push(...(b.split(" ", 12)));
        this.warning = "Below are 12 mnemonics to help you recover your wallet."+
                        "Please make sure the phone or password is safely stored, the 12"+
                        "mnemonics you write on paper id the only way to recover your phone wallet."+
                        "Please be sure to carefully write down these 12 words."
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}
