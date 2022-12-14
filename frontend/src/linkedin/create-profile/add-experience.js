import React from 'react'
import { useState } from 'react'
import ExperienceModal from './experience-modal'
import { Link } from 'react-router-dom'
import SkillModal from './skill-modal'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../services/users-thunks'

const AddExperience = ({loginInfo}) => {

  // Profile Card Stuff
  const [position, setPosition] = useState('')
  const [about, setAbout] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('United States')
 
 
  // Experience Stuff
  const [experience, setExperience] = useState([])
  const [experienceModal, setExperienceModal] = useState(false)
  const editExperienceHandler = () => {
    setExperienceModal(true)
  }
  const onCloseExperience = (data) => {
    const update = []
    for (let i = 0; i < experience.length; i++) {
      update.push(experience[i])
    }
    update.push(data)
    setExperience(update)
    setExperienceModal(false)
  }

  // Skills Stuff
  const [skills, setSkills] = useState([])
  const [skillModal, setSkillModal] = useState(false)
  const editSkillHandler = () => {
    setSkillModal(true)
  }
  const onCloseSkill = (data) => {
    const update = []
    for (let i = 0; i < skills.length; i++) {
      update.push(skills[i])
    }
    update.push(data)
    setSkills(update) // Push to skill ARRAY!!
    setSkillModal(false)
  }

  const dispatch = useDispatch()
  const registerUser = () => {
    let user = {
      ...loginInfo,
      position: position,
      about: about,
      city: city,
      state: state,
      country: country,
      experience: experience,
      skills: skills
    }
    dispatch(registerThunk(user))
  }

  return (
    <div className='container'>
      <h2 className='mt-3'>Tell us about yourself</h2>
      <div className='row mt-3'>
        <div className='col-3' />
        <div className='col-6 list-group shadow-sm' style={{ backgroundColor: "white" }}>

          <div className='row mt-3'>
            <div className='col'>
              <span className='col-2 float-start ms-2 fw-bold' style={{ fontSize: "15px" }}>Position:</span>
              <input className='border border-2 rounded-2 float-start mt-2 ms-4 ps-3'
                      style={{ height: "60px", width: "90%" }} 
                      placeholder="CEO of LinkedIn"
                      onChange={e => setPosition(e.target.value)} />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col'>
              <span className='col-2 float-start fw-bold' style={{ fontSize: "15px" }}>About:</span>
              <textarea className='ms-3 mt-2 rounded-2 border ps-3'
                        rows="6" cols="70" 
                        placeholder='You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.'
                        onChange={e => setAbout(e.target.value)} />
            </div>
          </div>

          <div className='row mt-3 mb-5'>
            <div className='col-4'>
              <span className='col-2 float-start ms-4  fw-bold' style={{ fontSize: "15px" }}>City:</span>
              <input className='border border-2 rounded-2 float-start mt-2 ms-3 ps-3'
                      style={{ height: "60px", width: "90%" }} 
                      placeholder="Boston"
                      onChange={e => setCity(e.target.value)} />
            </div>
            <div className='col-4'>
              <span className='col-2 float-start ms-4 fw-bold' style={{ fontSize: "15px" }}>State:</span>
              <select className='border border-2 float-start rounded-2 mt-2 ms-3 ps-3'
                      style={{ height: "60px", width: "90%" }}
                      placeholder="MA"
                      onChange={e => setState(e.target.value)}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className='col-4'>
              <span className='col-2 float-start ms-4 fw-bold' style={{ fontSize: "15px" }}>Country:</span>
              <select className='border border-2 float-start rounded-2 mt-2 ms-3 ps-3' 
                      style={{ height: "60px", width: "90%" }}
                      placeholder="United States" 
                      onChange={e => setCountry(e.target.value)}>
                <option value="United States">United States</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-3' />
        <div className='col-6 list-group shadow-sm' style={{ backgroundColor: "white" }}>

          <div className='row mt-3'>
            <span className='col-2 float-start ms-4 fw-bold' style={{ fontSize: "25px" }}>Experience:</span>
            <div className='list-group mt-3 mb-3'>
              {
                experience.map(exp =>
                  <li key={exp._id} className='listgroup-item row ms-4 mt-2'>
                    <div className='col-1 p-0'>
                      <img className='rounded-2' width={50} src={exp.image} />
                    </div>

                    <div className='col ms-2'>
                      <span className='text-secondary row float-end' style={{ fontSize: "13px" }}>{exp.startDate} - {exp.endDate}</span>
                      <span className='fw-bolder col row' style={{ fontSize: "20px" }}>{exp.workplace}</span>
                      <span className='text-secondary row ms-1' style={{ fontSize: "13px" }}>{exp.title}</span>
                      <p className=' row ms-1' style={{ fontSize: "15px", textAlign: "left" }}>{exp.detail}</p>
                    </div>
                  </li>
                )
              }
            </div>
            <div className='col'>
              <button className='btn btn-primary rounded-2' onClick={editExperienceHandler}>
                <span className='fw-bold' style={{ fontSize: "18px" }} >Add Experience</span>
              </button>
              <ExperienceModal open={experienceModal} onClose={onCloseExperience} xModal={() => setExperienceModal(false)} />
            </div>
          </div>
        </div>
      </div>


      <div className='row mt-4'>
        <div className='col-3' />
        <div className='col-6 list-group shadow-sm' style={{ backgroundColor: "white" }}>

          <div className='row mt-3 mb-3'>
            <span className='col-1 float-start ms-4 fw-bold' style={{ fontSize: "25px" }}>Skill:</span>
            <div className='list-group mt-2'>
              {
                skills.map(skill =>
                  <div key={skill} className='listgroup-item  ms-4 mt-2'>
                    <div className='row float-start'>
                      <span className='fw-bolder col' style={{ fontSize: "20px" }}>{skill}</span>
                    </div>
                    <br></br>
                    <hr></hr>
                  </div>

                )
              }
            </div>
            <div className='col'>
              <button className='btn btn-primary rounded-2' onClick={editSkillHandler}>
                <span className='fw-bold' style={{ fontSize: "18px" }} >Add Skill</span>
              </button>
              <SkillModal open={skillModal} onClose={onCloseSkill} xModal={() => setSkillModal(false)} />
            </div>
          </div>

        </div>
      </div>

      <Link className='btn bg-success rounded-3 border-0 pt-2 pb-2 ms-5 me-5 mt-5 mb-4' to='/home' onClick={registerUser}>
        <span className='fw-bold text-light' style={{ fontSize: "25px" }}>Create Profile</span>
      </Link>


    </div>
  )
}

export default AddExperience
