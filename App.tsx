import React, { FC, useState } from 'react';
import AppLoading from 'expo-app-loading';

import bootstrap from './src/bootstrap';
import AppNavigation from './src/Navigation/AppNavigation';

const App: FC = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap} onError={console.log} onFinish={() => setIsReady(true)} />;
    }

    return (
        <AppNavigation />
    );
};

export default App;
