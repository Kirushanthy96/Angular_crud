import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Students} from '../students';
import {StudentsService} from '../students.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,private _studentsService:StudentsService,private router:Router) { }
  
  addForm:FormGroup

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
        sId:[],
        dob:['',Validators.required],
        Name:['',[Validators.required,Validators.maxLength(15)]],
        des:['',[Validators.required,Validators.maxLength(30)]],
        sub:['',Validators.required],
    });
  }

    onSubmit(){
        //console.log(this.addForm.value);
        this._studentsService.createStudent(this.addForm.value)
        .subscribe(data=>{
        this.router.navigate(['view']);
       });
        }

        

}
