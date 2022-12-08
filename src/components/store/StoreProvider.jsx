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
        const data = new Date();
        const timeArray = data.toLocaleString().split(',')[1].slice(1,).split(":");
        const secondsInAHalfDay = 12 * 60 * 60;
        const secondsInAnHour = 60 * 60;
        const secondsInAminute = 60
        const currentSecondsHour = parseInt(timeArray[0]) * 24 * 60 + parseInt(timeArray[1]) * 60 + parseInt(timeArray[2]) + 60 * 60;
        const currentSecondsMinute = parseInt(timeArray[1]) * 60 + parseInt(timeArray[2]);
        const currentSeconds = parseInt(timeArray[2]);

        const hourPercent = (currentSecondsHour / secondsInAHalfDay).toPrecision(3)
        const minutesPercent = (currentSecondsMinute / secondsInAnHour).toPrecision(3)
        const secondsPercent = (currentSeconds / secondsInAminute).toPrecision(3)

        setSecondsAngle(Math.ceil(360 * secondsPercent));
        setMinutesAngle(Math.ceil(360 * minutesPercent))
        sethoursAngle(Math.ceil(360 * hourPercent))
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