import { Component, OnInit } from '@angular/core';
import{Employee} from '../models/employee.model';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees : Employee [] = [
  {
  id: 1,
  name: 'Santanu Chakrabarty',
  gender: 'Male',
  email: 'Chakrabartys12@gmail.com',
  phoneNumber:9734058004,
  contactPreference: 'Email',
  // dateOfBirth: new Date(21/08/1995),
  department:'IT',
  isActive:true,
  photopath: 'assets/images/img1.png'
},
{
  id: 2,
  name: 'Supriyo Panja',
  gender: 'Male',
  email: 'Supriyopanja@getMaxListeners.com',
  phoneNumber:983566448 ,
  contactPreference: 'Email',
  // dateOfBirth: new Date(21/08/1990),
  department:'IT',
  isActive:true,
  photopath: 'assets/images/img2.png'
},
{
  id: 3,
  name: 'Rakesh Sarkar',
  gender: 'Male',
  email: 'Rakeshscubetc@getMaxListeners.com',
  phoneNumber:9734058006 ,
  contactPreference: 'Phone',
  // dateOfBirth: new Date(21/08/1991),
  department:'IT',
  isActive:true,
  photopath: 'assets/images/img1.jpg'
}
];

  constructor() { }

  ngOnInit() {
  }

}
