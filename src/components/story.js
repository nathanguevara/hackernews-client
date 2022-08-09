import React from 'react'



function Story(props) {
    return (
    <div className="container">
        <section className="storyContainer">
          <ul className='thingy'>
              <article className="story">
                <a className="title" href={props.url}>{props.title}</a> &nbsp; 
                <span className="link">({props.url})</span>
                <p className="subTitle">{props.points} points | {props.author} | {props.num_comments} comments</p>
              </article>
          </ul>
        </section>
        </div>)}

export default Story