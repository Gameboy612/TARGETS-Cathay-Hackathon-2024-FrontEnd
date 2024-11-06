import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ui/ThemedView'
import { ThemedText } from '@/components/ui/ThemedText'
import TextInputWithIcon from '@/components/form/TextInputWithIcon'
import { ThemedButton } from '@/components/ui/ThemedButton'
import { Link, useNavigation } from 'expo-router'
import PlaneSeatsContainer from './PlaneSeatsContainer'
import { FIREBASE_AUTH } from '@/utils/FirebaseConfig'
import { signOut } from 'firebase/auth'
import useSignIn from '@/hooks/useSignIn'
import PlaneLayout from './layout/PlaneLayout'
import { PlaneMap } from './struct/PlaneMap'
import { socket } from '@/utils/socket'
import { GetAPI } from '@/utils/api'
import {Picker} from '@react-native-picker/picker';


const _planemap: PlaneMap = {
  data: [
    {
      type: 'ConstantSeatsTile',
      rows: 32,
      columns: 6,
      default_row_spacing: 0,
      default_column_spacing: 0,
  
      starting_row_number: 1,
      starting_column_number: 1,
  
      /**
       * Custom spacing for rows.
       * 
       * Example: {index: 3, spacing: 10} adds 10 pixels of spacing on the left of index 3.
       */
      custom_row_spacing: [
        {index: 12, spacing: 30},
        {index: 13, spacing: 30},
      ],
      
      /**
       * Custom spacing for columns.
       * 
       * Example: {index: 10, spacing: 20} adds 10 pixels of spacing on the top of index 20.
       */
      custom_column_spacing: [
        {index: 4, spacing: 40},
      ],
  
      /**
       * Remove seats which are in the list.
       */
      removed_seat_ids: [
        {row: 32, column: 1},
        {row: 32, column: 4},
        {row: 32, column: 5},
        {row: 32, column: 6},
      ],
  
      /**
       * Seats with special properties.
       */
      special_seats: [],
    }
  ]
}

const _SeatProblems = {
  "1": {
    "A": {"color": "#394", "problems": [], "passenger": {"name": "Tommy", "orders": []}},
    "B": {"color": "yellow", "problems": ["Seatbelt"], "passenger": {"name": "John", "orders": []}},
    "C": {"color": "#394", "problems": [], "passenger": {"name": "Mark", "orders": []}},
    "D": {"color": "#394", "problems": [], "passenger": {"name": "Henry", "orders": []}},
    "E": {"color": "yellow", "problems": ["Table"], "passenger": {"name": "Betty", "orders": []}},
    "F": {"color": "yellow", "problems": ["Table", "SeatUpright"], "passenger": {"name": "Larry", "orders": []}}
  },
  "2": {
    "A": {"color": "#394", "problems": [], "passenger": {"name": "Tommy", "orders": []}},
    "B": {"color": "yellow", "problems": ["Seatbelt"], "passenger": {"name": "John", "orders": []}},
    "C": {"color": "yellow", "problems": ["Seatbelt"], "passenger": {"name": "Mark", "orders": []}},
    "D": {"color": "#394", "problems": [], "passenger": {"name": "Henry", "orders": []}},
    "E": {"color": "yellow", "problems": ["Table"], "passenger": {"name": "Betty", "orders": []}},
    "F": {"color": "yellow", "problems": ["Table", "SeatUpright"], "passenger": {"name": "Larry", "orders": []}}
  },
}


export function PlaneSeatsScreen() {

  const [planeMap, setPlaneMap] = useState(_planemap);
  const [seatProblems, setSeatProblems] = useState(_SeatProblems);

  const onUpdateFlight = (data: any) => {
    console.log(data);
    if (data["path"][0] == "passengerDetails") {
      const p1 = data["path"][1];
      const p2 = data["path"][2];
      setSeatProblems((e) => {
        const x = JSON.parse(JSON.stringify(e))
        x[p1][p2] = data["data"];
        return x;
      })
    }
  }

  useEffect(() => {
    socket.emit("join_flightroom", "1")
    GetAPI("/get_flight/1").then(
      (res) => {
        console.log(res);
        setSeatProblems(res["data"]["flight"]["passengerDetails"]);
        socket.on('update_flight', onUpdateFlight)
      }
    )


    return () => {
      socket.off('update_flight', onUpdateFlight)
    };
  }, [])

  const [selectedProblem, setSelectedProblem] = useState("Seatbelt");
  const [selectedProblemMethod, setSelectedProblemMethod] = useState("add");


  return (
    <PlaneSeatsContainer
      viewProps={{ style: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 20,
      }
      }}
      textProps={{type: "title"}}
      title={"Airbus A321"}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: 'center',
        }}
      >
        <PlaneLayout
          planeMap={planeMap}
          seatproblems={seatProblems}
          selectedProblem={selectedProblem}
          selectedProblemMethod={selectedProblemMethod}
        />

        <View
          style={{
            position: 'absolute',
            right: 10,
            bottom: 10
          }}
        >
          <Picker
            selectedValue={selectedProblem}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedProblem(itemValue)
            }>
            <Picker.Item label="Seatbelt" value="Seatbelt" />
            <Picker.Item label="TrayOpened" value="TrayOpened" />
            <Picker.Item label="SeatInclined" value="SeatInclined" />
            <Picker.Item label="LuggageMisplaced" value="LuggageMisplaced" />
            <Picker.Item label="AssistanceRequired" value="AssistanceRequired" />
            <Picker.Item label="BodyTemperatureAnomaly" value="BodyTemperatureAnomaly" />
          </Picker>
          <Picker
            selectedValue={selectedProblemMethod}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedProblemMethod(itemValue)
            }>
            <Picker.Item label="Add" value="add" />
            <Picker.Item label="Remove" value="remove" />
          </Picker>
        </View>
      </View>
    </PlaneSeatsContainer>
  )
}