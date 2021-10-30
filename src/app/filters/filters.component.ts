import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterButton } from '../core/models/filter-button';
import { MachineStatus } from '../core/models/machine-status';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  MachineStatusEnum: typeof MachineStatus = MachineStatus;

  @Input() dataFilters: FilterButton[] = [];
  @Output() clickFilterButton = new EventEmitter<void>();
  @Input() dataCount;

  constructor() { }

  ngOnInit() {
    console.log(this.dataCount);
  }


}
