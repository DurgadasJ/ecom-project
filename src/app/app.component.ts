import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule directly
import { HeaderComponent } from './header/header.component'; // Ensure this path is correct

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, RouterModule, HeaderComponent], // Use RouterModule directly
  template: `
<app-header></app-header>
<router-outlet></router-outlet>
`
})
export class AppComponent {}
