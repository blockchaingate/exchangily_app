import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { CreateWalletComponent } from "./components/create-wallet/create-wallet.component";
import { ShowMnemonicsComponent } from "./components/show-mnemonics/show-mnemonics.component";
import { VerifyMnemonicsComponent } from "./components/verify-mnemonics/verify-mnemonics.component";
import { ImportWalletComponent } from "./components/import-wallet/import-wallet.component";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LandingPageComponent,
        CreateWalletComponent,
        ShowMnemonicsComponent,
        VerifyMnemonicsComponent,
        ImportWalletComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
