import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Your2023StoryComponent } from './your-2023-story/your-2023-story.component';
import { AllExperiencesComponent } from './all-experiences/all-experiences.component';
import { SingleExperienceComponent } from './single-experience/single-experience.component';

const routes: Routes = [
  {path:'', component: Your2023StoryComponent},
  {path: 'retro', component: AllExperiencesComponent},
  {path: 'single/:id', component: SingleExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
