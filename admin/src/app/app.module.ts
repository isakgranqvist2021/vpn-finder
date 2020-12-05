import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

import { HttpConfig } from './services/http.config';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const httpConfig = new HttpConfig().getEnv();

const config: SocketIoConfig = { 
  url: httpConfig === 'Development' ? 'http://localhost:3000' : 'https://vpnfind.site', 
  options: {} 
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    CardComponent,
    InboxComponent,
    ProductsComponent,
    EditProductComponent,
    SidenavComponent,
    CreateProductComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 