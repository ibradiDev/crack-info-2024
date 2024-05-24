import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { initializeAppCheck } from "firebase/app-check";
// import { initializeApp /* as initializep_alias */, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
// import { initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
// import { getMessaging, provideMessaging } from '@angular/fire/messaging';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { environment } from '../environments/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


// const siteKey = '6Ld2-ropAAAAAK7liNVYWCgcSgtRDinD4SmOjIQl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),




    /*
        (provideFirebaseApp(() => initializeApp(fireConfig))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideAppCheck(() => {
          // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
          const provider = new ReCaptchaV3Provider('6Ld2-ropAAAAAK7liNVYWCgcSgtRDinD4SmOjIQl');
          return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
        })), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())) */
  ],
};
