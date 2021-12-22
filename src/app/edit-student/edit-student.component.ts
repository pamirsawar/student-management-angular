import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import { Router } from '@angular/router'; 

import{Student} from '../Student'; 

import {StudentHttpService} from '../student-http.service'; 


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentHttpService:StudentHttpService,private activatedRouteObj:ActivatedRoute,private routerObj:Router) { } 

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
/*ACTR:Contains the information about a route associated with a component loaded in an outlet. An ActivatedRoute can also be used to traverse the router state tree.*/
ngOnInit() { 
  	this.activatedRouteObj.params.subscribe(param=>{ 
  		//here param is the object 
  		//get latest student data 
  		this.studentHttpService.getStudent(param.id).subscribe((response)=>{ 
  			this.formObj=response; 
  		}); 

  	}) 
  	} 
 
  updateStudent(id){ 
  	this.studentHttpService.putStudent(this.formObj,id).subscribe((data)=>{ 
  		console.log("updated"); 
      //navigating to the display 
      this.routerObj.navigate(['display_student']); 
  	}); 
  } 

} 	
