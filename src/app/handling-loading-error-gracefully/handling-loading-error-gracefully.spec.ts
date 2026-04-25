import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingLoadingErrorGracefully } from './handling-loading-error-gracefully';

describe('HandlingLoadingErrorGracefully', () => {
  let component: HandlingLoadingErrorGracefully;
  let fixture: ComponentFixture<HandlingLoadingErrorGracefully>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandlingLoadingErrorGracefully]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlingLoadingErrorGracefully);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
