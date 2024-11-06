export interface Spacing {
    index: number;
    spacing: number;
}

export interface SeatID {
    row: number;
    column: number;
}

enum SeatType {
    Economy,
    PremiumEconomy,
    Business,
    FirstClass
}

interface SeatProperty {
    id: SeatID;
    seattype: SeatType
}

interface MapTile {
    type: string;
}


/**
 * This formation is used for seats which are 
 */
export interface ConstantSeatsTile extends MapTile {
    type: 'ConstantSeatsTile';
    rows: number;
    columns: number;

    default_row_spacing: number;
    default_column_spacing: number;

    starting_row_number: number;
    starting_column_number: number;

    /**
     * Custom spacing for rows.
     * 
     * Example: {index: 3, spacing: 10} adds 10 pixels of spacing on the left of index 3.
     */
    custom_row_spacing: Spacing[];
    
    /**
     * Custom spacing for columns.
     * 
     * Example: {index: 10, spacing: 20} adds 10 pixels of spacing on the top of index 20.
     */
    custom_column_spacing: Spacing[];

    /**
     * Remove seats which are in the list.
     */
    removed_seat_ids: SeatID[];

    /**
     * Seats with special properties.
     */
    special_seats: SeatProperty[];
}


export interface PlaneMap {
    data: (MapTile | ConstantSeatsTile)[]
}