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

  constructor( private _machineService: MachineService) { }

  machinesList: Machine[] = []; 
  errorMessage: any = '';

  ngOnInit() {
    this.getMachines();
  }

  getMachines() {
    this._machineService.getData()
      .subscribe(
            machines => this.machinesList = machines,
            error => this.errorMessage = <any>error
      );
  }
}
