import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface obj {
  title: string,
  src: string,
  date: string,
  author: string,
}

@Component({
  selector: 'app-blog-main-page',
  templateUrl: './blog-main-page.component.html',
  styleUrls: ['./blog-main-page.component.css']
})
export class BlogMainPageComponent implements OnInit {

  public size:number = 10;
  public titi:string = "";
  public items: obj[] = [
    {
      title: "Werewolf The Apocalypse ",
      src: 'https://image.jeuxvideo.com/medias-sm/161191/1611914912-5985-card.jpg',
      date: 'Charizard',
      author: 'toto',
    },
    {
      title: 'Destruction AllStars ',
      src: 'https://image.jeuxvideo.com/medias-sm/161240/1612404113-7536-card.jpg',
      date: 'Pikachu',
      author: 'toto',
    },
    {
      title: "Battlefield 6 ",
      src: 'https://image.jeuxvideo.com/medias-sm/161228/1612281293-5245-card.jpg',
      date: 'Denticrisse',
      author: 'toto',
    },
    {
      title: 'Apex Legends™ ',
      src: 'https://image.jeuxvideo.com/medias-sm/161217/1612174322-5307-card.png',
      date: 'Archéduc',
      author: 'toto',
    },
    {
      title: "Soldes d'hiver 2021 ",
      src: 'https://image.jeuxvideo.com/medias-sm/161237/1612372771-1509-card.jpg',
      date: 'Necrozma',
      author: 'toto',
    },
    {
      title: "Stadia : Entre grandes ",
      src: 'https://image.jeuxvideo.com/medias-sm/161229/1612294978-9892-card.jpg',
      date: 'Pikachu Illustrator',
      author: 'toto',
    },
    {
      title: 'PlayStation 5 : 4,5 ',
      src: 'https://image.jeuxvideo.com/medias-sm/161237/1612369603-7869-card.jpg',
      date: 'Félinferno',
      author: 'toto',
    },
    {
      title: 'Destruction AllStars ',
      src: 'https://image.jeuxvideo.com/medias-sm/161235/1612345276-9829-card.jpg',
      date: 'Bruyverne',
      author: 'toto',
    },
    {
      title: 'Des gamers singes',
      src: 'https://image.jeuxvideo.com/medias-sm/161235/1612350857-2822-card.jpg',
      date: 'Oratoria',
      author: 'toto',
    },
    {
      title: 'GameStop : Un étudiant ',
      src: 'https://image.jeuxvideo.com/medias-sm/161236/1612364122-3702-card.jpg',
      date: 'Séracrawl',
      author: 'toto',
    },
    {
      title: 'Apple utilise le ',
      src: 'https://image.jeuxvideo.com/medias-sm/161229/1612287047-6799-card.jpg',
      date: 'Ponyta',
      author: 'toto',
    },
    {
      title: "Billet : Pas grave pour ",
      src: 'https://image.jeuxvideo.com/medias-sm/161185/1611851770-1620-card.jpg',
      date: 'Rayquaza',
      author: 'toto',
    },
    {
      title: 'Gartic Phone : ',
      src: 'https://image.jeuxvideo.com/medias-sm/161220/1612200629-6288-card.png',
      date: 'Togedemaru',
      author: 'toto',
    },
    {
      title: 'Sonic est de retour !',
      src: 'https://image.jeuxvideo.com/medias-sm/161229/1612289469-9657-card.jpg',
      date: 'Tournicoton',
      author: 'toto',
    },
    {
      title: 'La carrière de ',
      src: 'https://image.jeuxvideo.com/medias-md/161191/1611911675-5577-card.jpg',
      date: 'Gorythmic',
      author: 'toto',
    },
    {
      title: 'Werewolf The Apocalypse ',
      src: 'https://image.jeuxvideo.com/medias-md/161184/1611841725-1799-card.png',
      date: 'Reptincel',
      author: 'toto',
    },
    {
      title: "The Medium : Tout ce ",
      src: 'https://image.jeuxvideo.com/medias-xs/161106/1611060162-9405-card.jpg',
      date: 'Birthday',
      author: 'toto',
    },
    {
      title: 'Le Poing Jay : ',
      src: 'https://image.jeuxvideo.com/medias-md/157666/1576662604-3672-card.jpg',
      date: 'Palarticho',
      author: 'toto',
    },
    {
      title: 'Pause Process : ',
      src: 'https://image.jeuxvideo.com/medias-md/146547/1465472008-9643-card.jpg',
      date: 'Cosmovum',
      author: 'toto',
    },
    {
      title: 'Le Défi du Challenge - ',
      src: 'https://image.jeuxvideo.com/medias-md/145026/1450262034-4183-card.jpg',
      date: 'Cosmovum',
      author: 'toto',
    },
  ];

  constructor() {

   }

  ngOnInit(): void {

    this.items.forEach(element => {

      element.title.split(' ')[0]
      console.log('toto')

    });
    console.log(this.items)
  }

  gotoBlog(num:any): void {
    console.log(num)
  }

}
