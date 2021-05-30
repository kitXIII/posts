import React, { FC } from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { THEME } from '../theme';

type Props = {
    title: string,
    iconName: string,
    onPress?: () => void
}

const AppHeaderIcon: FC<Props> = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={24}
            color={Platform.OS === 'android' ? THEME.COLOR_WHITE : THEME.COLOR_MAIN}
        />
    );
};

export default AppHeaderIcon;
