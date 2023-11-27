import { Component, HostBinding, OnInit, Signal, effect, signal } from '@angular/core';
import { RetroService } from '../service/retro.service';

@Component({
  selector: 'app-all-experiences',
  templateUrl: './all-experiences.component.html',
  styleUrls: ['./all-experiences.component.css']
})
export class AllExperiencesComponent implements OnInit{

  post:any =[]

  constructor( private retroServices: RetroService){
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
    this.retroServices.loadData().subscribe({
      next: (data)=>{
        this.post = data
      }
    })


  }



  
}
