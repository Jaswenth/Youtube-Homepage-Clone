import React from "react";
import Header from "./components/Header/Header";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VideoProvider } from "./VideoContext";
import "./App.css";

const App = () => {
  return (
    <VideoProvider>
      <div class="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search/:searchterm">
              <div className="main-content">
                <Sidebar />
              </div>
          
            </Route>
            <Route path="/video/:channelId/:videoId">
              <div className="main-content singleVideo__wrapper">
              </div>
         
            </Route>
            <Route path="/">
              <div className="main-content">
                
                <VideoGallery />
                <Sidebar />
              </div>
     
            </Route>
          </Switch>
        </Router>
      </div>
    </VideoProvider>
  );
};

export default App;
