import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public userId="";
  public userPassword="";
  public passwordLengthFlag=false;
  public useridLengthFlag=false;

  ngOnInit(): void {
  }

  public onLoginClick(){
    //window.alert(this.userId+this.userPassword);
    if(this.userPassword.length<8)
    {
      this.useridLengthFlag=true;
    }
    else{
      this.useridLengthFlag=false;
    }
    
    if(this.userPassword.length<8)
    {
      this.passwordLengthFlag=true;
    }
    else{
      this.passwordLengthFlag=false;
    }
  }

}
