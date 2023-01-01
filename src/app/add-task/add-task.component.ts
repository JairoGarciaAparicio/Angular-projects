import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }
  model : any = {};
  items : any = [];

  ngOnInit(): void {
  }

  save() {
    if (this.model.text !== '') {
      this.items.unshift({ 'text': this.model['text'], 'complete': false });
      this.model['text'] = '';
    }
  }

}
