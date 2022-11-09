import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import Experience from './experience'
import About from './about'
import IntroCard from './intro-card'
import Education from './education'

const ProfessionalInfo = () => {

    const profile = useSelector(state => state.currentUser)

    return (
        <div className='list-group'>
            <IntroCard profile={profile} />

            <About profile={profile} />

            <Experience profile={profile} />

            <Education profile={profile} />

            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <h1>Skills</h1>
            </div>

            <div className='list-group-item rounded-2 shadow-sm mt-1'>
                <h1>Awards</h1>
            </div>
        </div>
    )
}

export default ProfessionalInfo

