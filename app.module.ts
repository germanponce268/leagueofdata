import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MainComponent } from './component/main/main.component';
import { AppRouterModule } from '../app-router.module';
import { FormsModule } from '@angular/forms';
import { Service } from './service/service';
import { HttpClientModule } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import { ResultadoComponent } from './component/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuBarComponent,
    MainComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PrimeNgModule,
    AppRouterModule,
    HttpClientModule,
    DataViewModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
