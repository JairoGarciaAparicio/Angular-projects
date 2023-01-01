import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del-task',
  templateUrl: './del-task.component.html',
  styleUrls: ['./del-task.component.css']
})
export class DelTaskComponent implements OnInit {

  constructor() { }
  items : any[] = [];

  ngOnInit(): void {
  }

  clearComplete() {
    this.items = [];

  }


}
