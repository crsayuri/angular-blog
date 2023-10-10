import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SidebarCardComponent } from './components/sidebar-card/sidebar-card.component';
import { NormalCardComponent } from './components/normal-card/normal-card.component';
import { HeroTitleComponent } from './components/hero-title/hero-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MainCardComponent,
    SidebarCardComponent,
    NormalCardComponent,
    HeroTitleComponent,
    HomeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
