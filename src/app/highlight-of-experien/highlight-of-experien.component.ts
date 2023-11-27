import { Component, OnInit } from '@angular/core';
import { RetroService } from '../service/retro.service';

@Component({
  selector: 'app-highlight-of-experien',
  templateUrl: './highlight-of-experien.component.html',
  styleUrls: ['./highlight-of-experien.component.css']
})
export class HighlightOfExperienComponent implements OnInit {
  post:any = []
  constructor(private retroService: RetroService){}

  ngOnInit(): void {
    this.retroService.loadLatest().subscribe({
      next: (results)=>{
        this.post = results
      }
    })
  }

}
