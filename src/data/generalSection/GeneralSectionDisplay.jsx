import React from 'react'
import '../../styles/generalSectionStyle/generalSectionDisplay.css'

const GeneralSectionDisplay = ({data}) => {
  let phoneNum = data.phoneNum;

  const formatPhoneNum = (number) => {
    if (number == '') {
      return ''
    }
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(6, 10)}`
  }

  if (phoneNum != '' && phoneNum.includes(' ')) {
    phoneNum = data.phoneNum.split(' ').join(""); //remove spaces and join the array back
    phoneNum = formatPhoneNum(phoneNum);
  } else {
    phoneNum = formatPhoneNum(phoneNum);
  }


  return (
    <section className='general-info-display-w'>
      <h1 className='full-name'>
        {data.firstName} {data.lastName}
      </h1>
      <div className='other-info'>
        <p>{data.email}</p>
        <p>{phoneNum}</p>
        <p>{data.location}</p>
      </div>
    </section>
  )
}

export default GeneralSectionDisplay