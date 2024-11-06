import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import PlaneRow from './PlaneRow'
import { ConstantSeatsTile, PlaneMap, Spacing } from '../struct/PlaneMap'
import get_spacing from '../funcs/get_spacing'


export default function PlaneLayout(
    {
        planeMap,
        seatproblems,
        selectedProblem, 
        selectedProblemMethod, 
    }: {
        planeMap: PlaneMap
        seatproblems: any,
        selectedProblem: any,
        selectedProblemMethod: any,
    }
) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.viewcontainer}>
        {
            planeMap.data.map((maptile, i) => {
                if (maptile.type === 'ConstantSeatsTile') {
                    const constantseatstile = maptile as ConstantSeatsTile;

                    const starting_row_number = constantseatstile.starting_row_number;
                    
                    const rows = constantseatstile.rows;
                    const columns = constantseatstile.columns;
                    


                    const default_row_spacing = constantseatstile.default_row_spacing;
                    const custom_row_spacing = constantseatstile.custom_row_spacing
                    

                    
                    return <View key={i}>
                    {
                        Array.from({ length: rows }, (_, i) => i + 1).map((j) =>
                            {   
                                const rowIndex = j + starting_row_number - 1;

                                return <View
                                    key={rowIndex}
                                    style={{
                                        marginBottom: get_spacing(
                                            rowIndex,
                                            custom_row_spacing,
                                            default_row_spacing
                                        )
                                    }}
                                    >
                                    <PlaneRow
                                        row={rowIndex}
                                        constantseatstile={constantseatstile}
                                        rowproblems={seatproblems[rowIndex.toString()]}
                                        selectedProblem={selectedProblem}
                                        selectedProblemMethod={selectedProblemMethod}
                                        />
                                </View>
                            }
                        )
                    }
                    </View>
        
                }
            })
        }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
    },
    viewcontainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    }
})