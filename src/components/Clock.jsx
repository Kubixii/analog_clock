import ClockWrapper from './ClockWrapper/ClockWrapper';
import React from 'react';
import StoreProvider from './store/StoreProvider';

const Clock = ({ clockSettings }) => {
    return (
        <StoreProvider settings={clockSettings}>
            <ClockWrapper />
        </StoreProvider>
    );
}

export default Clock;