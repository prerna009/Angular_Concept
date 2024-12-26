import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Store } from '@ngrx/store';
import { State } from '../../models/state';
import { addArticle } from '../../actions/article.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: false,
  
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  article$!: Observable<Article[]>;
  constructor(private store:Store<State>){}

  ngOnInit(): void {
    this.article$=this.store.select(store=>store.article);
  }

  addArticle(myform:NgForm){
    this.store.dispatch(addArticle({payload:myform.value}));
    myform.reset();
  }
}
