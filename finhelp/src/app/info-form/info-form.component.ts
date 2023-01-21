import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  //TODO add , private service: FormService
  // but it gives an error for now
  constructor(private formBuilder: FormBuilder) { }
  


  ngOnInit(): void {
    
  }

  userForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    hourlyIncome: ['', [Validators.required]],
    weeklyHours: ['', [Validators.required]],
    savings: ['', [Validators.required]],
    loan: ['', [Validators.required]],  
  });



 Achete() { //TODO change this to the post function in the service
    console.log(this.userForm.value); 
 }

}
