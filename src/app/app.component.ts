import { Component } from '@angular/core';
import {environment} from './../environments/environment'
import { env } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hehohjemmeside';
  panelUgeNr1 = environment.indhold1.panelUgeNr;
  paneltitel1 = environment.indhold1.paneltitel; 
  panelemne1 = environment.indhold1.panelEmner;
  panelmateriale1 = environment.indhold1.panelMaterialer;
  panelexercises1 = environment.indhold1.panelExercise;
}
