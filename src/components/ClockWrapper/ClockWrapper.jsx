import Face from '../Face/Face'
import React from 'react';
import { StoreContext } from '../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import { default as clockwrapperStyles } from './ClockWrapper.module.scss'
import { useContext } from 'react';

const style = bemCssModules(clockwrapperStyles)

const ClockWrapper = () => {

    const { clockSettings: { backgroundColor, border, borderColor } } = useContext(StoreContext);
    const settings = {
        backgroundColor,
        border: !border ? null : `solid ${borderColor} 2px`
    }

    return (
        <div className={style()} style={settings}>
            <Face />
        </div>
    );
}

export default ClockWrapper;