import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {TooltipModule} from "primeng/tooltip";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ListboxModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DialogModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    TabViewModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
