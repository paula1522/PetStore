import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByStatusComponent } from './find-by-status.component';

describe('FindByStatusComponent', () => {
  let component: FindByStatusComponent;
  let fixture: ComponentFixture<FindByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindByStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
