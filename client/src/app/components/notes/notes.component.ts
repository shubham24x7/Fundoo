import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  enterExpression = true;
  expression = false;

  ngOnInit() {
  }

  newNote() {
    this.expression = true;
    this.enterExpression = false;
  }

  closeNote() {
    this.expression = false;
    this.enterExpression = true;
  }

}
