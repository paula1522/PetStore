import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByTagsComponent } from './find-by-tags.component';

describe('FindByTagsComponent', () => {
  let component: FindByTagsComponent;
  let fixture: ComponentFixture<FindByTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindByTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
