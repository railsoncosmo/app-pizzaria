import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes;