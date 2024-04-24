import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { StyleDivComponent } from './style-div/style-div.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, StyleDivComponent, EventBindingComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-demo';
  name = "kalyani sankpal dinde";
  age = 30;
  email = "sankpalkalyani93@fmail.com";
  phone_number = "+91-8010964380";  
  course = "angular";
  company = "It Vedant Education Private Limited"
  city = "mumbai"
  pincode = 400072;

  
}
