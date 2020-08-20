import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, SiteComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@lowlandtech/home').then(m => m.HomeModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'card/:slug',
        loadChildren: () =>
          import('@lowlandtech/card').then(m => m.CardModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@lowlandtech/settings').then(
            m => m.SettingsModule
          )
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('@lowlandtech/editor').then(
            m => m.EditorModule
          )
      },
      {
        path: 'profile/:username',
        loadChildren: () =>
          import('@lowlandtech/profile').then(
            m => m.ProfileModule
          )
      },
      {
        path: 'playground',
        loadChildren: () =>
          import('@lowlandtech/playground').then(
            m => m.PlaygroundModule
          )
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
