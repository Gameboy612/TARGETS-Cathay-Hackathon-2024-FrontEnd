import { View, StyleSheet } from 'react-native'
import React from 'react'
import PlaneSeat from './PlaneSeat'
import { ConstantSeatsTile } from '../struct/PlaneMap'
import get_spacing from '../funcs/get_spacing'
import { ThemedText } from '@/components/ui/ThemedText'
import find_seat_exist from '../funcs/find_seat_exist'

export default function PlaneRow(
    {
        row,
        constantseatstile,
        rowproblems,
        selectedProblem,
        selectedProblemMethod
    }:
    {
        row: number,
        constantseatstile: ConstantSeatsTile,
        rowproblems: any,
        selectedProblem: any,
        selectedProblemMethod: any
    }
) {
  return (
    <View style={{
        flexDirection: 'row'
    }}>
        <View style={styles.rownumber_box}>
            <ThemedText style={styles.rownumber}>{row}</ThemedText>
        </View>
        {
            Array.from({ length: constantseatstile.columns }, (_, i) => i + 1).map((columnid) =>
                {
                    const default_column_spacing = constantseatstile.default_column_spacing;
                    const custom_column_spacing = constantseatstile.custom_column_spacing
                    
                    const starting_column_number = constantseatstile.starting_column_number;

                    return <PlaneSeat key={columnid} row={row} column={columnid} spacing={get_spacing(
                        columnid,
                        custom_column_spacing,
                        default_column_spacing
                    )}
                    starting_column_number={starting_column_number}
                    hidden={
                        find_seat_exist(
                            row,
                            columnid,
                            constantseatstile.removed_seat_ids
                        )
                    }
                    rowproblems={rowproblems}
                    selectedProblem={selectedProblem}
                    selectedProblemMethod={selectedProblemMethod}
                    />
                }
            )
        }
    </View>
  )
}

const styles = StyleSheet.create({
    rownumber_box: {
        width: 40
    },
    rownumber: {
        width: 40,
        paddingRight: 12,
        textAlign: 'right'
    }
})