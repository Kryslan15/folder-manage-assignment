import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //public folderList = [{ title: "/", children: []}];
  // public folderList = 
  //   { title: "/",
  //   children: [
  //   {
  //     title: 'childless',
  //     children: []
  //   },
  //   {
  //     title: 'great grandparent',
  //     children: [
  //       {
  //         title: 'childless grandsibiling',
  //         children: []
  //       },
  //       {
  //         title: 'grandparent',
  //         children: [
  //           {
  //             title: 'childless sibiling',
  //             children: []
  //           },
  //           {
  //             title: 'another childless sibiling',
  //             children: []
  //           },
  //           {
  //             title: 'parent',
  //             children: [
  //               {
  //                 title: 'child',
  //                 children: []
  //               },
  //               {
  //                 title: 'another child',
  //                 children: []
  //               },
  //             ]
  //           },
  //           {
  //             title: 'another parent',
  //             children: [
  //               {
  //                 title: 'child',
  //                 children: []
  //               },
  //             ]
  //           },
  //         ]
  //       },
  //       {
  //         title: 'another grandparent',
  //         children: [
  //           {
  //             title: 'parent',
  //             children: [
  //               {
  //                 title: 'child',
  //                 children: []
  //               },
  //               {
  //                 title: 'another child',
  //                 children: []
  //               },
  //               {
  //                 title: 'a third child',
  //                 children: []
  //               },
  //               {
  //                 title: 'teen mother',
  //                 children: [
  //                   {
  //                     title: 'accident',
  //                     children: [
  //                       {
  //                         title: 'childrtest',
  //                         children: []
  //                       },
  //                       {
  //                         title: 'another chiltestd',
  //                         children: []
  //                       },]
  //                   },
  //                 ]
  //               },
  //             ]
  //           },
  //         ]
  //       },
  //     ]
  //   },
  // ]}];
  public visitedList = [];
  public folderList =  {
        "name": "/",
        "children": [
           {
              "name": "child1",
              "children": []
          },
          {
              "name": "child2",
              "children":[]
          },
          {
              "name": "child3",
              "children": [
              {                
                  "name": "child31",
                  "children":[]
              }]
            
          }]
        
    };
  
  dirPath = this.folderList.name;
  currentDir = Object.assign({}, this.folderList);
  
  onPathUpdate(value: {path: string, currentDir:any}) {
    this.dirPath = value.path;
    this.currentDir = Object.assign({}, value.currentDir);
  }

  onIndexUpdate(visitedList: string[]) {
    this.visitedList = visitedList;
  }

  updateList(){
    this.currentDir.children.push({"name":"New Folder", "children" :[]});
  }
   
}
