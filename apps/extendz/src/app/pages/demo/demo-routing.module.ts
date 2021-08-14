import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DataTableResolverService } from './services/data-table-resolver/data-table-resolver.service';

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
        path: 'data-table/:id',
        resolve: { resolved: DataTableResolverService },
        loadChildren: () =>
          import('./data-table/data-table.module').then(
            (m) => m.DataTableModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
