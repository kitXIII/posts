import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen: FC = () => {
    return (
        <View style={styles.center}>
            <Text>AboutScreen</Text>
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

export default AboutScreen;
