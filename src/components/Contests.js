import React, { Component } from 'react'
import ContestItems from './ContestItems'
import { Loading } from './Loading';
import { BrowserRouter as Router } from 'react-router-dom';


export class Contest extends Component {

  static defaultProps = {
    category : 'all'
  }

  capitalise = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      loading: false
    }
    document.title = `${this.capitalise(this.props.category)}-Coding Knights`; 
  }
  async updateContest(){
    const url=`https://kontests.net/api/v1/${this.props.category}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({contests:parsedata,loading:false});
  }
  async componentDidMount(){
    this.updateContest();
  }

  render() {
    let sitenames = {
      "codeforces":"CodeForces",
      "leet_code":"LeetCode",
      "code_chef":"CodeChef",
      "at_coder":"AtCoder",
      "hacker_rank":"HackerRank",
      "hacker_earth":"HackerEarth",
      "top_coder":"TopCoder"
    }
    return (
      <div>
        <Router>
          <div className='container'>
            <h2 className='text-center' style={{margin:'90px'}}>{`Contests - Latest ${this.props.category==='all'?'':sitenames[this.props.category]} Coding Contests`}</h2>
            {this.state.loading && <Loading/>}
            {!this.state.loading && !this.state.contests.length && <p className='text-center '>{`Currently ${this.props.category==='all'?'':sitenames[this.props.category]} Contests are Unavailable`}</p>}
            <div className="row">
              {!this.state.loading && this.state.contests.map((element) => {
                return <div className="col-md-4" key={element.name}>
                  <ContestItems contesturl={element.url} category={this.props.category} title={this.props.category==='all'?element.site:sitenames[this.props.category]} description={element.name} sdate={element.start_time} edate={element.end_time}/>
                </div>
              })}
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Contest
