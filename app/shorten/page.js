"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten=() =>{
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='flex h-[41.2rem] items-center justify-center bg-white'>
      <div className='border-2 border-white rounded-xl h-4/5 aspect-[6/3] shadow-grey-100 shadow-xl relative'>
        <div className="flex  flex-col items-center justify-center rounded-xl size-full font-sans font-semibold bg-yellow-200">
          <h1 className='text-black text-3xl font-bold mb-8  '>GENERATE YOUR URL</h1>
          <input type="text"
            value={url}
            className="text-black bg-white my-4 border-2 border-rose-500 py-3 px-8 rounded-full w-3/4 text-xl shadow-lg shadow-yellow-200 focus:outline-red-600" placeholder='Enter your URL'
            onChange={e => { seturl(e.target.value) }} />
          <input type="text"
            value={shorturl}
            className="text-black bg-white my-5 border-2 border-rose-500 py-3 px-8 rounded-full w-3/4 text-xl shadow-lg shadow-yellow-200  focus:outline-red-600" placeholder='Enter your prefered short URL Text'
            onChange={e => { setshorturl(e.target.value) }} />
          <button onClick={generate} className='text-white bg-red-500 rounded-full px-32 p-4 m-5 text-center text-xl hover:bg-yellow-400 hover:text-[#3B1C32]'>GENERATE</button>
          
            {generated && <><span className='text-xl font-bold'>YOUR LINK:</span> <code className='text-xl mt-3 hover:text-gray-500 active:text-purple-700 '>
              <Link target="_blank" href={generated}>{generated}</Link>
            </code></>}
        </div>
      </div>

    </div>
  )
}
export default Shorten
