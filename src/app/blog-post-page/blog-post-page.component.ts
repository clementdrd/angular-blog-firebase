import { Component, OnInit } from '@angular/core';

interface obj {
  title: string,
  src: string,
  date: string,
  author: string,
}

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.css']
})
export class BlogPostPageComponent implements OnInit {

  public url:string = window.location.href;
  public title:string = "";
  public items: obj[] = [
    {
      title: 'Werewolf The Apocalypse : Un loup-garou tombé au champ de bataille',
      src: 'https://image.jeuxvideo.com/medias-sm/161191/1611914912-5985-card.jpg',
      date: 'Charizard',
      author: 'toto',
    },
    {
      title: 'Destruction AllStars - Une exclusivité PS5 qui manque de charisme',
      src: 'https://image.jeuxvideo.com/medias-sm/161240/1612404113-7536-card.jpg',
      date: 'Pikachu',
      author: 'toto',
    },
    {
      title: "Battlefield 6 : le futur et les évolutions qu'on attend",
      src: 'https://image.jeuxvideo.com/medias-sm/161228/1612281293-5245-card.jpg',
      date: 'Denticrisse',
      author: 'toto',
    },
    {
      title: 'Apex Legends™ : célébrez les 2 ans du Battle Royale avec la Saison 8 !',
      src: 'https://image.jeuxvideo.com/medias-sm/161217/1612174322-5307-card.png',
      date: 'Archéduc',
      author: 'toto',
    },
    {
      title: "Soldes d'hiver 2021 : Les meilleures offres Gaming, Hardware et High-Tech",
      src: 'https://image.jeuxvideo.com/medias-sm/161237/1612372771-1509-card.jpg',
      date: 'Necrozma',
      author: 'toto',
    },
    {
      title: "Stadia : Entre grandes ambitions et chute vertigineuse, l'histoire était-elle écrite ?",
      src: 'https://image.jeuxvideo.com/medias-sm/161229/1612294978-9892-card.jpg',
      date: 'Pikachu Illustrator',
      author: 'toto',
    },
    {
      title: 'PlayStation 5 : 4,5 millions de consoles distribuées !',
      src: 'https://image.jeuxvideo.com/medias-sm/161237/1612369603-7869-card.jpg',
      date: 'Félinferno',
      author: 'toto',
    },
    {
      title: 'Destruction AllStars - Premiers pas sur le mode Mayhem en 4K',
      src: 'https://image.jeuxvideo.com/medias-sm/161235/1612345276-9829-card.jpg',
      date: 'Bruyverne',
      author: 'toto',
    },
    {
      title: 'Des gamers singes, pour bientôt ?',
      src: 'https://image.jeuxvideo.com/medias-sm/161235/1612350857-2822-card.jpg',
      date: 'Oratoria',
      author: 'toto',
    },
    {
      title: 'GameStop : Un étudiant reverse une partie de ses gains à un hôpital !',
      src: 'https://image.jeuxvideo.com/medias-sm/161236/1612364122-3702-card.jpg',
      date: 'Séracrawl',
      author: 'toto',
    },
    {
      title: 'Apple utilise le faceID même avec le masque!',
      src: 'https://image.jeuxvideo.com/medias-sm/161229/1612287047-6799-card.jpg',
      date: 'Ponyta',
      author: 'toto',
    },
    {
      title: "Billet : Pas grave pour la pénurie, la PS5 et Xbox Series manquent encore d'exclus",
      src: 'https://image.jeuxvideo.com/medias-sm/161185/1611851770-1620-card.jpg',
      date: 'Rayquaza',
      author: 'toto',
    },
    {
      title: 'Gartic Phone : convivial, abordable et gratuit !',
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
      title: 'La carrière de Final Fantasy VII : Entre riche passé et futur prometteur',
      src: 'https://image.jeuxvideo.com/medias-md/161191/1611911675-5577-card.jpg',
      date: 'Gorythmic',
      author: 'toto',
    },
    {
      title: 'Werewolf The Apocalypse : Les 30 premières minutes sur PS5',
      src: 'https://image.jeuxvideo.com/medias-md/161184/1611841725-1799-card.png',
      date: 'Reptincel',
      author: 'toto',
    },
    {
      title: "The Medium : Tout ce qu'il faut savoir avant la sortie",
      src: 'https://image.jeuxvideo.com/medias-xs/161106/1611060162-9405-card.jpg',
      date: 'Birthday',
      author: 'toto',
    },
    {
      title: 'Le Poing Jay : "This is the End"',
      src: 'https://image.jeuxvideo.com/medias-md/157666/1576662604-3672-card.jpg',
      date: 'Palarticho',
      author: 'toto',
    },
    {
      title: 'Pause Process : Le downgrade graphique',
      src: 'https://image.jeuxvideo.com/medias-md/146547/1465472008-9643-card.jpg',
      date: 'Cosmovum',
      author: 'toto',
    },
    {
      title: 'Le Défi du Challenge - Une spéciale baston pour la dernière',
      src: 'https://image.jeuxvideo.com/medias-md/145026/1450262034-4183-card.jpg',
      date: 'Cosmovum',
      author: 'toto',
    },
  ];

  constructor() {

    console.log(this.url)

  }

  ngOnInit(): void {

    this.title = this.url.split('post/')[1].split('%20').join(' ').split('%C3%A9').join('é').split('%09&apos%3B').join("'")

  }

}
