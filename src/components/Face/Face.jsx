import HandOfAClock from '../HandOfAClock/HandOfAClock'
import Number from '../Number/Number'
import React from 'react'
import bemCssModules from 'bem-css-modules'
import { default as faceStyles } from './Face.module.scss'

const style = bemCssModules(faceStyles)

const Face = () => {
    const numbers = Array.from({ length: 12 }, (_, index) => {
        return <Number key={index} number={index + 1} />
    })
    return (
        <div className={style()}>
            {numbers}
            <HandOfAClock type='hours' />
            <HandOfAClock type='minutes' />
            <HandOfAClock type='seconds' />
        </div>
    );
}

export default Face;