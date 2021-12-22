import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for routing 
import { Routes,RouterModule } from '@angular/router'; 

import { DecimalPipe } from '@angular/common';

//import for forms and http communication 
import { HttpClientModule} from '@angular/common/http'; 
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; 
//import services 
import { StudentHttpService} from './student-http.service';


import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomePageComponent } from './home-page/home-page.component';



//list of routes present in the application 
//router:add_stu navigate to component
//path nm  :empty by localhost nav to home
const appRoutesArr:Routes=[ 
  {path:'add_student',component:AddStudentComponent}, 
  {path:'edit_student/:id',component:EditStudentComponent}, 
  {path:'display_student',component:DisplayStudentComponent}, 
  {path:"",component:HomePageComponent} 
]; 


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DisplayStudentComponent,
    EditStudentComponent,
    HomePageComponent,

  ],
  imports: [ 
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule, 
    //rec the list of routers
     RouterModule.forRoot(appRoutesArr) 
  ], 
  providers: [StudentHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
