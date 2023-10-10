import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/datafake';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  articleTitle: string = ""
  @Input()
  articleSubtitle: string = ""
  @Input()
  articleImg: string = ""
  @Input()
  articleContent: string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.articleTitle = result.title,
    this.articleImg = result.photo,
    this.articleSubtitle = result.subtitle,
    this.articleContent = result.description
  }

}
