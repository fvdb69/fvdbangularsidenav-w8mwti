import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  opened: boolean = true;
  mode: string = "side";
  pintext: string = "lock_open";
  public routerMainMenu: Array<any>;
  public rlTabel = { routerLink: '/start', name: 'gen.strt', icon: 'fas fa-home'};
  public rlDashboard = { routerLink: '/start', name: 'gen.strt', icon: 'fas fa-home'};
  public rlDocuemtatie = { routerLink: '/start', name: 'gen.strt', icon: 'fas fa-home'};

  constructor() { }

  ngOnInit() {
  }

  Toggle() {
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  Pined() {
   if (this.mode == "side") {
     this.mode = "over";
     this.pintext = "lock";
   } else {
     this.mode = "side";
     this.pintext = "lock_open";
   }
  }

}