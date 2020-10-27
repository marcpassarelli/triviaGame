import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Quiz from './src/screens/Quiz';
import Results from './src/screens/Results';
import QuestionsProvider from './src/contexts/QuestionsContext';
import QuizInfoProvider from './src/contexts/QuizInfoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <QuizInfoProvider>
      <QuestionsProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Results" component={Results} />
          </Stack.Navigator>
        </NavigationContainer>
      </QuestionsProvider>
    </QuizInfoProvider>
  );
}
