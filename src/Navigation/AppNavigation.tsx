import React, { FC } from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MainScreen from '../Screens/MainScreen';
import PostScreen from '../Screens/PostScreen';
// import CreateScreen from '../Screens/CreateScreen';
import BookedScreen from '../Screens/BookedScreen';
// import AboutScreen from '../Screens/AboutScreen';

import AppHeaderIcon from '../Components/AppHeaderIcon';

import { ROUTES } from '../routes';
import { THEME } from '../theme';

import type { StackScreenProps } from '@react-navigation/stack';
import type { PostType } from '../types';

type StackParamList = {
    [ROUTES.MAIN]: undefined;
    [ROUTES.BOOKED]: undefined;
    [ROUTES.POST]: {
        postId: PostType['id'];
        date: PostType['date'];
        booked: PostType['booked'];
    };
    [ROUTES.CREATE]: undefined;
    [ROUTES.ABOUT]: undefined;
};

type TabParamList = {
    [ROUTES.MAIN_SCREEN]: undefined;
    [ROUTES.BOOKED_SCREEN]: undefined;
};

export type ScreenNavigationProps<RouteName extends keyof StackParamList = keyof StackParamList> = StackScreenProps<
    StackParamList,
    RouteName
>;

const commonScreenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.COLOR_MAIN : THEME.COLOR_WHITE
    },
    headerTintColor: Platform.OS === 'android' ? THEME.COLOR_WHITE : THEME.COLOR_MAIN
};

const postScreenOptions = ({ route }: ScreenNavigationProps<ROUTES.POST>): StackNavigationOptions => {
    const date = new Date(route.params.date).toLocaleDateString();
    const starIconName = route.params.booked ? 'ios-star' : 'ios-star-outline';
    return {
        title: `Post dated ${date}`,
        // eslint-disable-next-line react/display-name
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Favorite' iconName={starIconName} onPress={() => console.log('Press favorite')} />
            </HeaderButtons>
        )
    };
};

const BookedStack = createStackNavigator<StackParamList>();
const BookedNavigator = () => (
    <BookedStack.Navigator initialRouteName={ROUTES.BOOKED} screenOptions={commonScreenOptions}>
        <BookedStack.Screen name={ROUTES.BOOKED} component={BookedScreen} />
        <BookedStack.Screen name={ROUTES.POST} component={PostScreen} options={postScreenOptions} />
    </BookedStack.Navigator>
);

const MainStack = createStackNavigator<StackParamList>();
const MainNavigator = () => (
    <MainStack.Navigator initialRouteName={ROUTES.MAIN} screenOptions={commonScreenOptions}>
        <MainStack.Screen
            name={ROUTES.MAIN}
            component={MainScreen}
            options={{
                title: 'My blog',
                // eslint-disable-next-line react/display-name
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title='Take photo' iconName='ios-camera' onPress={() => console.log('Press photo')} />
                    </HeaderButtons>
                ),
                // eslint-disable-next-line react/display-name
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title='Toggle drower' iconName='ios-menu' onPress={() => console.log('Press menu')} />
                    </HeaderButtons>
                )
            }}
        />
        <MainStack.Screen name={ROUTES.POST} component={PostScreen} options={postScreenOptions} />
        {/* <Stack.Screen name={ROUTES.CREATE} component={CreateScreen} />
        <Stack.Screen name={ROUTES.ABOUT} component={AboutScreen} /> */}
    </MainStack.Navigator>
);

type tabBarIconPropType = {
    focused: boolean;
    color: string;
    size: number;
};

const BottomTab = createBottomTabNavigator<TabParamList>();
const BottomTabNavigator = () => (
    <BottomTab.Navigator
        screenOptions={{
            tabBarActiveTintColor: THEME.COLOR_MAIN
        }}
    >
        <BottomTab.Screen
            name={ROUTES.MAIN_SCREEN}
            component={MainNavigator}
            options={{
                title: 'Main',
                headerShown: false,
                // eslint-disable-next-line react/display-name
                tabBarIcon: ({ color }: tabBarIconPropType) => <Ionicons name='ios-albums' size={25} color={color} />
            }}
        />
        <BottomTab.Screen
            name={ROUTES.BOOKED_SCREEN}
            component={BookedNavigator}
            options={{
                title: 'Favorites',
                headerShown: false,
                // eslint-disable-next-line react/display-name
                tabBarIcon: ({ color }: tabBarIconPropType) => <Ionicons name='ios-star' size={25} color={color} />
            }}
        />
    </BottomTab.Navigator>
);

const AppNavigation: FC = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigation;
