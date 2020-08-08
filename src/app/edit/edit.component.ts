import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Students} from '../students';
import {StudentsService} from '../students.service';
import {Router,Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private _studentsService:StudentsService,private router:Router,private routes:ActivatedRoute) { }

  addForm:FormGroup

  ngOnInit(): void {
    const routeParams=this.routes.snapshot.params;
   // console.log(routeParams.id);
    
   this.addForm=this.formBuilder.group({
    sId:[],
    dob:['',Validators.required],
    Name:['',[Validators.required,Validators.maxLength(15)]],
    des:['',[Validators.required,Validators.maxLength(30)]],
    sub:['',Validators.required],
});

    this._studentsService.getById(routeParams.id).subscribe((data:any)=>{
      console.log(data)
      this.addForm.patchValue(data[0]);
    });
  
  }

  update(){
    //console.log('update');
    this._studentsService.updateStudents(this.addForm.value)
        .subscribe(data=>{
        this.router.navigate(['view']);
       });
  }


}
