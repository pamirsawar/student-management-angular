import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 
import {Student} from './Student'; 

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private httpClient:HttpClient) { } 
//this return arry of student 

getStudents():Observable<Student[]>{ 
return this.httpClient.get<Student[]>("http://localhost:4564/api/students"); 

} 

//It return single student 
getStudent(id):Observable<Student>{ 
 
	return this.httpClient.get<Student>("http://localhost:4564/api/students/"+id); 
} 
//post to server
postStudent(formobj:Student){ 
	return this.httpClient.post<Student>("http://localhost:4564/api/students",formobj); 
} 


putStudent(formobj:Student,id):Observable<Student>{ 
	return this.httpClient.put<Student>(`http://localhost:4564/api/students/${id}`,formobj); 
} 

deleteStudent(id):Observable<Student>{ 
	return this.httpClient.delete<Student>("http://localhost:4564/api/students/"+id); 
} 

}
