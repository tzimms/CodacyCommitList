import React from 'react'

const Posts = ({ commitList, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
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