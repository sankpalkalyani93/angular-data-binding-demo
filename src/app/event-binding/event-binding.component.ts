import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  message: string = ""
  handleClickEvent(){
    this.message = "Hello and Welcome";
    alert(this.message)
  }
}
