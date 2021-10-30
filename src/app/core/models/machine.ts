import { MachineStatus } from "./machine-status";

export interface Machine {
    id: number;
    title: string;
    statusDetail: string;
    status: MachineStatus;
}