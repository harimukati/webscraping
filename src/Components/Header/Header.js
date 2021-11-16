import React from 'react';
import './Header.css'

const Header = () => {
    return <>
        <div className='header'>
            <div className='left-header-items'>
                <div className='navigator'>
                    Teesta
                </div>
                <div className='navigator'>
                    Exchange
                </div>
                <div className='navigator'>
                    P2P
                </div>
                <div className='navigator'>
                    OTC Desk
                </div>
                <div className='active-navigator'>
                    Fund
                </div>
            </div>
            <div>
                <div className='right-navigator'>
                    Invite & Earn Fee
                </div>
            </div>
        </div>
    </>
}

export default Header;