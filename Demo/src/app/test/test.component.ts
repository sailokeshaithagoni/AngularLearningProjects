import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="";
  public password="";
  public displayFlag=true;
  
  ngOnInit(): void {
  }
  public onClickMe(){
    window.alert(this.name+this.password);
  }

}
