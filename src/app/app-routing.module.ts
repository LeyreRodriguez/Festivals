import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  { 
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup-company',
    loadChildren: () => import('./signup-company/signup-company.module').then( m => m.SignupCompanyPageModule)
  },
  {
    path: 'signup-users',
    loadChildren: () => import('./signup-users/signup-users.module').then( m => m.SignupUsersPageModule)
  },
  {
    path: 'festival/:id',
    loadChildren: () => import('./festival/festival.module').then( m => m.FestivalPageModule)
  },
  {
    path: 'festivales',
    loadChildren: () => import('./festivales/festivales.module').then( m => m.FestivalesPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


