import { User } from './../../models/user';
import { Observable } from 'rxjs';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
const SMALL_WITH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width:${SMALL_WITH_BREAKPOINT}px)`);

    users :Observable<User[]>;
    isDarkTheme:boolean =false;
    Dir :string ='ltr';


  constructor(
    zone: NgZone, 
    private userService:UserService,
    private router :Router
    ) {
    zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WITH_BREAKPOINT}px)`));
  }

  @ViewChild(MatSidenav) drawer: MatSidenav;


  toggleTheme()
  {
    this.isDarkTheme =!this.isDarkTheme;
  }

  toggledir()
  {
    this.Dir =this.Dir ==='ltr'?'rtl':'ltr';
  }
  ngOnInit(): void {
    this.users =this.userService.users;
    this.userService.loadAll();
    

    this.router.events.subscribe(()=>{
      if(this.isScreenSmall())
      //ToDo
      this.drawer.close();
      
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }



}
