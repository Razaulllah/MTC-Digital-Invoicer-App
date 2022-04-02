import React from 'react'

export default function MainDetails({name, address}) {
  return (
    <>
      {/* YOur Details */}
      <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-xl uppercase mb-1 md:text-4xl">{name}</h2>
          <p>{address}</p>
        </section>
        {/* End of your details */}
    </>
  )
}
