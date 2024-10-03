import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
declarations: [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  SellerAuthComponent,

      ],
imports: [
  RouterTestingModule // Use this for testing components that rely on routing
      ],
}).compileComponents();
});

beforeEach(() => {
fixture = TestBed.createComponent(AppComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create the app', () => {
expect(component).toBeTruthy();
});


});
