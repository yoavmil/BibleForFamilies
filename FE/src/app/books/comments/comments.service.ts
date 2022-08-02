import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {

    this.http.get("http://localhost:3001/comment").subscribe({
    //   next: (comments) => {
    //     console.log(`got response ${comments}`);
    //     console.dir(comments);
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.error(`got error ${err.message}`);
    //     console.dir(err);
    //   }
    // }
    // );
   }

}
