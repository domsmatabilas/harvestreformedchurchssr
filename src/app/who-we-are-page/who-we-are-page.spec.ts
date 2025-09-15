import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeArePage } from './who-we-are-page';

describe('WhoWeArePage', () => {
  let component: WhoWeArePage;
  let fixture: ComponentFixture<WhoWeArePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeArePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeArePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
