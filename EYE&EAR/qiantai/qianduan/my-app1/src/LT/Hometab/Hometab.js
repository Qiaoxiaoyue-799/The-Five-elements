import React, { Component } from 'react';
import {HashRouter  as Router,withRouter,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './Home';
import Eye from './Eye';
import Ear from './Ear';
import Details from './Details';
import Details1 from './Details1';
import Author from './Author';
import Author1 from './Author1';
import MyChat from './MyChat';
import Member from './Member';
import Vip from './Vip';
import Search from './Search';
import Connectus from './Connectus';

export default class Hometab extends Component {
  render() {
    return (
      <div>
         
        <Switch>
            
            <Route exact path='/apphome' component={Home}/> 
            <Route path='/apphome/hometab/eye' component={Eye}/> 
            <Route path='/apphome/hometab/ear' component={Ear}/>
            <Route path='/apphome/hometab/details/:id' component={Details}/> 
            <Route path='/apphome/hometab/details1/:id' component={Details1}/> 
            <Route path='/apphome/hometab/author/:id' component={Author}/> 
            <Route path='/apphome/hometab/author1/:id' component={Author1}/> 
            <Route path='/apphome/hometab/mychat/:id' component={MyChat}/>
            <Route path='/apphome/hometab/member' component={Member}/>
            <Route path='/apphome/hometab/connectus' component={Connectus}/>
            <Route path='/apphome/hometab/vip' component={Vip}/>
            <Route path='/apphome/hometab/search' component={Search}/>
        </Switch>
        
      </div>
    );
  }
}
