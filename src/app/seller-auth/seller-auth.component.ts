import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignUp } from  '../data-type';


@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
    constructor(private seller:SellerService, private router:Router){}

    ngOnInit():void{
      this.seller.reloadSeller()
    }

    signUp(data: SignUp): void {
      //'Form Submitted!',
      this.seller.userSignUp(data)
    }
}
