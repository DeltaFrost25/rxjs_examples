import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallsPage } from './http-calls.page';

describe('HttpCallsPage', () => {
  let component: HttpCallsPage;
  let fixture: ComponentFixture<HttpCallsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCallsPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
