import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from './data.json';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: any = data.articles;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let iframe = document.getElementById('iframe')! as HTMLIFrameElement;

    let idString = this.activeRoute.snapshot.paramMap.get('id');
    if (!idString) idString = '1000';
    let id = parseInt(idString);
    const result = this.articles.find((c: any) => c.id == id);
    if (result) {
      iframe.src = result.src;
    }
  }
}
