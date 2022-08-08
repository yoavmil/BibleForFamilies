import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { CommentDto } from './comment.dto';
import { CommentsService } from './comments.service';
import labels from './labels.json';
import { Marked } from '@ts-stack/markdown';
import { gematriya, Locale, HDate } from '@hebcal/core';

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
  @ViewChild('new_form_expansion_panel') newCommentExpansionPanel: MatExpansionPanel;

  public sendComment() {
    console.log(`${this.newComment.authorDisplayName}: ${this.newComment.title} \n ${this.newComment.content}`);
    this.newCommentExpansionPanel.close();
    this.commentsService.addComment(this.newComment);
    this.newComment = new CommentDto();
  }

  public deleteComment(comment: CommentDto) {
    this.commentsService.deleteComment(comment);
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

  public process(md: string): string {
    return Marked.parse(md);
  }

  public hebrewDate(comment: CommentDto) {
    let tmp: string = new Date().toISOString();
    let date: Date = new Date(tmp);
    let hDate: HDate = new HDate(date);
    let hNow = new HDate(new Date());
    let sameYear = hDate.getFullYear() == hNow.getFullYear();
    let day = gematriya(hDate.getDate());
    let month = Locale.gettext(hDate.getMonthName(), `he-x-NoNikud`);
    let str: string = `${day} ${month}`;
    if (!sameYear) str += ", " + gematriya(hDate.getFullYear());
    return str;
  }

  public date(comment: CommentDto) {
    return "TODO this" + comment.date;
  }
}
