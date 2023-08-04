import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Coding Knights</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Codeforces">Codeforces</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Top_coder">Top Coder</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/At_coder">At Coder</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Code_chef">CodeChef</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Hacker_rank">Hacker Rank</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Hacker_earth">Hacker Earth</Link></li> 
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Leet_code">Leetcode</Link></li> 
                            </ul>
                            
                        </div>
                    </div>
                </nav>
      </div>
    )
  }
}

export default Navbar
