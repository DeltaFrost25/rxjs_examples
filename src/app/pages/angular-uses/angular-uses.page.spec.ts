import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUsesPage } from './angular-uses.page';

describe('AngularUsesPage', () => {
  let component: AngularUsesPage;
  let fixture: ComponentFixture<AngularUsesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularUsesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularUsesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
