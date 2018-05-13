import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() newFolderCreated = new EventEmitter<string>();
  
  createNewFolder() {
    this.newFolderCreated.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
