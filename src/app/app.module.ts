import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Your2023StoryComponent } from './your-2023-story/your-2023-story.component';
import { HighlightOfExperienComponent } from './highlight-of-experien/highlight-of-experien.component';
import { AllExperiencesComponent } from './all-experiences/all-experiences.component';
import { SingleExperienceComponent } from './single-experience/single-experience.component';
import { environmnet } from './fiebaseEnvironment/environmnet';



@NgModule({
  declarations: [
    AppComponent,
    Your2023StoryComponent,
    HighlightOfExperienComponent,
    AllExperiencesComponent,
    SingleExperienceComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environmnet.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
