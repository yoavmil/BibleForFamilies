import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommentDto } from './comment.dto';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly commentsURL: string = 'http://localhost:3001/comment';
  private comments: CommentDto[] = [];
  private commentsUpdated = new Subject<CommentDto[]>();
  public get commentsListener() {
    return this.commentsUpdated.asObservable();
  }

  constructor(private http: HttpClient) {}

  public getComments(url: string) {
    let params = new HttpParams().set('url', url);
    this.http // TODO replace to get and replace params with a new TDO
      .post<CommentDto[]>(this.commentsURL, { params: params })
      .subscribe({
        next: (comments) => {
          this.comments = comments;
          this.commentsUpdated.next(this.comments);
        },
        error: (err: HttpErrorResponse) => {
          console.error(`got error at ${this.commentsURL}: ${err.message}`);
        },
      });
  }

  public addComment(comment: CommentDto) {
    if (!comment.date) comment.date = new Date();
    this.http.post(this.commentsURL, comment).subscribe({
      next: (comment) => {
        this.comments.push(comment as CommentDto);
        this.commentsUpdated.next(this.comments);
      },
    });
  }

  deleteComment(comment: CommentDto) {
    this.http.delete(`${this.commentsURL}/${comment._id}`).subscribe({
      next: (reply) => {
        this.getComments('');
      },
    });
  }
}
