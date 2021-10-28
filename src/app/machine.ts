export interface Machine {
    id: number;
    title: string;
    body: string;
    status: MachineStatus;
}

export enum MachineStatus {
    Acceptable = 0,
    Monitor = 1,
    Alarm = 2,
    Danger = 3,
    'No Status'= 4
}