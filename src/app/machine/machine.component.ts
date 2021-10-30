import { Component, Input, OnInit } from '@angular/core';
import { Machine } from '../core/models/machine';
import { MachineStatus } from '../core/models/machine-status';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  @Input() data: Machine;

  MachineStatus: typeof MachineStatus = MachineStatus;

  constructor() { }

  ngOnInit() {
  }

}
