import React from 'react'

const Tabs = (props) => {
    const { tabs, currentTab, setCurrentTab } = props

const showTab = (index) => {
    if (index === currentTab) {
        return "selectedTab"
    } else {
        return "nonSelectedTab"
    }
}

const setSelectedTab = (index) => {
    setCurrentTab(index)
}

return (
    <div className='boxes'>
        {
        tabs.map((item, index) => (
            <div className={`tab ${ showTab(index) }`} onClick={(e) => setSelectedTab(index) }>
                { item.label }
                </div>
))
        }
    </div>
)
}

export default Tabs