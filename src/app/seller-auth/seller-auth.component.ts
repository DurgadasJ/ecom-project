import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
    constructor(){}
    ngOnInit(): void{}

  signUp(data: { username: string; password: string; email: string }): void {
    console.warn('Form Submitted!', data);
  }
}
