import { PlaneMap } from "./PlaneMap";

export interface PlaneData {
    planeId: number;
    planeType: string;
    planeStatus: 'on time' | 'delayed' | 'canceled';
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    duration: string;
    planeMap: PlaneMap;
}