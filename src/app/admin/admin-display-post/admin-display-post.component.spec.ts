import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayPostComponent } from './admin-display-post.component';

describe('AdminDisplayPostComponent', () => {
  let component: AdminDisplayPostComponent;
  let fixture: ComponentFixture<AdminDisplayPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisplayPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
