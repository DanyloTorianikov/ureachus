import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesModelsComponent } from './mes-models.component';

describe('MesModelsComponent', () => {
  let component: MesModelsComponent;
  let fixture: ComponentFixture<MesModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
