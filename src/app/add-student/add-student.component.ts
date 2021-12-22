import { Component, OnInit } from '@angular/core';
import {StudentHttpService} from '../student-http.service'; 
import {Student} from '../Student';  
//for routing 
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

   constructor(private studentHttpService:StudentHttpService, private routeObj:Router) { } 

  ngOnInit() {
  }
formObj:Student={ 
                    id:"", 
                    rollno:0, 
                    firstName:"", 
                    lastName:"", 
                    email:"", 
                    contactNo:"", 
                    address:"", 
                    course:"", 
                    education:"" 
                }; 

                save(){ 

        this.studentHttpService.postStudent(this.formObj).subscribe((data)=>{ 
           this.studentHttpService.getStudents(); 
           //this stmt will redirect the application to display_student route 
           this.routeObj.navigate(['display_student']); 
        }); 

      this.formObj={ 
                        id:"", 
                        rollno:0, 
                        firstName:"", 
                        lastName:"", 
                        email:"", 
                        contactNo:"", 
                        address:"", 
                        course:"", 
                        education:"" 
                    }; 


  } 
}
