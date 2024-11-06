import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { socket } from '@/utils/socket';

const ASCII_OF_A = 65



export default function PlaneSeat(
    {
        row,
        column,
        spacing,
        starting_column_number,
        rowproblems,
        selectedProblem,
        selectedProblemMethod,
        hidden = false
    }: {
        row: number,
        column: number,
        spacing: number,
        starting_column_number: number,
        rowproblems: any,
        selectedProblem: any,
        selectedProblemMethod: any,
        hidden: boolean
    }) {
    
    const [width, setWidth] = useState(Dimensions.get("window").width * 0.05);
    

        
    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        'change',
        ({window, screen}) => {
            setWidth(window.width * 0.1);
        },
        );
        return () => subscription?.remove();
    });

    const columnLabel = String.fromCharCode(ASCII_OF_A + column + starting_column_number - 2);

    const seatProblems = (rowproblems != undefined) && (columnLabel in rowproblems) ? rowproblems[columnLabel] : [];
    
    return (
        <>{
            hidden ?
            <View style={[styles.seat_bounding_box, {marginLeft: spacing, width: width}]}></View>
            : <TouchableOpacity
                style={[styles.seat_bounding_box, styles.seat, {
                    marginLeft: spacing,
                    width: width,
                    backgroundColor: seatProblems?.color ?? "#333"
                }]}
                onPress={
                    () => {
                        // Handle seat press event
                        console.log(`Seat at row ${row}, column ${columnLabel} pressed.`);
                        // Perform additional actions here...

                        socket.emit(selectedProblemMethod + "_passenger_problem_flag", {
                            flightid: "1",
                            seatid: [row, columnLabel],    
                            flag: selectedProblem
                        })
                        console.log("done")
                    }
                }
                >
                {
                    row > 1 ? <></> : <Text style={styles.column_label}>
                        {columnLabel}
                    </Text>
                }
            </TouchableOpacity>
        }
        </>
    )
}

const styles = StyleSheet.create({
    seat_bounding_box: {
        aspectRatio: 1,
        minWidth: 25,
        minHeight: 25,
        maxWidth: 50,
        maxHeight: 50
    },
    seat: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5
    },
    column_label: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    }
})