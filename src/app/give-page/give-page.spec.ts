import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivePage } from './give-page';

describe('GivePage', () => {
  let component: GivePage;
  let fixture: ComponentFixture<GivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GivePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
