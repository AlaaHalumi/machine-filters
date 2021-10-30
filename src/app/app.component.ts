import { Component, OnInit } from '@angular/core';
import { FilterButton } from './core/models/filter-button';
import { Machine } from './core/models/machine';
import { MachineStatus } from './core/models/machine-status';
import { MachineService } from './core/services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Machines';

  MachineStatusEnum: typeof MachineStatus = MachineStatus;
  filterButtons: FilterButton[] = [];
  filteredList = [];
  machinesList: Machine[] = []; 
  filteredMachinesList: Machine[] = [];

  constructor( private _machineService: MachineService) { }

  ngOnInit() {
    this.getFilterButtons();
    this.getMachines();
  }
   
  getStorageFilters() : FilterButton[]{
    return JSON.parse(localStorage.getItem('filters'));  
  }

  saveStorageFilters(filters: FilterButton[]) {
    return localStorage.setItem('filters', JSON.stringify(filters));
  }

  getFilterButtons() {
    for (let key in this.MachineStatusEnum) {
      this.filterButtons.push({ status: Number(key), filtered: false});
    }
    this.filterButtons = this.filterButtons.slice(0, Math.ceil(this.filterButtons.length/2) );
  }

  getMachines() {
    this._machineService.getData()
      .subscribe(
            machines => {
              this.machinesList = machines;
              this.filteredMachinesList = machines;

              if(this.machinesList.length > 0 && this.filteredMachinesList.length > 0 && this.filterButtons){
                const selectedFilters=  this.getStorageFilters();
                if(selectedFilters) {
                  this.filterButtons = selectedFilters;
                }
                this.filterData();
              }
            }
      );
  };

  getCount() {
    const counter = [];
    this.filterButtons.forEach(filter => {
      counter.push(counter[filter.status] = this.machinesList.filter( x => x.status === filter.status).length)
    })
    return counter;
  }

  filterData(selectedStatus?: MachineStatus) {
    if (selectedStatus) {
      const selected = this.filterButtons.find(x => x.status === selectedStatus);

      if (selected.filtered === false) {
        selected.filtered = true;
      } else {
        selected.filtered = false;
        const unselect = this.filteredList.indexOf(selected.status);
        this.filteredList.splice(unselect ,1);
      }
    }
  
    const filterButtonsSelected: FilterButton[] = this.filterButtons.filter( x => x.filtered === true);
    filterButtonsSelected.forEach( item => {
      if ( !this.filteredList.includes(item.status) && item.filtered === true) {
        this.filteredList.push(item.status);
      }
    });

    const allUnselected = this.filterButtons.every( x=> x.filtered === false)
    if(allUnselected) {
      this.filteredMachinesList = this.machinesList;
    } else {
      this.filteredMachinesList = this.machinesList.filter(
        machine => this.filteredList.includes(machine.status)
      );
    }
    this.saveStorageFilters(this.filterButtons);
  }
}
