import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  private prevTarget: any;

  constructor() { }

  ngOnInit(): void {
  }

  public navButtons = [
    {
      imgUrl: 'assets/images/icon_line/home_5.svg',
      title: 'Tableau de bord'
    },
    {
      imgUrl: 'assets/images/Group 33551.svg',
      title: 'Dossiers'
    },
    {
      imgUrl: 'assets/images/icon_line/Calendar.svg',
      title: 'Dossiers'
    },
    {
      imgUrl: 'assets/images/icon_line/location.svg',
      title: 'Provenance'
    },
    {
      imgUrl: 'assets/images/icon_line/clock_circle.svg',
      title: 'Suivi modifications'
    },
    {
      imgUrl: 'assets/images/icon_line/user_1.svg',
      title: 'Utilisateurs'
    },
    {
      imgUrl: 'assets/images/school.svg',
      title: 'Formations'
    },
    {
      imgUrl: 'assets/images/Group-1.svg',
      title: 'BPF'
    },
    {
      imgUrl: 'assets/images/Vector-6.svg',
      title: 'Couts'
    },
    {
      imgUrl: 'assets/images/Vector-5.svg',
      title: 'Import Leads'
    },
    {
      imgUrl: 'assets/images/Vector-5.svg',
      title: 'Import IPBX'
    },
    {
      imgUrl: 'assets/images/compare_arrows.svg',
      title: 'Compteurs'
    },
    {
      imgUrl: 'assets/images/Vector-3.svg',
      title: 'Relances'
    },
    {
      imgUrl: 'assets/images/icon_line/Setting.svg',
      title: 'Parametres'
    },
    {
      imgUrl: 'assets/images/Vector-2.svg',
      title: 'Déconnexion'
    }
  ]

  public activateCategory($event: any): void {
    this.prevTarget?.classList.remove('active');
    $event.currentTarget.classList.add('active');
    this.prevTarget = $event.currentTarget;
  }

}
