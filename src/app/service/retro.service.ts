import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetroService {

  constructor(private fireService : AngularFirestore) { }

  saveData(data){
    this.fireService.collection('post').add(data).then(()=>{
     
    })
  }

  
  loadData(){
    return this.fireService.collection('post').snapshotChanges().pipe(
      map((data)=>{
        return data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return {id, data}
        })
      })
    )
  }


  loadLatest(){
    return this.fireService.collection('post', ref =>ref.orderBy('createdAt').limit(10)).snapshotChanges().pipe(
      map((data) =>{
       return  data.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id
          return { id, data}
        })
      })
    )
  }

  loadOnePost(id){
   return this.fireService.collection('post').doc(id).valueChanges()
  }

  deletePost(id){
    this.fireService.collection('post').doc(id).delete().then(()=>{
      
    })
  }
}
