import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts' ;
import Pagination from './components/Pagination' ;

const App = () => {
  const [commitList, setCommitList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(() =>{
   const fetchCommitList = async () => {
     setLoading(true); 
     const res = await axios.get(`https://api.github.com/repos/tzimms/VolkswagenDS/commits`)
     setCommitList(res.data)
     setLoading(false);
    }
    fetchCommitList(); 
  }, []);

  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = commitList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>List of Github Commits</h1>
      < Pagination 
        postsPerPage = {postsPerPage}
        totalPosts = {commitList.length}
        paginate = {paginate} />
      < Posts
        commitList = {currentPosts}
        loading = {loading}
        /> 
       
    </div>
  );
}

export default App;
