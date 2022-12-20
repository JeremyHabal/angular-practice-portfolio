import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksProjectsComponent } from './works-projects.component';

describe('WorksProjectsComponent', () => {
  let component: WorksProjectsComponent;
  let fixture: ComponentFixture<WorksProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
