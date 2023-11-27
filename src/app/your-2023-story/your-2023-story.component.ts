import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RetroService } from '../service/retro.service';
import { Router } from '@angular/router';

interface data {
  experience : string,
  name:string,
  check:boolean
  createdAt:Date 
}

@Component({
  selector: 'app-your-2023-story',
  templateUrl: './your-2023-story.component.html',
  styleUrls: ['./your-2023-story.component.css']
})
export class Your2023StoryComponent {
  constructor(private retorService: RetroService, private router:Router){}

  onSubmit(form){
    
    const experienceData:data = {
      experience: form.value.experience,
      name: '@' + form.value.name,
      check: false,
      createdAt: new Date()
    }

    this.retorService.saveData(experienceData)
    this.router.navigate(['/retro'])
  }

}
