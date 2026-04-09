import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAccount } from './aside-bar.account';

describe('AsideAccount', () => {
  let component: AsideAccount;
  let fixture: ComponentFixture<AsideAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
