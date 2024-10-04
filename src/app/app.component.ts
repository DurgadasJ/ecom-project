import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule directly
import { HeaderComponent } from './header/header.component'; // Ensure this path is correct
import { HttpClientModule } from '@angular/common/http';


@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule, RouterModule, HeaderComponent,HttpClientModule,
], // Use RouterModule directly
  template: `
<app-header></app-header>
<router-outlet></router-outlet>
`
})
export class AppComponent {}
