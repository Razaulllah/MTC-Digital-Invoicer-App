import React from 'react'

export default function Footer({name, phone, address}) {
  return (
    <>
      {/* Footer */}
      <footer className='footer border-t-2 border-gray-300 pt-5'>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your name:</span>{name }</li>
            <li className='mx-4'><span className="font-bold">Your address:</span>{address}</li>
            <li><span className="font-bold">Phone number:</span>{phone }</li>
          </ul>
        </footer>
        {/* End of footer */}
    </>
  )
}
