import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  achatForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    hourlyIncome: ['', [Validators.required]],
    weeklyHours: ['', [Validators.required]],
    savings: ['', [Validators.required]],
    loan: ['', [Validators.required]],  
  });

 Achete() {
    console.log(this.achatForm.value);
 }

}
