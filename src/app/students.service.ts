import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Students} from './students';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }
  public password  = new BehaviorSubject<string>(undefined);

    getStudents(){
      const headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin', '*');
      return this.http.get<Students[]>('http://localhost/App/list.php',{headers: headers});
    }

    createStudent(student:Students){
      const headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin', '*');
       return this.http.post('http://localhost/App/insert.php',student,{headers:headers});
    }

    deleteStudents(id:number){
      const headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin', '*');
      return this.http.delete<Students[]>('http://localhost/App/delete.php?id='+id,{headers:headers});

    }

    getById(id:number){
      return this.http.get<Students[]>('http://localhost/App/getById.php?id='+id);
}

updateStudents(students:Students){
  const headers = new HttpHeaders();
      headers.set('Access-Control-Allow-Origin', '*');
       return this.http.put('http://localhost/App/update.php'+'?id='+students.sId,students,{headers:headers});
}

  } 
 
