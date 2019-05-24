import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {
  
  showme: boolean = false;
  
  periode: string[] = ['2015', '2016', '2017'];
  status: string[] = ['Aangemaakt', 'In bewerking', 'Definitief', 'Goedgekeurd'];
  goto: string[] = ['Documentatie', 'Kolommenbalans', 'journaalposten', 'Inrichtingverslag', 'Publicatieverslag', 'Projectdetails'];

  constructor() { }

  ngOnInit() {
  }

  Toggle() {
    if (this.showme) {
      this.showme = false;
    } else {
      this.showme = true;
    }
  }

}