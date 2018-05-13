import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-folder-path',
  templateUrl: './folder-path.component.html',
  styleUrls: ['./folder-path.component.css']
})
export class FolderPathComponent implements OnInit {
  @Input() dirPath: string;
  
  constructor() { }

  ngOnInit() {
  }
  navBack() {
    console.log("Nav Back");
  }
  navForward() {
    console.log("Nav Forward");
  }
  navUp() {
    console.log("Nav Up");
  }
}
