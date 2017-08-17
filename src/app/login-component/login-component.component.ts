import { Component,ViewEncapsulation, Input, OnInit }  from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponentComponent implements OnInit {
title: any;
firstname: string;
lastname: string;
headtext: string;
  constructor() { 
    this.headtext="Welcome to login page"
    this.firstname="Sugata"
    this.lastname="Maji"
   
  }

  ngOnInit() {

  }
  onview(){
    this.title= this.firstname + this.lastname ;
  }
}
