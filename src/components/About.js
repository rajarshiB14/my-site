import React, { useState } from 'react'

export default function About(props) {
    // const [theme, setTheme] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [text, setText] = useState("Enable Dark mode")

    // const handleClick = () => {
    //      if (theme.color === 'black') {
    //         setText("Disable dark mode")
    //         setTheme({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     } else {
    //         setText("Enable dark mode")
    //         setTheme({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }
    return (
        <div>
            <div style={{
                color: props.mode === 'light' ? 'black' : 'white',
                backgroundColor: 
                    props.mode === 'dark' ? 'black' :
                    props.mode === 'primary' ? '#10012D' :
                    props.mode === 'danger' ? '#7D1108' : '#fff'
                }}  className={`card my-3`}>
                <h1 className='my-2'>About us</h1>
                <div style={{
                    backgroundColor: 
                    props.mode === 'dark' ? ' rgb(30, 30, 30)' :
                    props.mode === 'primary' ? ' rgb(25, 1, 73)' : 
                    props.mode === 'danger' ? '#9b1308' : 'lightgray'
                }}>
                <img className="card-img-top" src="/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">About us</a>
                </div>
                </div>
            </div>
        </div>
    )
}
