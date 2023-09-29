import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NavPage} from "../nav/nav.page";
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import Item from "../_interfaces/item";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavPage]
})
export class FavoritesPage implements OnInit {

  articlesId: string[] = [];
  articles: Item[] = [];
  constructor() { }

  ngOnInit() {
    // recuperation des id des articles sauvegardés
    this.articlesId = Object.keys(localStorage).filter((key) => key.startsWith('article'));
    // Pour chaque article sauvegardé, on le recupere et on l'ajoute à la liste des articles sauvegardés dans le local storage
    this.articlesId.forEach((articleId) => {
      let json = localStorage.getItem(articleId);
      // si l'article existe, on l'ajoute à la liste des articles
      if (json) {
        this.articles.push(JSON.parse(json));
      }
    });
  }

  async openBrowser(url: string) {
    // ouverture du navigateur avec l'url de l'article
    await Browser.open({ url: url });
  }

  async share(url: string) {
    // partage de l'article avec un ami
    return await Share.share({
      title: 'Partager à un ami',
      text: 'Salut, je te partage cet article',
      url: url,
    });
  }


  handleRefresh(event: any) {
    // rafrachissement de liste des articles sauvegardés en appelant la fonction ngOnInit
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);

  }

}
