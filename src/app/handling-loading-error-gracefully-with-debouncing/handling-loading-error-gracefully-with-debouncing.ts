import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Api, User } from '../api';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

type UserState = {
  data: User[];
  loading: boolean;
  error: HttpErrorResponse | null;
};

@Component({
  selector: 'app-handling-loading-error-gracefully-with-debouncing',
  imports: [ReactiveFormsModule],
  templateUrl: './handling-loading-error-gracefully-with-debouncing.html',
  styleUrl: './handling-loading-error-gracefully-with-debouncing.scss',
})
export class HandlingLoadingErrorGracefullyWithDebouncing {
  private readonly api = inject(Api);
  protected search = new FormControl<string>('', { nonNullable: true });

  protected userState = toSignal(
    this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        (val): Observable<UserState> =>
          this.api.getSearchUser(val).pipe(
            map((data) => ({ data, loading: false, error: null })),
            catchError((err) => of({ data: [], loading: false, error: err })),
            startWith({ data: [], loading: true, error: null }),
          ),
      ),
    ),
    { initialValue: { data: [], loading: true, error: null } as UserState },
  );
}
