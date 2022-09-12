import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { CommentDto } from './comment.dto';
import { CommentsService } from './comments.service';
import labels from './labels.json';
import { Marked } from '@ts-stack/markdown';
import { gematriya, Locale, HDate } from '@hebcal/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(public commentsService: CommentsService, private router: Router) {
    // every time the url changes, reload the current comments
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getComments();
      }
    });
  }

  comments: CommentDto[] = [];
  public newComment: CommentDto = new CommentDto();
  private commentsSub: Subscription;
  public labels = labels;
  @ViewChild('new_form_expansion_panel')
  newCommentExpansionPanel: MatExpansionPanel;

  public sendComment() {
    this.newCommentExpansionPanel.close();
    this.newComment.url = this.myUrl;
    this.commentsService.addComment(this.newComment);
    this.newComment = new CommentDto();
  }

  public deleteComment(comment: CommentDto) {
    this.commentsService.deleteComment(comment);
  }

  ngOnInit() {
    this.getComments();
  }

  private getComments() {
    this.commentsService.getComments(this.myUrl);
    this.commentsSub = this.commentsService.commentsListener.subscribe(
      (comments: CommentDto[]) => {
        this.comments = comments;
      }
    );
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }

  public process(md: string): string {
    return Marked.parse(md);
  }

  public hebrewDate(comment: CommentDto) {
    if (!comment.date) return '';
    let date: Date = new Date(comment.date);
    let hDate: HDate = new HDate(date);
    let hNow = new HDate(new Date());
    let sameYear = hDate.getFullYear() == hNow.getFullYear();
    let day = gematriya(hDate.getDate());
    let month = Locale.gettext(hDate.getMonthName(), `he-x-NoNikud`);
    let str: string = `${day} ${month}`;
    if (!sameYear) str += ', ' + gematriya(hDate.getFullYear());
    return str;
  }

  public date(comment: CommentDto) {
    if (!comment.date) return '';
    const date: Date = new Date(comment.date);
    let pad = function (n: number) {
      return n.toString().padStart(2, '0');
    };
    return `${pad(date.getDate())}/${pad(date.getMonth())}/${pad(
      date.getFullYear() % 1000
    )}`;
  }

  private get myUrl(): string {
    return this.router.url;
  }
}
