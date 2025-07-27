import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFramework } from './start-framework';

describe('StartFramework', () => {
  let component: StartFramework;
  let fixture: ComponentFixture<StartFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
