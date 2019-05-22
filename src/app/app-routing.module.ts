import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LandingPageComponent } from "./core/components/landing-page/landing-page.component";
import { CreateWalletComponent } from "./core/components/create-wallet/create-wallet.component";
import { ShowMnemonicsComponent } from "./core/components/show-mnemonics/show-mnemonics.component";

const routes: Routes = [
    { path: "", redirectTo: "/landingpage", pathMatch: "full" },
    { path: "landingpage", component: LandingPageComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "create-wallet", component: CreateWalletComponent },
    { path: "show-mnemonics", component: ShowMnemonicsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
