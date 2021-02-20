import React from 'react'
import { NavLink } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES  = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        
        const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

        return (
            <NavLink to="/sign-up" className="btn-mobile">
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </NavLink>
        )
    }