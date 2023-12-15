import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/seachbox/search-box.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HomeComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
