import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expanpanel',
  templateUrl: './expanpanel.component.html',
  styleUrls: ['./expanpanel.component.css']
})
export class ExpanpanelComponent implements OnInit {
  @Input("UgeNr") UgeNr : string;
  @Input("UgeIndhold") UgeIndhold : string;
  constructor() { }

  ngOnInit(): void {
  }

}
