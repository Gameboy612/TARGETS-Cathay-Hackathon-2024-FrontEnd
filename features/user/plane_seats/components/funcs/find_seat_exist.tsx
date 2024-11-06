import { SeatID, Spacing } from "../struct/PlaneMap";

export default function does_seat_exist(
    rowIndex: number,
    columnIndex: number,
    seatIds: SeatID[]
): boolean {
    for (let i = 0; i < seatIds.length; i++) {
        if (seatIds[i].row === rowIndex && seatIds[i].column === columnIndex) {
            return true;
        }
    }
    return false;
}