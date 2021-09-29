import React from 'react';


import './app-header.css'



const AppHeader = ({liked, allPosts}) => {
    return (
        <div>
            <h1>SM</h1>
            <h2>{allPosts} записей, {liked} понравилось</h2>
        </div>
    )
}

export default AppHeader