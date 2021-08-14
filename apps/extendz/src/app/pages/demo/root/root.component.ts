import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityMetadata, RootAction } from '@extendz/core';

@Component({
  selector: 'extendz-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  constructor(private router: Router) {
    //
  }

  ngOnInit(): void {
    console.log();
  }

  onAction(action: RootAction) {
    switch (action.type) {
      case 'select': {
        const pay = action.payload as EntityMetadata;
        this.router.navigate(['data-table', pay.id]);
        break;
      }
      default:
        break;
    }
  }
}
