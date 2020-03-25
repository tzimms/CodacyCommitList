import React from 'react'

const Posts = ({ commitList, loading, placeholder }) => {
    if (loading) {
        return (
        <button onClick={ () => placeholder() }> Redirect to Local </button>
        )
    
    }
    return (
    <ul className="list-group mb-4">
    {commitList.map((com) => (
          <li key={com.sha} className='list-group-item'>
          {com.commit.author.name} committed on {com.commit.author.date}
          </li>
      ))
      } </ul>
    )
}


export default Posts; 