import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit  {
  title="Angular Breadcrumb Demo"
  
  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService ) {
  }
  
  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe( crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Angular Demo';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
}

private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
        return `${curr.displayName} - ${prev}`;
    }, '');
}

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}
