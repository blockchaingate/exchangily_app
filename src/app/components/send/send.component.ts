import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Router, ActivatedRoute } from '@angular/router';
import { android } from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
    selector: 'send',
    moduleId: module.id,
    templateUrl: './send.component.html',
    styleUrls: ['./send.component.css']
})

export class SendComponent implements OnInit {

    private title: string;
    private currencyNames: string[] = [];
    private selectedIndex: Number = 0;
    constructor(private page: Page, private route: ActivatedRoute) {
        this.title = "Send"
        this.currencyNames.push(...['BTC','EXC','ETH'])
    }

    ngOnInit() {
       
    
    }
}