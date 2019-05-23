import { Component, OnInit } from '@angular/core';
import {MatExpansionPanel} from "@angular/material";

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.scss']
})
export class ElectricalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLDivElement) {
    el.scrollIntoView();
  }

}
