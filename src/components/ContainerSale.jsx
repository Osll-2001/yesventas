import React from 'react'

const ContainerSale = () => {
  return (
    <div className='containerSale'>
      <section className='dataCostumer'>
        <div className='searchCostumer'>
          <label htmlFor='searchID'>ID CLIENTE:</label>
          <input type='text' id='searchID' className='SearchID' placeholder='##' />
        </div>
        <div className='infoCostumer'>
          <input type='text' className='nameCostumer' placeholder='Nombre del cliente' />
          <input type='text' className='emailCostumer' placeholder='example@example.com' />
        </div>
        <div className='infoDocument'>
          <input type='text' className='RFCCostumer' placeholder='RFC' />
          <input type='text' className='folioSale' placeholder='## FOLIO' />
        </div>
      </section>
      <section className='Sale'>
        <h1>Venta de los productos</h1>
      </section>
    </div>
  )
}

export default ContainerSale
