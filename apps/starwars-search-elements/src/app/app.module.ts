import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  UiSearchResultModule,
  SearchResultComponent,
} from '@starwars-search/ui-search-result';

@NgModule({
  declarations: [],
  imports: [BrowserModule, UiSearchResultModule],
  entryComponents: [SearchResultComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const searchResultComponent = createCustomElement(SearchResultComponent, {
      injector,
    });

    customElements.define('search-result', searchResultComponent);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngDoBoostrap() {}
}
