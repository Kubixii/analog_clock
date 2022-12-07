import React from 'react'
import { StoreContext } from '../store/StoreProvider'
import bemCssModules from 'bem-css-modules'
import { default as numberStyles } from './Number.module.scss'
import { useContext } from 'react'

const style = bemCssModules(numberStyles)

const Number = ({ number }) => {

    const rotation = {
        transform: `rotate(${number * 30}deg)`,
        transformOrigin: 'bottom'
    }

    const { clockSettings: { numbersColor, numbersShadow, numbersShadowColor }, numbersFontSize } = useContext(StoreContext);

    const settings = {
        transform: `rotate(-${number * 30}deg)`,
        color: numbersColor,
        textShadow: !numbersShadow ? null : `0px 0px 10px ${numbersShadowColor}`,
        fontSize: `${numbersFontSize}rem`
    }

    return (
        <div className={style()}>
            <div className={style('numberRadius')} style={rotation}>
                <p style={settings}>
                    {number}
                </p>
            </div>
        </div>
    );
}

export default Number;