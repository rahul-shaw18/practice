import { Component, inject, OnInit } from '@angular/core';
import { Api } from './../api';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './../filter-pipe';
import { FilterByRolePipe } from './filter-by-role-pipe';

@Component({
  selector: 'app-normal-search',
  imports: [ReactiveFormsModule, FilterPipe, FilterByRolePipe],
  templateUrl: './normal-search.html',
  styleUrl: './normal-search.scss',
})
export class NormalSearch implements OnInit {
  private api = inject(Api);

  protected readonly users = toSignal(this.api.getAllUser(), { initialValue: [] });

  protected search = new FormControl<string>('', { nonNullable: true });
  protected role = new FormControl<string>('', { nonNullable: true });

  ngOnInit(): void {
    this.api.getAllUser().subscribe((res) => console.log(res));
    this.search.valueChanges.subscribe((val) => console.log(val));
    this.role.valueChanges.subscribe((val) => console.log(val));
  }
}
