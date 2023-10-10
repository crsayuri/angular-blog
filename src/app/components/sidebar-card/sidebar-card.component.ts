import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.css']
})
export class SidebarCardComponent implements OnInit {
  @Input()
  sidebarCover: string = "https://media.istockphoto.com/id/1369508766/pt/foto/beautiful-successful-latin-woman-smiling.jpg?s=2048x2048&w=is&k=20&c=E6U3sE8wlJOpNPWdzulAwcGpVV3m2GxEoWzQphz2bQI="
  @Input()
  sidebarEyebrow: string = ""
  @Input()
  sidebarTitle: string = ""
  @Input()
  sidebarExcerpt: string = ""
  @Input()
  sidebarTags: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
