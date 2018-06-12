import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id', component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', pathMatch: 'full',  redirectTo: 'welcome'},
        // { path: '**', component: PageNotFoundComponent},
        { path: '**', pathMatch: 'full', redirectTo: 'welcome'},
      ],
      { useHash: false }
    ),
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
