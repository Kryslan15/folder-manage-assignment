import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-folder-path',
  templateUrl: './folder-path.component.html',
  styleUrls: ['./folder-path.component.css']
})
export class FolderPathComponent implements OnInit {

  @Input() folderList: {name: string, children: ArrayType};
  @Input() dirPath: string;
  @Input() visitedList: number[];
  @Input() revisit: number[];
  @Output() pathUpdated = new EventEmitter<{dirPath: string, currentDir: any}>();
  @Output() updatedVisitList = new EventEmitter<{visitedList :number[], revisit: number[]}>();
  
  currentDir:  {name: string, children: ArrayType};
  temp: number;

  ngOnInit() {
    this.currentDir = this.folderList;
    this.dirPath = this.currentDir.name;
  }

  navForward() {
    this.visitedList.push(this.revisit.pop());
    console.log("visitedList", this.visitedList);
    this.dirPath = "/";
    this.currentDir = this.folderList;
    //this.revisit.push(this.visitedList.pop());
    for(let i in this.visitedList) {     
        this.currentDir = Object.assign({}, this.currentDir.children[this.visitedList[i]]);        
        this.dirPath =  this.dirPath + this.currentDir.name + "/";     
    }   
    console.log("this.visitedList");    
    this.pathUpdated.emit({dirPath: this.dirPath, currentDir: this.currentDir});    
    this.updatedVisitList.emit({visitedList: this.visitedList, revisit: this.revisit});
  
  }
  navBack() { 
    this.dirPath = "/";
    this.currentDir = this.folderList;
    this.revisit.push(this.visitedList.pop());
    for(let i in this.visitedList) {     
        this.currentDir = Object.assign({}, this.currentDir.children[this.visitedList[i]]);        
        this.dirPath =  this.dirPath + this.currentDir.name + "/";     
    }   
    console.log("this.visitedList");    
    this.pathUpdated.emit({dirPath: this.dirPath, currentDir: this.currentDir});    
    this.updatedVisitList.emit({visitedList: this.visitedList, revisit: this.revisit});
  }
}
