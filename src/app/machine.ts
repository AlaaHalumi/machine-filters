export interface Machine {
    id: number;
    title: string;
    body: string;
    status: MachineStatus;
}

export enum MachineStatus {
    acceptable = 0,
    monitor = 1,
    alarm = 2,
    danger = 3,
    NoStatus= 4
}