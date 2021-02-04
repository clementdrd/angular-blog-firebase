import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMainPageComponent } from './blog-main-page.component';

describe('BlogMainPageComponent', () => {
  let component: BlogMainPageComponent;
  let fixture: ComponentFixture<BlogMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
