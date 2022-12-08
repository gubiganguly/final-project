import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import Experience from './experience/experience'
import About from './about/about'
import IntroCard from './intro-card/intro-card'
import Education from './education'
import Skills from './skills/skills'
import Awards from './awards'

const ProfessionalInfo = () => {

    const profile = useSelector(state => state.currentUser)


    return (
        <div className='list-group'>
            <IntroCard profile={profile} />

            <About profile={profile} />

            <Experience profile={profile} />

            <Education profile={profile} />

            <Skills profile={profile} />
        </div>
    )
}

export default ProfessionalInfo

