import React from 'react'

export default function ClientDetails({clientName, clientAddress, clientPhone}) {
  return (
    <>
       {/* Client details */}
       <section className="mt-10">
          <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
          <p>{clientAddress}</p>
          <p>{clientPhone}</p>
        </section>
        {/* End of client details */}
    </>
  )
}
