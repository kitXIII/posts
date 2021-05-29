import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ROUTES } from '../routes';
import type { ScreenNavigationProps } from '../Navigation/AppNavigation';

type Props = ScreenNavigationProps<ROUTES.POST>;

const PostScreen: FC<Props> = ({ route }: Props) => {
    const { postId } = route.params;
    return (
        <View style={styles.center}>
            <Text>{postId}</Text>
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
