import { MachineStatus } from "./machine-status";

export interface FilterButton {
    status: MachineStatus;
    filtered: boolean;
}