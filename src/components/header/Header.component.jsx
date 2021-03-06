import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg.svg'

import './Header.component.style.scss'

function HeaderComponent() {
    return (
        <div className='header'>
            <Link className={'logo-container'} to={'/'} >
                <Logo className={'logo'}/>
            </Link>
            <div className={'options'}>
                <Link className={'option'} to={'/shop'}>
                    SHOP-NOW
                </Link>

                <Link className={'option'} to={'/shop'}>
                    CONTACT
                </Link>


            </div>
        </div>
    );
}

export default HeaderComponent;