import React, { useState } from 'react'
import GeneralSectionDisplay from './generalSection/GeneralSectionDisplay'
import GeneralSectionForm from './generalSection/GeneralSectionForm'
import '/src/styles/resumeData.css'
import ExperienceSectionForm from './experienceSection/ExperienceSectionForm'
import ExperienceSectionDisplay from './experienceSection/ExperienceSectionDisplay'

const ResumeData = () => {

  /*



  */

    const [generalData, setGeneralData] = useState({
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
      location: '',
    })

    /*
      1. check if has more than one experience
      2. check if the currentJobStatus is false, if so, then let the workEndDate to be disabled
      3. iterate through the jobDescription length
    */
    const [experienceData, setExperienceData] = useState([{
      companyName: '',
      jobTitle: '',
      currentJobStatus: false,
      companyLocation: '',
      workStartDate: '',
      workEndDate: '',
      jobDescription: [],
    }])

    const [projectData, setProjectData] = useState({
      projectTitle: '',
      projectTools: '',
      projectDescription: [],
    })

    const [educationData, setEducationData] = useState({
      university: '',
      degree: '',
      graduationDate: '',
      location: '',
    })


    return (
      <div className='resume-outer-w'>
        <section className='resume-input-w'>
            <GeneralSectionForm data={generalData} onUpdate={setGeneralData}/>
            <ExperienceSectionForm data={experienceData} onUpdate={setExperienceData}/>
        </section>
        <section className='resume-outer-display-w'>
          <div className='resume-display-w'>
            <GeneralSectionDisplay data={generalData}/>
            <ExperienceSectionDisplay data={experienceData}/>
          </div>
        </section>
      </div>
    )
  }

export default ResumeData

