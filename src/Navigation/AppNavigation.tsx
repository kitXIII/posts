import React, { FC } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../Screens/MainScreen';
import PostScreen from '../Screens/PostScreen';
import CreateScreen from '../Screens/CreateScreen';
import BookedScreen from '../Screens/BookedScreen';
import AboutScreen from '../Screens/AboutScreen';

import { ROUTES } from '../routes';
import { THEME } from '../theme';

import type { StackScreenProps } from '@react-navigation/stack';

type StackParamList = {
    [ROUTES.MAIN]: undefined;
    [ROUTES.POST]: undefined;
    [ROUTES.CREATE]: undefined;
    [ROUTES.BOOKED]: undefined;
    [ROUTES.ABOUT]: undefined;
};

export type ScreenNavigationProps<RouteName extends keyof StackParamList = keyof StackParamList> = StackScreenProps<
    StackParamList,
    RouteName
>;

const Stack = createStackNavigator<StackParamList>();

const AppNavigation: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.MAIN}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE_COLOR
                    },
                    headerTintColor: Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR
                }}
            >
                <Stack.Screen name={ROUTES.MAIN} component={MainScreen} options={{ title: 'My blog' }} />
                <Stack.Screen name={ROUTES.POST} component={PostScreen} options={{ title: 'Post 42' }} />
                <Stack.Screen name={ROUTES.CREATE} component={CreateScreen} />
                <Stack.Screen name={ROUTES.BOOKED} component={BookedScreen} />
                <Stack.Screen name={ROUTES.ABOUT} component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
