import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { NavComponent } from './nav/nav.component';
import { FolderPathComponent } from './folder-path/folder-path.component';
import { ContentAreaComponent } from './content-area/content-area.component';

@NgModule({
  declarations: [    
    AppComponent,
    ControlsComponent,
    NavComponent,
    FolderPathComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
