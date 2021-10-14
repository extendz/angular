import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DataTableResolverService } from './services/data-table-resolver/data-table-resolver.service';
import { FormResolverService } from './services/form-resolver/form-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./root/root.module').then((m) => m.RootModule),
      },
      {
        path: ':model',
        resolve: { resolved: DataTableResolverService },
        loadChildren: () =>
          import('./data-table/data-table.module').then(
            (m) => m.DataTableModule
          ),
      },
      {
        path: ':model/:id',
        resolve: { resolved: FormResolverService },
        loadChildren: () =>
          import('./form/form.module').then((m) => m.FormModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
