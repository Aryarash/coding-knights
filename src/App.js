import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Contest from './components/Contests'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

export  class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/"><Contest key="all" category="all"/></Route>
                        <Route exact path="/Codeforces"><Contest key="Codeforces" category="codeforces"/></Route>
                        <Route exact path="/Top_coder"><Contest key="top_coder" category="top_coder"/></Route>
                        <Route exact path="/At_coder"><Contest key="at_coder" category="at_coder"/></Route>
                        <Route exact path="/Code_chef"><Contest key="code_chef" category="code_chef"/></Route>
                        <Route exact path="/Hacker_rank"><Contest key="hacker_rank" category="hacker_rank"/></Route>
                        <Route exact path="/Hacker_earth"><Contest key="hacker_earth" category="hacker_earth"/></Route>
                        <Route exact path="/Leet_code"><Contest key="leet_code" category="leet_code"/></Route>
                    </Switch>
                </Router>
              
            </div>
        )
    }
}

export default App;
