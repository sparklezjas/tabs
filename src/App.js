import './App.css';
import React, { useState } from 'react';
import Return from './Components/Return';
import Tabs from './Components/Tabs';

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content text here"},
    { label: "Tab 2", content: "Tab 2 content text here"},
    { label: "Tab 3", content: "Tab 3 content text here"},
    { label: "Tab 4", content: "Tab 4 content text here"},
  ]
  const [ tabs, setTab ] = useState(tabsArray)
  
  const [ currentTab, setCurrentTab] = useState(0)

  return (
    <div className="App">
      <Tabs
      tabs = { tabs }
      currentTab = { currentTab }
      setCurrentTab= {setCurrentTab }/>
      <Return tabs={ tabs } currentTab= {currentTab }/>
    </div>
  );
}

export default App;
