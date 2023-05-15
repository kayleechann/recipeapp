import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const SingleRecipe = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://www.scotsman.com/webimg/b25lY21zOmRmYmExYzE4LTZhY2ItNDBkZS1iMTU1LWY4YTVlZWNmYTdkYzowOTcxZDZlOC00MDc1LTQzYzItOWEyOC00YjNlNzFiY2Y1YzI=.jpg?width=1200&enable=upscale" />
                <div className="user">
                    <img src="https://www.scotsman.com/webimg/b25lY21zOmRmYmExYzE4LTZhY2ItNDBkZS1iMTU1LWY4YTVlZWNmYTdkYzowOTcxZDZlOC00MDc1LTQzYzItOWEyOC00YjNlNzFiY2Y1YzI=.jpg?width=1200&enable=upscale" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/writerecipe?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>COOL RECIPE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    <br/>
                    <br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Menu/>
        </div>
    )
}

export default SingleRecipe