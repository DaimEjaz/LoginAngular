import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() labelInfo!: string;
  @Input() inputInfo!: string;
  @Input() isPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}