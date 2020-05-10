import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { LazyLoaderService } from './services/pages-lazy-loader/lazy-loader.service';
import { MatSidenav } from '@angular/material/sidenav';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Alternatif Bank Demo Projesi';
  @ViewChild('container', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  isExpanded = true;
  menuList: any = {};

  constructor(private loader: LazyLoaderService, private core: CoreService) {
    this.getMenus();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.load('home');
  }

  load(url) {
    this.container.clear();
    this.loader.load(url, this.container);
  }

  getMenus() {
    this.core.Get("menu")
      .then(data => {
        this.menuList = data.result;
      })
      .catch(err => {
        console.log("Menü bulunamadı!")
      })
  }
}
