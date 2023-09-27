import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametersPage } from './parameters.page';

describe('ParametersPage', () => {
  let component: ParametersPage;
  let fixture: ComponentFixture<ParametersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParametersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
