import React, { useContext, useState } from 'react'

import HandOfAClock from '../HandOfAClock/HandOfAClock'
import Line from '../Line/Line'
import Number from '../Number/Number'
import { StoreContext } from '../store/StoreProvider'
import bemCssModules from 'bem-css-modules'
import { default as faceStyles } from './Face.module.scss'
import { useEffect } from 'react'

const style = bemCssModules(faceStyles)

const Face = () => {

    const { clockSettings: { indicatorType } } = useContext(StoreContext)
    const [indicatorElements, setIndicatorElements] = useState(null)

    useEffect(() => {
        switch (indicatorType) {
            case 'numbers': {
                const numbers = Array.from({ length: 12 }, (_, index) => {
                    return <Number key={index} number={index + 1} />
                })
                setIndicatorElements(numbers)
                break;
            }
            case 'lines': {
                const numbers = Array.from({ length: 12 }, (_, index) => {
                    return <Line key={index} isPrimary={(index + 1) % 3 == 0} number={index + 1} />
                })
                setIndicatorElements(numbers)
                break;
            }
            default: {
                break;
            }
        }
    }, [])



    return (
        <div className={style()}>
            {indicatorElements}
            <HandOfAClock type='hours' />
            <HandOfAClock type='minutes' />
            <HandOfAClock type='seconds' />
        </div>
    );
}

export default Face;