import React, { Component } from 'react';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import Community from './Community';
import Dynamic from './Dynamic';
import Chat from '../Hometab/Chat';
export default class Mytab extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/apphome' component={Community}/> 
          <Route path='/apphome/mytab/dynamic' component={Dynamic}/> 
          <Route path='/apphome/mytab/chat' component={Chat}/> 
          
        </Switch>
      </div>
    );
  }
}
