import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from  '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSelleroggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }
  apiUrl: string = 'http://localhost:3000/seller';

    userSignUp(data: SignUp) {
        this.http.post(this.apiUrl,
        data,
        {observe :'response'},
        ).subscribe((result)=>{
          this.isSelleroggedIn.next(true);
          localStorage.setItem('seller',JSON.stringify(result.body))
          this.router.navigate(['app-seller-home'])
          });
      }

    reloadSeller(){
      if(localStorage.getItem('seller')){
          this.isSelleroggedIn.next(true);
          this.router.navigate(['app-seller-home'])
      }
      }
}
