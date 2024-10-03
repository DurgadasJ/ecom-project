import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-header',
standalone: true,
imports: [CommonModule], // Only define imports once
  templateUrl: './header.component.html',
styleUrls: ['./header.component.css'] // Corrected from styleUrl to styleUrls
})
export class HeaderComponent {}
