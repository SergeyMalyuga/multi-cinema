import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopfilmComponent } from './popfilm.component';

describe('PopfilmComponent', () => {
  let component: PopfilmComponent;
  let fixture: ComponentFixture<PopfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopfilmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
