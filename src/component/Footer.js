import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-auto'>
     <style jsx="true">
       {`
         footer {
             height:120px;
             background-color:#e3f2fd;
             font-family: "Josefin Sans", sans-serif;
             width: 100%;
         }
       `}
      </style>
      <div className='row'>
      <div className='col-sm-12 text-center mt-4 mb-2'>
          weeink - url shortener<br/>
          Powered by <a href="https://shrtco.de/" target="_blank" rel="noopener noreferrer">ShrtCo.de</a>
      </div>
      <div className='col-sm-12 text-center'>
          😉 weeink, 2022
       </div>
      </div>
    </footer>
  )
}

export default Footer
