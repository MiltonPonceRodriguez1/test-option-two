// IMPORT DEPENDENCYS
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// COMPONENTS
import { PaymentComponent } from './components/payment/payment.component';

const appRoutes: Routes = [
    { path: '', component:  PaymentComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);