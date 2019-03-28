import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';
import { attachEmbeddedView } from '@angular/core/src/view';
import { Agent } from 'https';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  User = 
  {
    name : 'Wick',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'http://www.onirik.net/IMG/arton26569.jpg?1521405679',
    hide : "true"
  };
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
