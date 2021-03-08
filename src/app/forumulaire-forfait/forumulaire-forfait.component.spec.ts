import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumulaireForfaitComponent } from './forumulaire-forfait.component';

describe('ForumulaireForfaitComponent', () => {
  let component: ForumulaireForfaitComponent;
  let fixture: ComponentFixture<ForumulaireForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumulaireForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumulaireForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
