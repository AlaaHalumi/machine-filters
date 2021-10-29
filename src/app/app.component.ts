import { Component } from '@angular/core';
import { Machine } from './machine';
import { MachineService } from './machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Machines';

  filterButton = [ 
    { status: 0, filtered: false},
    { status: 1, filtered: false},
    { status: 2, filtered: false},
    { status: 3, filtered: false}
  ];

  filteredList = [];

  constructor( private _machineService: MachineService) { }

  machinesList: Machine[] = []; 
  filteredMachinesList: Machine[] = []; 
  errorMessage: any = '';

  ngOnInit() {
    this.getMachines();
   // this.filteredMachinesList = this.machinesList;
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


  getAcceptableCount() {
    return this.machinesList.filter( x => x.status === 0).length;
  }
  getMonitorCount() {
    return this.machinesList.filter( x => x.status === 1).length;
  }
  getAlarmCount() {
    return this.machinesList.filter( x => x.status === 2).length;
  }
  getDangerCount() {
    return this.machinesList.filter( x => x.status === 3).length;
  }
  getNoStatusCount() {
    return this.machinesList.filter( x => x.status === 4).length;
  }


  filterData(number) {
    this.filterButton.find(x => x.status === number).filtered = true;

    console.log('filter' ,this.filterButton);

    
    debugger;
    this.filteredList.push(this.filterButton.includes( x => x.filtered === true).status);
    console.log('filteredList' ,this.filteredList);

    // this.filteredMachinesList = this.machinesList.filter(

    //     machine => filteredList.includes(machine.status)
    //   );

    console.log(this.filteredMachinesList);
  }
}
