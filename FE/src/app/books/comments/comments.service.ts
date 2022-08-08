import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommentDto } from './comment.dto';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly commentsURL: string = "http://localhost:3001/comment";
  private comments: CommentDto[] = [];
  private commentsUpdated = new Subject<CommentDto[]>();
  public get commentsListener() { return this.commentsUpdated.asObservable(); }

  constructor(private http: HttpClient) { }

  public getComments(url: string) {
    this.http.get<CommentDto[]>(this.commentsURL).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.commentsUpdated.next(this.comments);
      },
      error: (err: HttpErrorResponse) => {
        console.error(`got error at ${this.commentsURL}: ${err.message}`);
      }
    });
  }

  public addComment(comment: CommentDto) {
    if (!comment.date) comment.date = new Date().toString();
    this.http.post(this.commentsURL, comment).subscribe({
      next: (comment) => {
        this.comments.push(comment as CommentDto);
        this.commentsUpdated.next(this.comments);
      }
    });
  }

}
