import React from 'react'

const Return = (props) => {
    const {tabs, currentTab } = props

  return (
    <div className='return'>
        { tabs[currentTab].content }
    </div>
  )
}

export default Return