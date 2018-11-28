import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateofbirth : Date= new Date(2018,0,1);
  datepickerConfig:Partial<BsDatepickerConfig>;
  employee: Employee ={
    id: null,
    name: null,
    gender: null,
    email?: null,
    phoneNumber?: null,
    contactPreference:null,
    dateOfBirth?: null,
    department:'-1',
    isActive:null,
    photopath?: null
  };
  previewPhoto: false;
  departments: Department [] =
  [
    {id: 1,  name: 'Information Technology'},
    {id: 2 , name: 'Computer Science'},
    {id: 3 , name: 'Administrator'},
    {id: 4 , name: 'Human Resource'}
  ];
  constructor() {
    this.datepickerConfig =Object.assign({},
      {containerClass: "theme-dark-blue",
      showWeekNumber: true,
      minDate: new Date(2018,0,1),
      maxDate: new Date(2018,12,31),
      dateInFormat:'DD/MM/YYYY'
    });
   
  }
  togglePreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit() {
  }

saveEmployee(empForm:NgForm):void
{
  console.log(empForm);
}
}
