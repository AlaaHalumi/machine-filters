import { Component, Input, OnInit } from '@angular/core';
import { Machine } from '../machine';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  @Input() data: Machine;

  constructor() { }

  ngOnInit() {
  }

}
