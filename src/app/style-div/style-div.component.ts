import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-style-div',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-div.component.html',
  styleUrl: './style-div.component.css'
})
export class StyleDivComponent {

  styleForError = {
    'color' : 'red',
    'font-weight': 'bold'
  }

  styleForSuccess = {
    'color' : 'blue',
    'font-weight': 'italic'
  }

  isError: boolean = false;
}
