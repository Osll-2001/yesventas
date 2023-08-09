import '../styles/Home.scss'

const ContainerSale = () => {
  return (
    <div className='containerSale'>
      <section className='dataCostumer'>
        <div className='searchCostumer'>
          <label htmlFor='searchID'>ID CLIENTE:</label>
          <input type='text' id='searchID' placeholder='##' />
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
        <div className='searchProduct'>
          <input type='text' id='searchById' placeholder='ID del producto' />
          <input type='text' id='searchByName' placeholder='Nombre del producto' />
        </div>
        <div className='products'>
          <table className='tableProducts'>
            <tr className='headersTable'>
              <th>Cantidad</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Importe</th>
              <th>Desc</th>
              <th>Accion</th>
            </tr>
            <tr className='bodyTable'>
              <td>NN</td>
              <td>Nombre de producto de ejemplo</td>
              <td>$00.00</td>
              <td>$00.00</td>
              <td>$00.00</td>
              <td><button>Borrar</button></td>
            </tr>
          </table>
        </div>
        <div className='costs'>
          <input type='text' className='subtotal' placeholder='Subtotal' />
          <input type='text' className='taxes' placeholder='Impuesto' />
          <input type='text' className='total' placeholder='Total' />
          <button>Cobrar</button>
        </div>
      </section>
    </div>
  )
}

export default ContainerSale
