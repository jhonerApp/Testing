
import './App.css';
import React, { Fragment, useRef } from "react"
import Navbar from './navbar/Navbar';
import Header from './header/Header';




import { connect, useDispatch, useSelector } from "react-redux"

//Store
import { Provider } from "react-redux"
import { SnackbarProvider } from "notistack";
import SettingStore from "./helper/store/SettingStore"

import ClassTermStream from './components/Setting/ClassTermStream';
import { FormControl } from '@material-ui/core';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <SnackbarProvider maxSnack={2} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }} >
        <Provider store={SettingStore}>
          <Router>
            <Navbar />
            <div className="page-wrapper">
              <Header />
              <Switch>
                <Route path="/create_class_stream_term" component={ClassTermStream} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </SnackbarProvider>
    </Fragment>

  );
}

export default App;
