import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-[80px] flex justify-center items-center px-4 bg-[#010101] text-[#ccc]'>
      <div className="footer" style={{ "box-shadow": "0px;" }}>
        {/* <SocialLine /> */}
        <div className="hr" align="center">
        <p className="flex justify-center align-middle my-2 p-2 space-x-5">
            <a
              className="text-xl linkText"
              href="mailto:napstakid@gmail.com"
            >
              Report A Problem
            </a>
          </p>
        </div>
        <div className="hr" align="center">
          <p className="block">
            &copy; Vector_Norms and Geek Web Inc. 2021
          </p>
        </div>
      </div >
    </footer>
  )
}
