import React from 'react'
import HeaderSlider from '../../components/header/slider'
import  ActivityPage from "../../components/mainPages/activity";


export default function Activity() {
    return (
        <div classNames="wrapper">
          <HeaderSlider />
          <ActivityPage />
        </div>
    )
}
