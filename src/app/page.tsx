import Image from 'next/image'
'use client';


import { useState } from 'react'

;

export default function Home() {
  const [mount, setMount] = useState(true)

  return (
    <main className="flex min-h-screen max-h-screen overflow-hidden items-center flex-col bg-blue-300 relative">
      {
        mount && 
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center backdrop-blur-sm' onClick={() => setMount(false)}>
          <div className='bg-gray-950 flex flex-col max-w-[40vw] min-h-[50vh] rounded-3xl relative'>
            <div className='border-b-[1px] text-white p-4 flex items-center justify-center text-lg'>
              <p><strong>Welcome</strong> to my final project 🙏🤖</p>
            </div>
            <div className='w-full flex flex-col items-center text-white p-4'>
              <p className=''>The intersection of religion and technology is an area that should be included in the syllabus. On 
              this webpage, I will showcase some amazing examples of <strong>AI driven style transfer</strong>. By leveraging state of the art image recognition
              models and ideas about temporal consistency loss, I was able to create a model that can transfer the style of an input image to a video or picture.</p>
              <br></br>
              <p>I believe this kind of project is an interesting example of how <strong>AI could reasonably facilitate the expansion of religion to new generations</strong> by generating 
              content which is more interesting to children in a far more efficient manner.</p>
              <br></br>
              <p>To interact with this application click this link to my code, download the github repository, and follow the instructions in the README!
              </p>
              <br></br>
              <a href="https://github.com/nickyy96/sequence-stylizers" target="_blank" rel="noopener noreferrer" >
                <strong>GitHub</strong>
              </a>
              <br></br>
              <p>I worked on this project for Computer Vision at Brown, and then added an interface and generated images for this project! 😄😄</p>
            </div>
            <div className='text-blue-200 flex items-center justify-center p-2 border-t-[1px]' onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-down cursor-pointer" viewBox="0 0 16 16" onClick={(e) => {
                e.stopPropagation()
                setMount(false)
              }}>
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>
      }


      <div className="flex w-full min-h-[8vh] p-2 text-white items-center justify-between">
        <p className="font-bold w-1/3">RELS 0815 <span className="font-normal">final project</span></p>
        <p className='font-bold text-[1.5rem] w-1/3 flex justify-center hover:text-[1.7rem] transition-[font-size] ease-in-out cursor-pointer' onClick={() => setMount(true)}>Style Transfer Exhibit</p>
        <strong className='w-1/3 flex justify-end'>Nicholas Yarnall</strong>
      </div>
      <div className='flex flex-grow min-w-full min-h-full border-t-[1px] items-center justify-center bg-blue-200'>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px' }} className="max-w-[80vw] max-h-[70vh]">
          <div className='flex flex-col items-center'>
            <img src="/christ.png" alt="slide 1" className='hover:opacity-90 border-[1px] border-white'/>
            <p>Jesus Christ</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/books.png" alt="slide 2" className='hover:opacity-90 border-[1px] border-white'/>
            <p>The Quran</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/conficius.png" alt="slide 3" className='hover:opacity-90 border-[1px] border-white'/>
            <p>Confucius</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/last_supper.png" alt="slide 4" className='hover:opacity-90 border-[1px] border-white'/>
            <p>The Last Supper</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/temple.png" alt="slide 5" className='hover:opacity-90 border-[1px] border-white'/>
            <p>A Synagogue</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/temple2.png" alt="slide 6" className='hover:opacity-90 border-[1px] border-white'/>
            <p>A Temple</p>
          </div>
        </div>
      </div>
    </main>
  )
}
