import React from 'react'
import '../../styles/generalSectionStyle/generalSectionForm.css'

const GeneralSectionForm = ({data, onUpdate}) => {

  const handleChange = (field, value) => {
    if(field === "phoneNum" && value.length > 10) {
      onUpdate((prevState) => ({
        ...prevState,
        [field]: data.phoneNum
      }));
    }
    onUpdate((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    handleChange(name, fieldValue) 
  }


  return (
    <div className='general-info-input-w'>
      <h2 className='general-info-h2'>General Info</h2>
      <div className='f-name-w'>
        <label htmlFor="f-name-input">First Name</label>
        <input
          type="text"
          id='f-name-input'
          name='firstName'
          maxLength={15}
          value={data.firstName || ''}
          // value={data.firstName === undefined ? '' : data.firstName} 
          onChange={handleInputChange}
        />
      </div>
      <div className='l-name-w'>
        <label htmlFor="l-name-input">Last Name</label>
        <input
          type="text"
          id='l-name-input'
          name='lastName'
          maxLength={15}
          value={data.lastName ||''}
          onChange={handleInputChange}
        />
      </div>
      <div className='email-w'>
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          name="email"
          id="email-input"
          value={data.email}
          onChange={handleInputChange}
        />
      </div>
      <div className='phone-num-w'>
        <label htmlFor="phone-num-input">Phone Number</label>
        <input
          type='tel'
          maxLength={10}
          placeholder="8888888888" 
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          title="Ten digits code"
          name='phoneNum'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='location-w'>
        <label htmlFor="location-input">Location</label>
        <input
          type="text"
          name="location"
          id="location-input"
          value={data.location || ''}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default GeneralSectionForm