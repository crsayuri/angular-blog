import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  imageCover: string = ""

  @Input()
  cardEyebrow: string = ""

  @Input()
  cardTitle: string = ""

  @Input()
  cardExcerpt: string = ""

  @Input()
  cardTags: string = ""

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
