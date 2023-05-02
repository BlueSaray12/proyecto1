import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { E404Component } from './e404/e404.component';
import { MerchComponent } from './merch/merch.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'merch', component: MerchComponent},
  {path:'music', component: MusicComponent},
  {path:'collections', component: CollectionsComponent},

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
