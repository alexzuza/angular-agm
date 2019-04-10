import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ]
})
export class FirebaseModule { }
