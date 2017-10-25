import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';

import { ProtectedComponent } from './components/protected/protected.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pricing', component: PricingComponent },
    {
        path: 'protected', component: ProtectedComponent,
        canActivate: [AuthGuardService]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

