import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Model } from '../../core/classes/model';

@Component({
  selector: 'app-users-model',
  templateUrl: './users-model.component.html',
  styleUrls: ['./users-model.component.scss']
})
export class UsersModelComponent {
  @Input() model: Model;
  @Output() pdfSrc = new EventEmitter<string>();

  constructor() {}

  public activateCheckbox(): void {
    if(!this.model.isAvailable) return;
    this.model.isChecked = !this.model.isChecked;
  }

  public toggle(): void {
    this.model.isAvailable = !this.model.isAvailable;
  }

  public emitPdfSrc() {
    if(!this.model.isAvailable) return;
    this.pdfSrc.emit(this.model.pdfSrc);
  }

  public get eyeImage(): string {
    return this.model.isAvailable ? 'assets/images/vuesax/linear/eye.png' : 'assets/images/vuesax/linear/vuesax/linear/eye.png'
  }

  public get editImage(): string {
    return this.model.isAvailable ? 'assets/images/vuesax/linear/edit.png' : 'assets/images/vuesax/linear/vuesax/linear/edit.png';
  }
  public get toggleImage(): string {
    return this.model.isAvailable ? 'assets/images/Toggle-1.png' : 'assets/images/Toggle.png';
  }
}
