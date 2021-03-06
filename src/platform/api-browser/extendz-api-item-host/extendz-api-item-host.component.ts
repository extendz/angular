import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ext-api-item-host',
  templateUrl: './extendz-api-item-host.component.html',
  styleUrls: ['./extendz-api-item-host.component.css']
})
export class ExtendzApiItemHostComponent implements OnInit, OnDestroy {
  /**
   * All Subscriptions within the component
   */
  all$: Subscription;
  /**
   * Id of the selected item
   */
  id: number | string;

  /**
   * Selected model
   */
  model: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.all$ = this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      this.model = param.name;
    });
  } // ngOnInit()

  ngOnDestroy(): void {
    if (!this.all$) this.all$.unsubscribe();
  }
}
