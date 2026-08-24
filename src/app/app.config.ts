import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideNzConfig } from 'ng-zorro-antd/core/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(routes),

    //   provideNzConfig({
    //   theme: {
    //     primaryColor: '#2563eb'
    //   }
    // })

   
  ]
};



// function provideAnimationsAsync(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
//   throw new Error('Function not implemented.');
// }

 // provideNzConfig({
    //   theme: {
    //     primaryColor: '#1677ff'
    //   }
    // })
