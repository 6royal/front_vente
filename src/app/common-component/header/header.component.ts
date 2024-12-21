import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { CommonService, DataService, SidebarService } from 'src/app/core/core.index';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit  {
  public routes = routes;
  activePath = '';
  showSearch = false;
  public changeLayout = '1';
  public darkTheme = false;
  public logoPath = '';
  public miniSidebar = false;
  elem = document.documentElement;
  public addClass = false;
  base = '';
  page = '';
  last = '';

  constructor(
    private Router: Router,
    private common: CommonService,
    private sidebar: SidebarService,
    private webStorage: WebstorgeService,
    private data : DataService
  ) {
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.sidebar.sideBarPosition.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }
 


  public logout(): void {
    this.webStorage.Logout();
  }

  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }

  public togglesMobileSideBar(): void {
    this.sidebar.switchMobileSideBarPosition();
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user:any

  getUSer(){
    this.data.getUser().subscribe(data=>{
      this.user=data
      console.log(this.user)
    })
  }

  ngOnInit(): void {
   this.getUSer();
  }


}
