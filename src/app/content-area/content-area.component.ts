import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  @Input() folderList: {name: string, children: ArrayType};
  @Input() currentDir:{name: string, children: ArrayType};
  @Input() dirPath: string;
  @Input() visitedList: number[];
  @Output() pathUpdated = new EventEmitter<{dirPath: string, currentDir: any}>();
  @Output() updatedVisitList = new EventEmitter<{visitedList :number[], revisit: number[]}>();

  revisit =[];
  ngOnInit() {
    console.log(this.dirPath);
  }
  changeDir (index: number) {
    this.revisit =[];
    this.currentDir = Object.assign({}, this.currentDir.children[index]);  
    this.dirPath = this.dirPath + this.currentDir.name + "/" ;
    this.pathUpdated.emit({dirPath: this.dirPath, currentDir: this.currentDir});
    this.visitedList.push(index);
    this.updatedVisitList.emit({visitedList: this.visitedList, revisit: this.revisit});
  }

}
