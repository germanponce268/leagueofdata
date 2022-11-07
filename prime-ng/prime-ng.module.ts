import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { BrowserModule } from '@angular/platform-browser';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule,
    InputSwitchModule,
    ProgressSpinnerModule

  ],
  exports:[
    InputTextModule,
    MenubarModule,
    InputSwitchModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
