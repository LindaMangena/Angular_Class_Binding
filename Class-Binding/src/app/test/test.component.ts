import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Class_Binding';
  public successClass = 'text-success';
  public hasError = 'false'
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  constructor() {}

  ngOnInit(): void {}
}
