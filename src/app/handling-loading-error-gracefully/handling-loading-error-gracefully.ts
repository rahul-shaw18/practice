import { Component, inject } from '@angular/core';
import { Api, User } from '../api';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, startWith } from 'rxjs';
import { FormControl, ɵInternalFormsSharedModule } from '@angular/forms';

type userState = {
  data: User[];
  loading: boolean;
  error: unknown | null;
};

@Component({
  selector: 'app-handling-loading-error-gracefully',
  imports: [ɵInternalFormsSharedModule],
  templateUrl: './handling-loading-error-gracefully.html',
  styleUrl: './handling-loading-error-gracefully.scss',
})
export class HandlingLoadingErrorGracefully {
  protected readonly api = inject(Api);

  protected userState = toSignal(
    this.api.getAllUser().pipe(
      map((data) => ({ data, loading: false, error: null })),
      catchError((err) => of({ data: [], loading: false, error: err })),
      startWith({ data: [], loading: true, error: null }),
    ),
    { initialValue: { data: [], loading: true, error: null } },
  );
}
