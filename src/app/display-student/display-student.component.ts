import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'; 
import { Student } from '../Student'; 
import {StudentHttpService} from '../student-http.service'; 

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private studentHttpService:StudentHttpService,private routeObj:Router) { } 
 students:Array<Student>; 

  ngOnInit() {
    this.getStudents();
  }

  //to get all registered students 
  getStudents(){ 
    this.studentHttpService.getStudents().subscribe((response)=>{ 
      console.log(response); 
      this.students=response; 
    }); 
  } 
   

deleteStudent(id){ 
    if(confirm("Are you sure want to delete?"))
    {
      this.studentHttpService.deleteStudent(id).subscribe((response)=>{ 
      this.getStudents();});
    } 
  } 

  

  navigateToEdit(id : string)
  { 
    
  	  console.log("edit called"); 
      this.routeObj.navigate(['edit_student',id]); 
    
  } 
} 		


