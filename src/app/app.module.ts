import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import { DemoMaterialModule} from './material-module';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinksComponent } from './links/links.component';


const appRoutes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'doc', component: DocumentationComponent },
  { path: 'start', component: DashboardComponent },
  { path: 'filter', component: FilterbarComponent },
  { path: 'links', component: LinksComponent},
  { path: '', component: DashboardComponent },
];


@NgModule({
  imports:      [ BrowserModule, 
                  BrowserAnimationsModule,
                  FormsModule,
                  DemoMaterialModule ,
                  MatNativeDateModule,
                  FlexLayoutModule,
                  RouterModule.forRoot(
                    appRoutes,
                    { enableTracing: true } // <-- debugging purposes only
                  )
                ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, ToolbarComponent, DocumentationComponent, FilterbarComponent, BreadcrumbComponent, TableComponent, DashboardComponent, LinksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
