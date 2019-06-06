import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {

   jsondata = { 
        "title": "Leren",
        "items": [ { "name":"Microsoft Learning Dashboard",   "url":"https://www.microsoft.com/en-us/learning/dashboard.aspx" },
                   { "name":"Microsoft Virtual Academy",      "url":"https://mva.microsoft.com" },
                   { "name":"Channel9",    	 	   	            "url":"https://channel9.msdn.com" },
                   { "name":"Microsoft Learning Dashboard",   "url":"https://www.microsoft.com/en-us/learning/dashboard.aspx" },
                   { "name":"Microsoft Virtual Academy",      "url":"https://mva.microsoft.com" },
                   { "name":"Channel9",    	 	   	            "url":"https://channel9.msdn.com" }
                ]};
          

  public Urls: Array<Links>;

  constructor() { }

  ngOnInit() {
    this.loadFakeData();
  }

  loadFakeData(){
    let links: Array<Links>= new Array<Links>();

    links.push(this.jsondata);

    this.Urls = links;
  }

}

export interface Item {
  name: string;
  url: string;
}

export interface Links {
  title: string;
  items: Item[];
}
