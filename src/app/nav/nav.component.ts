import { Component, OnInit, Input} from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() folderList: {name: string, children: ArrayType};
 
  ngOnInit() {
    console.log(this.folderList);
  }
}
