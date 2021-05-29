import React, { FC } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { ROUTES } from '../routes';

import type { ScreenNavigationProps } from '../Navigation/AppNavigation';


type Props = ScreenNavigationProps<ROUTES.MAIN>;

const MainScreen: FC<Props> = ({ navigation }: Props) => {
    const goToPost = () => navigation.navigate(ROUTES.POST);

    return (
        <View style={styles.center}>
            <Text>MainScreen</Text>
            <Button title='Go to post' onPress={goToPost} />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MainScreen;
