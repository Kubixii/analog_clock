import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as clockwrapperStyles } from '../ClockWrapper/ClockWrapper.module.scss'
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const style = bemCssModules(clockwrapperStyles)
export const StoreContext = createContext(null)

const defaultSettings = {
    backgroundColor: 'transparent',
    border: true,
    borderColor: 'black',
    numbersColor: 'white',
    numbersShadow: true,
    numbersShadowColor: 'black',
    lineColor: 'black',
    lineThicness: '2px',
    lineShadow: true,
    lineShadowColor: 'black',
    indicatorType: 'numbers',
    handsColor: 'black'
}

const StoreProvider = ({ children, settings }) => {

    const [secondsAngle, setSecondsAngle] = useState(0)
    const [minutesAngle, setMinutesAngle] = useState(0)
    const [hoursAngle, sethoursAngle] = useState(0)

    const [numbersFontSize, setNumbersFontSize] = useState(100)

    const clockSettings = { ...defaultSettings, ...settings, }

    const updateAngles = () => {
        const time = new Date();

        const secondsDegrees = (time.getSeconds() / 60) * 360;
        const minutesDegrees = (time.getMinutes() / 60) * 360;
        const hoursDegrees = ((time.getHours() % 12) / 12) * 360;
        const hourHandDegrees = hoursDegrees + (minutesDegrees / 12);

        setSecondsAngle(secondsDegrees)
        setMinutesAngle(minutesDegrees)
        sethoursAngle(hourHandDegrees)
    }

    useEffect(() => {
        setInterval(updateAngles, 500);
        const test = document.getElementsByClassName(style())[0]
        const body = document.body;
        const scale = (test.clientWidth / body.clientWidth) * 10;
        setNumbersFontSize(scale)
        return () => {
            clearInterval(updateAngles)
        }
    }, [])



    return (
        <StoreContext.Provider value={{
            secondsAngle,
            minutesAngle,
            hoursAngle,
            clockSettings,
            numbersFontSize
        }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;