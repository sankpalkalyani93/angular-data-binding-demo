import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDivComponent } from './style-div.component';

describe('StyleDivComponent', () => {
  let component: StyleDivComponent;
  let fixture: ComponentFixture<StyleDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
