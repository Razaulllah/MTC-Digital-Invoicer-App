import React from 'react'

export default function Dates({invoiceNumber,
    invoiceDate
    }) {
  return (
    <>
      {/* Dates  */}
        <article className="mt-10 mb-14 flex items-end justify-end">
          <ul>
            <li className='p-1'><span className="font-bold">Invoice number:</span>{invoiceNumber}</li>
            <li className='p-1'><span className="font-bold bg-gray-100">Invoice date:</span> {invoiceDate}</li>
          </ul>
        </article>
        
        {/* End of Dates */}
    </>
  )
}
