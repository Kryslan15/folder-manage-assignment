import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  @Input() folderList: {name: string, children: ArrayType};
  @Input() visitedList: number[];
  @Output() pathUpdated = new EventEmitter<{dirPath: string, currentDir: any}>();
  @Output() updatedVisitList = new EventEmitter<number[]>();

  dirPath: string;
  currentDir:  {name: string, children: ArrayType};
  childKeys: string[];
  ngOnInit() {
    this.currentDir = this.folderList;
    this.dirPath = this.currentDir.name;
  }
  changeDir (index: number) {
    this.currentDir = Object.assign({}, this.currentDir.children[index]);;    
    this.dirPath = this.dirPath + this.currentDir.name + "/" ;
    this.pathUpdated.emit({dirPath: this.dirPath, currentDir: this.currentDir});
    this.visitedList.push(index);
    this.updatedVisitList.emit(this.visitedList);
  }

}
