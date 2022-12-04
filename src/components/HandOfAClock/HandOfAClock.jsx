import React from 'react';
import { StoreContext } from '../store/StoreProvider';
import bemCssModules from 'bem-css-modules'
import { default as handofaclockStyles } from './HandOfAClock.module.scss'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const style = bemCssModules(handofaclockStyles)

const HandOfAClock = ({ type }) => {
    const [typeStyle, setTypeStyle] = useState(0)

    const [rotationAngle, setRotationAngle] = useState(0)

    const { secondsAngle, minutesAngle, hoursAngle } = useContext(StoreContext)

    useEffect(() => {
        switch (type) {
            case "seconds":
                setTypeStyle(style('seconds'));
                break;

            case "minutes":
                setTypeStyle(style('minutes'));
                break;

            case "hours":
                setTypeStyle(style('hours'));
                break;
        }
    }, [])

    useEffect(() => {
        switch (type) {
            case "seconds":
                setRotationAngle(secondsAngle)
                break;

            case "minutes":
                setRotationAngle(minutesAngle)
                break;

            case "hours":
                setRotationAngle(hoursAngle)
                break;
        }
    }, [secondsAngle, minutesAngle, hoursAngle])


    const { clockSettings: { handsColor } } = useContext(StoreContext);

    const rotationStyle = {
        transform: `rotate(${rotationAngle}deg)`,
        backgroundColor: handsColor
    }
    const settings = {
        backgroundColor: handsColor
    }

    return (
        <div className={style()}>
            <div className={typeStyle} style={rotationStyle}>
                <div className={style('topTip')} style={settings}></div>
                <div className={style('bottomTip')} style={settings}></div>
            </div>
        </div>
    );
}

export default HandOfAClock;