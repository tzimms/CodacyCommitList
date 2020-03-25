import React from 'react'

const Posts = ({ commitList, loading, placeholder, backupData }) => {
    if (loading) {
        return (
            <button onClick={ () => placeholder() }> Redirect to Local </button>
        )
    }
    else if (commitList.length > 1){
        return (
            <ul className="list-group mb-4">
            {
                commitList.map((com) => (
                <li key={com.sha} className='list-group-item'>
                {com.commit.author.name} committed on {com.commit.author.date}
                </li>
            ))
            } </ul>
        )
    }
        return (
            <ul className="list-group mb-4">
            {
                backupData.map((com) => (
                <li key={com.date} className='list-group-item'>
                {com.author} committed on {com.date}
                </li>
                ))
            } 
            </ul>
        )  

}


export default Posts; 