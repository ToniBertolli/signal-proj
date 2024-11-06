import { Routes } from '@angular/router';
import { ExampleBasicComponent } from './examples/example-basic/example-basic.component';
import { ExampleInputsComponent } from './examples/example-inputs/example-inputs.component';
import ExampleObservableComponent from './examples/example-observable/example-observable.component';
import { ExampleProductsComponent } from './examples/example-products/example-products.component';

export const routes: Routes = [
    {
        path: 'basic',
        component: ExampleBasicComponent,
    },
    {
        path: 'inputs',
        component: ExampleInputsComponent,
    },
    {
        path: 'observable',
        component: ExampleObservableComponent,
    },
    {
        path: 'products',
        component: ExampleProductsComponent,
    },
    {
        path: '**',
        redirectTo: 'basic'
    },
];
