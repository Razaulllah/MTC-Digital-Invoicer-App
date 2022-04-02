import React from 'react'
import Footer from './Footer'

export default function Notes({notes}) {
  return (
    <>
    
      {/* Notes */}
      <section className="mt-10 mb-5">
          <p className='lg:w-1/2 text-justify'>{notes}</p>
        </section>
        {/* End of notes */}
    </>
  )
}
