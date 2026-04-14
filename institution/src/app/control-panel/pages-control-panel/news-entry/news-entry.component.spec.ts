import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEntryComponent } from './news-entry.component';

describe('NewsEntryComponent', () => {
  let component: NewsEntryComponent;
  let fixture: ComponentFixture<NewsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
