import * as React from 'react';
import './index.css'

import arrow from './assets/icons/arrow.svg'
import arrow_white from './assets/icons/arrow_white.svg'

type ButtonProps = {
    children: React.ReactNode;
    forwardArrowVariant?: "white" | "blue";
}
export function Button({children, forwardArrowVariant}:ButtonProps) {
    return (
        <button>{children}</button>

    )
}