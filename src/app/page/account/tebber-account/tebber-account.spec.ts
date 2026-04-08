import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TebberAccount } from './tebber-account';

describe('TebberAccount', () => {
  let component: TebberAccount;
  let fixture: ComponentFixture<TebberAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TebberAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TebberAccount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
