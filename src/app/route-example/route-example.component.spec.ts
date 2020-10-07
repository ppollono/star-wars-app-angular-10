import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteExampleComponent } from './route-example.component';

describe('RouteExampleComponent', () => {
  let component: RouteExampleComponent;
  let fixture: ComponentFixture<RouteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
