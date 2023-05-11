import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  const pageSize= 10;
  const apiKey= process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0)
 
  

    return (
      //Api key : 34cee921abc74bd99ecba1c7692c4ebe
      <>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        transitionTime={300}
        progress={progress}
      />
        {/* <News setProgress={setprogress} pageSize={10} country="in" category="science" /> */}

        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setprogress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}
          />
            <Route
            exact
            path="/general"
            element={<News setProgress={setprogress} key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" />}
          />
            <Route
            exact
            path="/entertainment"
            element={<News setProgress={setprogress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" />}
          />
            <Route
            exact
            path="/health"
            element={<News setProgress={setprogress} key="health"  apiKey={apiKey} pageSize={pageSize} country="in" category="health" />}
          />
            <Route
            exact
            path="/sports"
            element={<News setProgress={setprogress} key="sports"  apiKey={apiKey} pageSize={pageSize} country="in" category="sports" />}
          />
            <Route
            exact
            path="/buisness"
            element={<News setProgress={setprogress} key="buisness" apiKey={apiKey} pageSize={pageSize} country="in" category="buisness" />}
          />
            <Route
            exact
            path="/science"
            element={<News setProgress={setprogress} key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" />}
          />
            <Route
            exact
            path="/technology"
            element={<News setProgress={setprogress} key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" />}
          />

        </Routes>
      </>
    );
  }


  export default App;
