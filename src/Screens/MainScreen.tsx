import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainScreen: FC = () => {
    return (
        <View style={styles.center}>
            <Text>MainScreen</Text>
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
