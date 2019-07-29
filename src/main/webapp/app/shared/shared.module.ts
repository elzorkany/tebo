import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WasalnygatewaySharedLibsModule, WasalnygatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WasalnygatewaySharedLibsModule, WasalnygatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WasalnygatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WasalnygatewaySharedModule {
  static forRoot() {
    return {
      ngModule: WasalnygatewaySharedModule
    };
  }
}
