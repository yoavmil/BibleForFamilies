import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { CommentDto } from './comment.dto';
import { CommentsService } from './comments.service';
import labels from './labels.json';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentDto[] = [];
  public newComment: CommentDto = new CommentDto;
  private commentsSub: Subscription;
  public labels = labels;

  public sendCommentClicked() {
    console.log(`${this.newComment.authorDisplayName}: ${this.newComment.title} \n ${this.newComment.content}`);
    this.newCommentExpansionPanel.close();
    this.commentsService.addComment(this.newComment);
    this.newComment = new CommentDto();
  }

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

  @ViewChild('new_form_expansion_panel') newCommentExpansionPanel: MatExpansionPanel;

}
