import React from 'react'
import './Header.css'

export default function Header(){
    return(
        <div className='--header-header-container'>
            <h1 className='--header-title'>Rawle Juglal</h1>
            <span className='--header-contact-info --header-phone'>1(405)740-9697</span>
            <span className='--header-contact-info --header-address'>1300 N MacArthur Blvd, Crescent, OK 73028</span>
            <span className='--header-contact-info --header-email'>rawledjuglal@gmail.com</span>
        </div>
    )
}