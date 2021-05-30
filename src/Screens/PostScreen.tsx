import React, { FC } from 'react';
import { View, StyleSheet, Image, Text, Button, ScrollView, Alert } from 'react-native';

import { ROUTES } from '../routes';
import { THEME } from '../theme';
import { DATA } from '../data';

import type { ScreenNavigationProps } from '../Navigation/AppNavigation';

type Props = ScreenNavigationProps<ROUTES.POST>;

const PostScreen: FC<Props> = ({ route }: Props) => {
    const { postId } = route.params;
    const post = DATA.find((p) => p.id === postId);

    const removeHandler = () =>
        Alert.alert(
            'Post deletion',
            'Are you sure?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => console.log('Delete Pressed') }
            ],
            { cancelable: false }
        );
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: post?.img }} />
            <View style={styles.textWrap}>
                <Text style={styles.text}>{post?.text}</Text>
            </View>
            <Button title='Delete' color={THEME.COLOR_DANGER} onPress={removeHandler} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    text: {
        fontFamily: THEME.FONT_REGULAR
    }
});

export default PostScreen;
