import React from 'react'

const About = () => {
  return (
    <div className='main_about_container'>
      <div className='about_text'>
        <h1>About App</h1>
      </div>
      <div className='ana_container'>
        <h3 className='top_text'>
          Analyse Your Text
        </h3>
        <p className='para'>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</p>
        <h3  className='top_text'>Free To use</h3>
        <p className='para'>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</p>
        <h3  className='top_text'>Brower Compatible</h3>
        <p className='para'>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.</p>
      </div>
    </div>
  )
}

export default About