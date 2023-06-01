// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Привет!!! Проверка работы эмуляции)))</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";

const COURSES = [
  {
    id: "1",
    title: "HTML",
  },
  {
    id: "2",
    title: "JavaScript",
  },
  {
    id: "3",
    title: "React",
  },
  {
    id: "4",
    title: "React Native",
  },
];

export default function App() {
  const [courses, setCourses] = useState(COURSES);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {courses.map((course) => (
          <Text key={course.id}>{course.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
