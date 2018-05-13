import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() folderList: {name: string, children: ArrayType};
 // @Output() pathUpdated = new EventEmitter<{dirPath: string, currentDir: any}>();

 // currentDir:  {name: string, children: ArrayType};
 // dirPath: string;

  ngOnInit() {
    // this.currentDir = this.folderList;
    // this.dirPath = this.currentDir.name;
    // console.log(this.folderList);
  }
  changeDir(index) {
    // this.currentDir = Object.assign({}, this.currentDir.children[index]);
    // this.dirPath = this.dirPath + this.currentDir.name + "/" ;
    // this.pathUpdated.emit({dirPath: this.dirPath, currentDir: this.currentDir});
    // console.log(index);
  }
}
