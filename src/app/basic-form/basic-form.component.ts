import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  myForm : FormGroup;
  constructor( private fb: FormBuilder ) {  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: 'default Message',
      career: ''
    })

    this.myForm.valueChanges.subscribe(console.log);
  }

}
