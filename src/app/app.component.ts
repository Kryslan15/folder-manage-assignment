import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public folderList = { name: "/", children: []};
  
  public visitedList = [];
  public revisit = [];
  
  dirPath = this.folderList.name;
  currentDir = Object.assign({}, this.folderList);
  newFolderTitle: string;
  onPathUpdate(value: {dirPath: string, currentDir:any}) {
    this.dirPath = value.dirPath;
    this.currentDir = Object.assign({}, value.currentDir);
   
  }

  onIndexUpdate(value: {visitedList: string[], revisit: string[]}) {
    this.visitedList = value.visitedList;
    this.revisit = value.revisit;
    console.log(this.visitedList);
  }

  updateList(){
    if(this.currentDir.name == "/"){
      this.newFolderTitle = "Folder"+"_" +this.currentDir.children.length;
    } else {
      this.newFolderTitle = this.currentDir.name +"_" +this.currentDir.children.length;
    }    
    this.currentDir.children.push({"name":this.newFolderTitle , "children" :[]});
  }
   
}
