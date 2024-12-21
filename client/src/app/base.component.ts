import { Directive } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export class BaseComponent {
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}