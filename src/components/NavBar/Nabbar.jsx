import React from "react";

import { NavBar } from 'antd-mobile'

import {

    useHistory

} from 'react-router-dom'

import './style.scss'

const NavBarCom = ({
    title = ''
}) => {

    const route = useHistory()

    const onBack = () => {
        console.log(route);
        route.goBack()
    }

    return (
        <NavBar onBack={onBack} >{title}</NavBar>
    )
}


export default NavBarCom