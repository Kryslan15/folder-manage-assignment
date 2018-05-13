import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

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
  // public folderList =  {
  //       "name": "/",
  //       "children": [
  //          {
  //             "name": "child1",
  //             "children": []
  //         },
  //         {
  //             "name": "child2",
  //             "children":[]
  //         },
  //         {
  //             "name": "child3",
  //             "children": [
  //             {                
  //                 "name": "child31",
  //                 "children":[]
  //             }]
            
  //         }]
        
  //   };
  
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
