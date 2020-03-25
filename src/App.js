import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts' ;
import Pagination from './components/Pagination';

const App = () => {
  const [commitListData, setCommitList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [backupData, setBackupdata ] = useState([])


  useEffect(() =>{
   const fetchCommitList = async () => {
     setLoading(true); 
     const res = await axios.get(`https://api.github.com/repos/tzimms/VolkswagenDS/commits`)
     setCommitList(res.data);
     setLoading(false);
    } 
    fetchCommitList(); 
  }, []);

  const getText = () => {
    fetch('./commitList.txt')
    .then(response => response.text())
    .then(data => { 
      let trim = "[" + data.replace(/(^,)|(,$)/g, "") +"]";
      let newData = JSON.parse(trim);
      setBackupdata(newData)
      setLoading(false)
    })
  }


  const getCurrentPost = () => {
    if (commitListData.length > 10) {
      return commitListData.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      return backupData.slice(indexOfFirstPost, indexOfLastPost);
    }
  }

  
  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getCurrentPost();
  const totalPosts = commitListData.length > 10 ? commitListData.length : backupData.length;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>List of Github Commits</h1>
      < Pagination 
          postsPerPage = {postsPerPage}
          totalPosts = {totalPosts}
          paginate = {paginate}
       />
      < Posts
          commitList = {currentPosts}
          loading = {loading}
          placeholder = {getText}
          backupData = {currentPosts}
        /> 
       
    </div>
  );
}

export default App;
