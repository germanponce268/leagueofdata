import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import {InputSwitchModule} from 'primeng/inputswitch';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule,
    InputSwitchModule

  ],
  exports:[
    InputTextModule,
    MenubarModule,
    InputSwitchModule
  ]
})
export class PrimeNgModule { }
