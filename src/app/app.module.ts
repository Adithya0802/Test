import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Anandhan/registration/registration.component';
import { PurchaseOrderComponent } from './Priyadharshini/purchase-order/purchase-order.component';
import { AssetInformationComponent } from './Sampath/asset-information/asset-information.component';
import { LibraryInformationComponent } from './Vigneshwaran/library-information/library-information.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PurchaseOrderComponent,
    AssetInformationComponent,
    LibraryInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
