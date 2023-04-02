import React from 'react';
import { About } from './About';
import { Bottomcontainer } from './Bottomcontainer';
import { Insider } from './Insider';
import { Topcontainer } from './Topcontainer';

export function Home(){
    document.title = "Mukularanayam|Home"
    return(
        <>
        <Topcontainer/>
        <Insider/>
        <Bottomcontainer/>
        <About/>
        </>
    )
}