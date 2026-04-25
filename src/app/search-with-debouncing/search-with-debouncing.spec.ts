import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithDebouncing } from './search-with-debouncing';

describe('SearchWithDebouncing', () => {
  let component: SearchWithDebouncing;
  let fixture: ComponentFixture<SearchWithDebouncing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchWithDebouncing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchWithDebouncing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
