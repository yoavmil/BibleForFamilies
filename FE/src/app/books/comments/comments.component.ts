import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentDto } from '../../../../../DTOs/comment.DTO';
import { CommentsService } from './comments.service';
import labels from './labels.json';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentDto[] = [];
  private commentsSub: Subscription;
  public labels = labels;

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments("");
    this.commentsSub = this.commentsService.commentsListener
      .subscribe((comments: CommentDto[]) => {
        this.comments = comments;
      });
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }
}
