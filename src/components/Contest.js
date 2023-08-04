import React, { useEffect, useState } from 'react'
import Loading from './Loading'


function Contest(props) {

  const [loading , setloading] = useState(false);
  const [article , setArticle] = useState([]);
  
  const updateContest = async ()=>{
    const url=`https://kontests.net/api/v1/${props.category}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    setloading({loading:false});
    setArticle({article:parsedata});
  }

  useEffect(() => {
    updateContest();
  });

  return (
    <div>
        <div className='container my-3 '>
            <h2 className='text-center my-5'>{`NewsBot - Latest ${this.props.category==='general'?'':this.capitalise(this.props.category)} Headlines`}</h2>
            {loading && <Loading/>}
            <div className="row">
              {!loading && article.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <ContestItems site={element.site} start_time={element.start_time} date={element.publishedAt} name={element.name} url={element.url} />
                </div>
              })}
            </div>
            <div className="container d-flex justify-content-between my-5">
              <button disabled={this.state.page<=1}  type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&laquo;Previous</button>
              <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next&raquo;</button>
            </div>
          </div>
    </div>
  )

}

export default Contest
