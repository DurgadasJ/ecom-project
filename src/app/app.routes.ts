import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

export const routes: Routes = [
{
path: '',
redirectTo: 'home', // Redirect to HomeComponent
    pathMatch: 'full'
},
{
path: 'home',
component: HomeComponent
},
{
path: 'app-seller-auth',
component: SellerAuthComponent
}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
