import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BookedScreen: FC = () => {
    return (
        <View style={styles.center}>
            <Text>BookedScreen</Text>
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

export default BookedScreen;
