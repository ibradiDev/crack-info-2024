import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackFormComponent } from './crack-form.component';

describe('CrackFormComponent', () => {
  let component: CrackFormComponent;
  let fixture: ComponentFixture<CrackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrackFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
