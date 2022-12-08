import React from 'react';
import { StoreContext } from '../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import { default as lineStyles } from './Line.module.scss'
import { useContext } from 'react';

const style = bemCssModules(lineStyles)
const Line = ({ isPrimary, number }) => {
    const rotation = {
        transform: `rotate(${number * 30}deg)`,
        transformOrigin: 'bottom'
    }

    const { clockSettings: { lineShadow, lineShadowColor, lineColor, lineThicness } } = useContext(StoreContext);

    const settings = {
        border: `solid ${lineColor} ${lineThicness}`,
        textShadow: !lineShadow ? null : `0px 0px 10px ${lineShadowColor}`,
        backgroundColor: lineColor,
        width: '100%',
        height: isPrimary ? '25%' : '10%',
        position: 'inherit',
    }

    return (
        <div className={style()}>
            <div className={style('lineRadius')} style={rotation}>
                <div style={settings} ></div>
            </div>
        </div>
    );
}

export default Line;