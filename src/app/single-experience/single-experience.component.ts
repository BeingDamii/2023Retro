import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { RetroService } from '../service/retro.service';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.css']
})
export class SingleExperienceComponent implements OnInit {

  post:any 
  deleteResutl:any

  constructor(private router: ActivatedRoute, private retroService: RetroService){
    effect(()=>{
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
    })
  }
  
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  )

  @HostBinding('class.dark') get mode(){
    return this.darkMode()
  }

  ngOnInit(): void {
    this.router.params.subscribe({
      next: (results)=>{
       this.deleteResutl = results['id']
       
        this.retroService.loadOnePost(results['id']).subscribe({
          next: (data)=>{
            this.post = data
            console.log(data)
          }
        })
      }
    })
  }

  deletePost(id){
    this.retroService.deletePost(this.deleteResutl)
  }


}
