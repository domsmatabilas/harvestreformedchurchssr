import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSermonPage } from './add-sermon-page';

describe('AddSermonPage', () => {
  let component: AddSermonPage;
  let fixture: ComponentFixture<AddSermonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSermonPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSermonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
