import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expanpanel',
  templateUrl: './expanpanel.component.html',
  styleUrls: ['./expanpanel.component.css']
})
export class ExpanpanelComponent implements OnInit {
  @Input("PanelUgeNr") PanelUgeNr : string;
  @Input("PanelTitel") PanelTitel : string;
  @Input("PanelEmne") PanelEmne : string;
  @Input("PanelMaterialer") PanelMaterialer: string;
  @Input("PanelExercise") PanelExercises: string;
  constructor() { }

  ngOnInit(): void {
  }

}
