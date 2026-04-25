import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Api, User } from '../api';
import { debounceTime, switchMap, startWith, distinctUntilChanged, tap, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-with-debouncing',
  imports: [ReactiveFormsModule],
  templateUrl: './search-with-debouncing.html',
  styleUrl: './search-with-debouncing.scss',
})
export class SearchWithDebouncing implements OnInit {
  private readonly api = inject(Api);
  protected readonly search = new FormControl<string>('', { nonNullable: true });

  protected readonly users = toSignal(
    this.search.valueChanges.pipe(
      startWith(''), //initial search
      tap((v) => console.log('Before distinct:', v)),
      debounceTime(1000), //wait for typing pause

      distinctUntilChanged(), //avoid duplicate searches for checking type Angular in input and then in ngOnInIt setTimeout(() => this.search.setValue('Angular'),1000);
      tap((v) => console.log('After distinct:', v)),
      switchMap((val) =>
        this.api
          .getSearchUser(val)
          .pipe(map((users) => users.map((user) => ({ ...user, status: false })))),
      ), //cancel old requests
    ),
    { initialValue: [] },
  );

  ngOnInit(): void {}
}
