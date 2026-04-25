import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingLoadingErrorGracefullyWithDebouncing } from './handling-loading-error-gracefully-with-debouncing';

describe('HandlingLoadingErrorGracefullyWithDebouncing', () => {
  let component: HandlingLoadingErrorGracefullyWithDebouncing;
  let fixture: ComponentFixture<HandlingLoadingErrorGracefullyWithDebouncing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandlingLoadingErrorGracefullyWithDebouncing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlingLoadingErrorGracefullyWithDebouncing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
