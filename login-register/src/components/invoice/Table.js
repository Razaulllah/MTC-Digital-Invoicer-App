import React from 'react'

export default function Table({list,total}) {
  return (
    <>
      {/* Table */}

              <table width="100%" className="mb-2">
                <thead>
                  <tr className='bg-gray-100'>
                    <td className='font-bold'>Item Description</td>
                    <td className='font-bold'>Quantity</td>
                    <td className='font-bold'>Price</td>
                    <td className='font-bold'>Amount</td>
                  </tr>
                </thead>
                {list.map(({id, description, quantity, price, amount}) => (
                
                <React.Fragment>
                    <tbody>
                        <tr>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{amount}</td>
                        </tr>
                    </tbody>
                    
                </React.Fragment>
            ))}
            </table>

            <div>
                <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
                  Rs. {total.toLocaleString()}</h2>
            </div>

       {/* End of table */}
    </>
  )
}
