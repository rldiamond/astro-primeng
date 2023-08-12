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
import {MenuModule} from "primeng/menu";
import {InputSwitchModule} from "primeng/inputswitch";
import { SmartGalleriaComponent } from './smart-galleria/smart-galleria.component';
import {ContextMenuModule} from "primeng/contextmenu";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SmartGalleriaComponent
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
    TableModule,
    MenuModule,
    InputSwitchModule,
    ContextMenuModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
