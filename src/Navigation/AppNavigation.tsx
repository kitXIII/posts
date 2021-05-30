import React, { FC } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MainScreen from '../Screens/MainScreen';
import PostScreen from '../Screens/PostScreen';
import CreateScreen from '../Screens/CreateScreen';
import BookedScreen from '../Screens/BookedScreen';
import AboutScreen from '../Screens/AboutScreen';

import AppHeaderIcon from '../Components/AppHeaderIcon';

import { ROUTES } from '../routes';
import { THEME } from '../theme';

import type { StackScreenProps } from '@react-navigation/stack';
import type { PostType } from '../types';

type StackParamList = {
    [ROUTES.MAIN]: undefined;
    [ROUTES.POST]: {
        postId: PostType['id'];
        date: PostType['date'];
        booked: PostType['booked'];
    };
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
                        backgroundColor: Platform.OS === 'android' ? THEME.COLOR_MAIN : THEME.COLOR_WHITE
                    },
                    headerTintColor: Platform.OS === 'android' ? THEME.COLOR_WHITE : THEME.COLOR_MAIN
                }}
            >
                <Stack.Screen
                    name={ROUTES.MAIN}
                    component={MainScreen}
                    options={{
                        title: 'My blog',
                        // eslint-disable-next-line react/display-name
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Take photo'
                                    iconName='ios-camera'
                                    onPress={() => console.log('Press photo')}
                                />
                            </HeaderButtons>
                        ),
                        // eslint-disable-next-line react/display-name
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Toggle drower'
                                    iconName='ios-menu'
                                    onPress={() => console.log('Press menu')}
                                />
                            </HeaderButtons>
                        )
                    }}
                />
                <Stack.Screen
                    name={ROUTES.POST}
                    component={PostScreen}
                    options={({ route }) => {
                        const date = new Date(route.params.date).toLocaleDateString();
                        const starIconName = route.params.booked ? 'ios-star' : 'ios-star-outline';
                        return {
                            title: `Post dated ${date}`,
                            // eslint-disable-next-line react/display-name
                            headerRight: () => (
                                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                    <Item
                                        title='Favorite'
                                        iconName={starIconName}
                                        onPress={() => console.log('Press favorite')}
                                    />
                                </HeaderButtons>
                            )
                        };
                    }}
                />
                <Stack.Screen name={ROUTES.CREATE} component={CreateScreen} />
                <Stack.Screen name={ROUTES.BOOKED} component={BookedScreen} />
                <Stack.Screen name={ROUTES.ABOUT} component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
