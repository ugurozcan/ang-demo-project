import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'home',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    name: 'about',
    loadChildren: () => import('../../pages/about/about.module').then(m => m.AboutModule)
  }
]

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  return result;
}