import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSearch } from './normal-search';

describe('NormalSearch', () => {
  let component: NormalSearch;
  let fixture: ComponentFixture<NormalSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
