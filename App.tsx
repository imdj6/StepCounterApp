import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

const STEPS_GOAL = 10_000;

export default function App() {

  const [date, setDate] = useState(new Date());
  // const { steps, flights, distance } = useHealthData(date);

  const changeDate = (numDays:any) => {
    const currentDate = new Date(date); // Create a copy of the current date
    // Update the date by adding/subtracting the number of days
    currentDate.setDate(currentDate.getDate() + numDays);

    setDate(currentDate); // Update the state variable
  };

  return (
    <View className="bg-black flex-1 justify-center p-12">
      <View style={styles.datePicker}>
        <AntDesign
          onPress={() => changeDate(-1)}
          name="left"
          size={20}
          color="#C3FF53"
        />
        <Text style={styles.date}>{date.toDateString()}</Text>

        <AntDesign
          onPress={() => changeDate(1)}
          name="right"
          size={20}
          color="#C3FF53"
        />
      </View>
      <RingProgress radius={150} strokeWidth={50} progress={8600 / STEPS_GOAL} />
      <View className='flex-col space-y-6 mt-20'>
        <View className="flex-row  justify-between ">
          <Value label="Steps" value="8600" />
          <Value label="Distance" value="7.75 Km" />
        </View>
        <View
          style={{
            borderBottomColor: '#A9A9A9',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View>
          <Value label="Flights Climbed" value="4" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:30
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});