import { Component, OnInit } from '@angular/core';
import { DataService, SidebarService, routes } from 'src/app/core/core.index';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { url } from 'src/app/shared/model/sidebar.model';

interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  menu: SubMenu[];
}

interface SubMenu {
  menuValue: string;
  showSubRoute: boolean;
}


@Component({
  selector: 'app-sidebar-one',
  templateUrl: './sidebar-one.component.html',
  styleUrls: ['./sidebar-one.component.scss'],
})
export class SidebarOneComponent implements OnInit {
  public routes = routes;
  base = '';
  page = '';
  currentUrl = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public side_bar_data: Array<any> = [];

  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private router: Router,
    private data: DataService,
  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.side_bar_data = this.sidebar.sidebarData1;
  }
  ngOnInit(): void {
    this.getUSer(); 
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  expandSubMenus(menu: MenuItem): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    menu.showSubRoute = !menu.showSubRoute;  // Forcer l'affichage du sous-menu pour tester
    this.side_bar_data.forEach((mainMenus: MenuItem) => {
      mainMenus.menu.forEach((resMenu: SubMenu) => {
        if (resMenu.menuValue === menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  

  openMenuItem: MenuItem | null = null;
  openSubmenuOneItem: SubMenu[] | null = null;
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;

  openMenu(menu: MenuItem): void {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
    }
  }
  
  openSubmenuOne(subMenus: SubMenu[]): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }

  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user:any

  getUSer(){
    this.data.getUser().subscribe(data=>{
      this.user=data

      this.getFilteredMenuItems()
    })
  }

  getFilteredMenuItems() {
    
    if (this.user.role ==="Manager") {
      
      return this.side_bar_data;  // Afficher tous les menus pour l'admin
    }
    // Si l'utilisateur est un utilisateur normal, on affiche seulement le menu "vente"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.side_bar_data=this.side_bar_data.filter((mainMenu: any) => 
      mainMenu.menu.some((menu: MenuItem) => menu.menuValue === 'Effectuer une vente') // Filtrer pour inclure uniquement "Vente"
    );
    console.log(this.side_bar_data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.side_bar_data.filter((mainMenu: any) => 
      mainMenu.menu.some((menu: MenuItem) => menu.menuValue === 'Effectuer une vente') // Filtrer pour inclure uniquement "Vente"
    );
  }
}