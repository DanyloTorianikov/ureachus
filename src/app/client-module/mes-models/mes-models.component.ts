import { Component, OnInit } from '@angular/core';
import { Model } from '../../core/classes/model';

@Component({
  selector: 'app-mes-models',
  templateUrl: './mes-models.component.html',
  styleUrls: ['./mes-models.component.scss']
})
export class MesModelsComponent implements OnInit {

  models: Model[] = [];
  viewedModels: Model[];
  currentPdfSrc: string = 'assets/files/sample1.pdf';
  filterVal: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.createModels();
    this.viewedModels = this.models;
  }

  private createModels() :void {
    for (let i = 1; i <= 20; i++) {
      this.models.push(
        {
          id: i,
          name: `Pré-évaluation ${i}`,
          date: `0${i}/01/2000 A 22:13`,
          isAvailable: !!((i % 6)),
          isChecked: !!((i % 3)),
          pdfSrc: `assets/files/sample${i % 5}.pdf`
        }
      )
    }
  }

  public filter() {
    this.viewedModels = this.models.filter(model => {
      return model.name?.includes(this.filterVal);
    })
  }

  takeSrc(newSrc: string) {
    this.currentPdfSrc = newSrc;
  }
}
