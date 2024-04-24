import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  dataValue: string = "";

  onDataInputChange(event: any){
    this.dataValue = event.target.value;
  }

  num: number = 0;
  isEven: boolean = false;
  isOdd: boolean = false;
  calculateEven(){
    this.isEven = this.num % 2 == 0;
  }

  calculateOdd(){
    this.isOdd = this.num % 2 != 0;
  }
}
