import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { CreateWalletComponent } from "./components/create-wallet/create-wallet.component";
import { ShowMnemonicsComponent } from "./components/show-mnemonics/show-mnemonics.component";
import { VerifyMnemonicsComponent } from "./components/verify-mnemonics/verify-mnemonics.component";
import { ImportWalletComponent } from "./components/import-wallet/import-wallet.component";
import { MyAssetsComponent } from "./components/my-assets/my-assets.component";
import { TransactionHistoryComponent } from "./components/transaction-history/transaction-history.component";
import { TransactionHistoryItemComponent } from './components/transaction-history-item/transaction-history-item.component';
import { SendComponent } from './components/send/send.component';

const routes: Routes = [
    { path: "", redirectTo: "/landingpage", pathMatch: "full" },
    { path: "landingpage", component: LandingPageComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "create-wallet", component: CreateWalletComponent },
    { path: "show-mnemonics", component: ShowMnemonicsComponent },
    { path: "verify-mnemonics", component: VerifyMnemonicsComponent },
    { path: "import-wallet", component: ImportWalletComponent},
    { path: "my-assets", component: MyAssetsComponent },
    { path: "transaction-history", component: TransactionHistoryComponent},
    /*{ path: "transaction-history-item/:type", component: TransactionHistoryItemComponent }*/
    { path: "transaction-history-item", component: TransactionHistoryItemComponent},
    { path: "send", component: SendComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
