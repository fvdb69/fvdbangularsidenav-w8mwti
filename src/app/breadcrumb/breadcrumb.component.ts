import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
 
  breadcrumbList: Array<any> = [];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.listenRouting();
  }

  listenRouting() {
    this.breadcrumbList.push({
        name: 'Home'
    });
        this.breadcrumbList.push({
        name: 'Test'
    });
  }

}