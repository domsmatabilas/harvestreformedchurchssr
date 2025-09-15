import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBelievePage } from './what-we-believe-page';

describe('WhatWeBelievePage', () => {
  let component: WhatWeBelievePage;
  let fixture: ComponentFixture<WhatWeBelievePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBelievePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeBelievePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
