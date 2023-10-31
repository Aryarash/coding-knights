import React, { Component } from 'react'

export class ContestItems extends Component {
    
    render() {
        let img_urls = {
            "CodeChef" : "https://static.startuptalky.com/2021/04/codechef-logo-startuptalky.jpg",
            "HackerRank" : "https://repository-images.githubusercontent.com/231893793/cec60480-04a9-11eb-80c4-df7359d94047",
            "CodeForces" : "https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
            "AtCoder" : "https://img.atcoder.jp/assets/atcoder.png",
            "CodeForcesGym":"https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1",
            "LeetCode" : "https://leetcode.com/static/images/LeetCode_Sharing.png",
            "HackerEarth" : "https://camo.githubusercontent.com/99a57a812f5f6c5ff7905942ca5566e25e547e4ccf2c3c4b0e9e7fa767bd2c03/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3630302f312a5f7145795a32495534314e334c7772575856343371672e6a706567",
            "TopCoder":"https://nyweekly.com/wp-content/uploads/2022/07/30.png"
        };
        let {title,description,category,contesturl,sdate,edate} = this.props;
        let img_url=img_urls[title];
        return (
            <div>
                <div className="card my-3">
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-success' style={{left:'90%',zIndex:'1'}}>{title}</span>
                    <img src={img_url?img_url:"https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-25-at-4.56.50-PM.png"} className="card-img-top" style={{height:'9rem'}}alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-muted'>Starts on {new Date(sdate).toGMTString()} & Ends on {new Date(edate).toGMTString()}</small></p>
                            <a rel="noreferrer" href={contesturl} target="_blank"  className="btn btn-sm btn-dark">Go To Contest</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default ContestItems
