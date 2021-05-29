import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PostScreen: FC = () => {
    return (
        <View style={styles.center}>
            <Text>PostScreen</Text>
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

export default PostScreen;
