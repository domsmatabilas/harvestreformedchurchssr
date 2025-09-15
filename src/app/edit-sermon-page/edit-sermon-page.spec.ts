import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSermonPage } from './edit-sermon-page';

describe('EditSermonPage', () => {
  let component: EditSermonPage;
  let fixture: ComponentFixture<EditSermonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSermonPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSermonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
