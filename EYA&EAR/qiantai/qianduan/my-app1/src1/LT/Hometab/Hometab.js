import React, { Component } from 'react';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './Home';
import Eye from './Eye';
import Ear from './Ear';
import Details from './Details';
import Author from './Author';
import Chat from './Chat';
import Member from './Member';
import Vip from './Vip';
import Search from './Search'

export default class Hometab extends Component {
  render() {
    return (
      <div>
         
        <Switch>
            
            <Route exact path='/apphome' component={Home}/> 
            <Route path='/apphome/hometab/eye' component={Eye}/> 
            <Route path='/apphome/hometab/ear' component={Ear}/>
            <Route path='/apphome/hometab/details' component={Details}/> 
            <Route path='/apphome/hometab/author' component={Author}/> 
            <Route path='/apphome/hometab/chat' component={Chat}/>
            <Route path='/apphome/hometab/member' component={Member}/>
            <Route path='/apphome/hometab/vip' component={Vip}/>
            <Route path='/apphome/hometab/search' component={Search}/>
        </Switch>
        
      </div>
    );
  }
}
