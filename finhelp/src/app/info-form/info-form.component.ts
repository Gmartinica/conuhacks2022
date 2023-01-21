import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService, userInputs } from '../form.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  //TODO add , private service: FormService
  // but it gives an error for now
  constructor(private formBuilder: FormBuilder, private http_client: HttpClient) { }
  


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


  onSubmit(){
    console.log(this.userForm.value);
    this.Validate(this.userForm.value);
  }

//TODO change this to the post function in the service
 Validate(data: any): Observable<any> {
  return this.http_client.post('/', data);
}

}
