import { Component } from '@angular/core';
import { FilterButton } from './core/models/filter-button';
import { Machine } from './core/models/machine';
import { MachineStatus } from './core/models/machine-status';
import { MachineService } from './core/services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Machines';

  MachineStatusEnum: typeof MachineStatus = MachineStatus;
  filterButtons: FilterButton[] = [];
  filteredList = [];
  machinesList: Machine[] = []; 
  filteredMachinesList: Machine[] = []; 
  errorMessage: any = '';

  constructor( private _machineService: MachineService) { }

  ngOnInit() {
      for (let key in MachineStatus) {
        this.filterButtons.push({ status: Number(key), filtered: false});
      }
      this.filterButtons = this.filterButtons.slice(0, Math.ceil(this.filterButtons.length/2) )

    this.getMachines();
  }

  getMachines() {
    this._machineService.getData()
      .subscribe(
            machines => {
              this.machinesList = machines;
              this.filteredMachinesList = machines
            }

      );
  };


  getCount(filter: number) {
    return this.machinesList.filter( x => x.status === filter).length;
  }

  filterData(number: number) {
    const selected = this.filterButtons.find(x => x.status === number);

    if (selected.filtered === false) {
      selected.filtered = true;
    } else {
      selected.filtered = false;
      const unselected = this.filteredList.indexOf(selected.status);
      this.filteredList.splice(unselected ,1);
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
  }
}
