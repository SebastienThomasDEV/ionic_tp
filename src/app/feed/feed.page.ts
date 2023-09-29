import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NavPage} from "../nav/nav.page";
import {FeedService} from "../_services/feed.service";
import {HttpClientModule} from "@angular/common/http";
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';
import Item from "../_interfaces/item";
import {users} from "../users/users";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavPage, HttpClientModule]
})
export class FeedPage implements OnInit {
  api_key = "ljpg7oks1bylvrwnilujce2aqgqajwfmsbsf0bc5";

  constructor(private readonly feedService: FeedService) {
  }

  items: Item[] = [];
  user!: any;
  articlesId: string[] = [];
  saved_articles: Item[] = [];

  ngOnInit() {
    // recuperation de l'id de l'utilisateur connecté
    const userId = localStorage.getItem('userId');
    // recuperation de l'utilisateur connecté
    this.user = users.find((user) => user.id === +userId!);
    // recuperation des fluxs de l'utilisateur connecté
    this.updateFeed();
  }

  handleRefresh(event: any) {
    // rafrachissement de liste des articles
    setTimeout(() => {
      this.updateFeed();
      event.target.complete();
    }, 2000);

  }

  handleToggle(event: any, flux: any) {
    // changement de l'etat d'abonnement d'un flux
    flux.subscribed = !flux.subscribed;
  }

  updateFeed() {
    this.items = [];
    // recuperation des id des articles sauvegardés
    this.articlesId = Object.keys(localStorage).filter((key) => key.startsWith('article'));
    // Pour chaque article sauvegardé, on le recupere et on l'ajoute à la liste des articles sauvegardés
    this.articlesId.forEach((articleId) => {
      let json = localStorage.getItem(articleId);
      if (json) {
        this.saved_articles.push(JSON.parse(json));
      }
    });
    // Pour chaque flux de l'utilisateur connecté, on recupere les articles
    this.user.feeds.forEach((source: any) => {
      // Si le flux est abonné, on recupere les articles grace à l'api
      source.fluxs.forEach((flux: any) => {
        if (flux.subscribed) {
          this.feedService.getFeed(flux.url, this.api_key).subscribe((res: any) => {
            res.items.forEach((item: Item) => {
              // Pour chaque article, on verifie si il est sauvegardé
              let saved = false;
              this.saved_articles.forEach((article: Item) => {
                // Si l'article est sauvegardé, on ne l'ajoute pas à la liste des articles affichés
                if (item.title === article.title) {
                  saved = true;
                }
              });
              // Si l'article n'est pas sauvegardé, on l'ajoute à la liste des articles affichés
              if (!saved) this.items.push(item);
            });
          });
        }
      });
    });
  }

  async share(url: string) {
    // Partage d'un article à un ami
    return await Share.share({
      title: 'Partager à un ami',
      text: 'Salut, je te partage cet article',
      url: url,
    });
  }

 async openBrowser(url: string) {
    // Ouverture d'un article dans le navigateur
    await Browser.open({ url: url });
  }


  saveArticle(article: any, userId: number) {
    // Retrouver l'article dans la liste des articles affichés
    this.items = this.items.filter((item) => item.title !== article.title);
    // Transformer l'article en string
    let json_article = JSON.stringify(article);
    // Sauvegarder l'article dans le local storage avec une clé unique
    localStorage.setItem(`article${Math.random().toString().split('.')[1]}`, json_article);
  }






}
