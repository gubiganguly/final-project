import React, { useState, useEffect } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import Experience from './experience/experience'
import About from './about/about'
import IntroCard from './intro-card/intro-card'
import Education from './education/education'
import Skills from './skills/skills'


const ProfessionalInfo = ({profile}) => {

    
    return ( 
        <>

                <div className='list-group'>
                    <IntroCard profile={profile} />

                    <About profile={profile} />

                    <Experience profile={profile} />

                    <Skills profile={profile} />
                </div>
      
        </>
    )
}

export default ProfessionalInfo

