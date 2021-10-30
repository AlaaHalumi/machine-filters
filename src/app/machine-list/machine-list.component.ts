import { Component, Input, OnInit } from '@angular/core';
import { Machine } from '../core/models/machine';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {

  @Input() dataList: Machine[] = []; 

  constructor() { }

  ngOnInit() {
  }

}
