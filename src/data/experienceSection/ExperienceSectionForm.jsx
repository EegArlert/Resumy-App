import React from 'react'
import '../../styles/experienceSectionStyle/experienceSectionForm.css'

const ExperienceSectionForm = ({data, onUpdate}) => {

    /*
      1. check if has more than one experience
      2. check if the currentJobStatus is false, if so, then let the workEndDate to be disabled
      3. iterate through the jobDescription length
    */

    const updateData = (field, value) => {
        onUpdate((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        const fieldValue = type === 'checkbox' ? checked : value;
        
        if(name === "jobDescription") {
            fieldValue.forEach((description) => {
                updateData(name, description);
            })
            return
        }
        updateData(name, fieldValue);
    }
    


    return (
        <div className='experience-card-w'>
            <div className="job-title-w">
                <label htmlFor="job-title">Job Title</label>
                <input
                    type="text"
                    maxLength={30}
                    id='job-title'
                    name='jobTitle'
                    value={data.jobTitle}
                    onChange={handleInputChange}
                />
            </div>
            <div className="company-name-w">
                <label htmlFor="company-name">Company Name</label>
                <input
                    type="text"
                    maxLength={50}
                    id='company-name'
                    name='companyName'
                    value={data.companyName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="company-loc-w">
                <label htmlFor="company-location">Location</label>
                <input
                    type="text"
                    id='company-location'
                    name='companyLocation'
                    value={data.companyLocation}
                    onChange={handleInputChange}
                />
            </div>
            <div className="job-start-w">
                <label htmlFor="job-start">Start Date</label>
                <input
                    type="date"
                    id='job-start'
                    name='workStartDate'
                    value={data.workStartDate}
                    onChange={handleInputChange}
                />
            </div>
            <div className="job-end-w">
                <label htmlFor="job-end">End Date</label>
                <input
                    type="date"
                    id='job-end'
                    name='workEndDate'
                    value={data.workEndDate}
                    onChange={handleInputChange}
                    disabled={data.currentJobStatus} //disable if checkbox is checked
                />
            </div>
            <div className="current-job-status-w">
                <label htmlFor="job-status">I currently work here</label>
                <input
                    type="checkbox"
                    id='job-status'
                    name='currentJobStatus'
                    checked={data.currentJobStatus}
                    onChange={handleInputChange}
                />
            </div>

            <div className="job-desc-w">
                <label htmlFor="job-desc">Job Description</label>
                <textarea
                    type="textarea"
                    id='job-desc'
                    name='jobDescription'
                    value={data.jobDescription}
                    onChange={handleInputChange}
                    // onKeyDown={handleKeyDown}
                    // onFocus={handleFocus}
                    placeholder="click to start typing"
                >
                </textarea>
            </div>
        </div>
    )
}

export default ExperienceSectionForm