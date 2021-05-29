import React, { FC } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { THEME } from '../theme';

import type { PostType } from '../types';

type Props = {
    post: PostType
}

const Post: FC<Props> = ({ post }: Props) => {
    return (
        <View style={styles.post}>
            <ImageBackground style={styles.image} source={{ uri: post.img }}>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: THEME.COLOR_BLACK_OPACITY,
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: THEME.COLOR_WHITE,
        fontFamily: THEME.FONT_REGULAR
    }
});

export default Post;
