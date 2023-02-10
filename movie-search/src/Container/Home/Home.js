import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"
import CardMovies from '../../Components/CardMovies/CardMovies';
import Pagination from '../../Components/Pagination/Pagination';
function Home() {
  const[moviesdata,setMoviesData]=useState([]);
  const[pageno,setPageNo]=useState(1);
  const[paginationno,setPaginationNo]=useState(0);

  const API_KEY=process.env.REACT_APP_NOT_SECRET_CODE;
  const GetDataTrending=async()=>{
    const{data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`);
    setMoviesData(data.results);
        setPaginationNo(data.total_pages);
    console.log(data);
  }
  useEffect(()=>{
    GetDataTrending();
  },[])

  const handleClick = (number)=>{
    setPageNo(number);
}
useEffect(()=>{
    console.log('Trending Component didupdate mount');
    GetDataTrending();
}, [pageno])
  return (
    <div className='homePage'>
        <Container>
           <Row>
              <Col className='col-12'>
                 <section>
                  <h2>Top Trending</h2>
                 </section>
              </Col>
              {moviesdata && moviesdata.length>0 ? moviesdata.map((item, index)=>{
                return(
                  <CardMovies key={index} data={item} mediatype="TV"
                  />
                )
              }):'Loading ...'}

{
                    paginationno && paginationno > 1 ? <Pagination maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
           </Row>
    </Container>
    </div>
  )
}

export default Home