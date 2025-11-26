export default function RentPage() {
  return (
    <>
    
        <div className="text-center">
            <h2 className="text-black mb-4">Registrar Nuevo Alquiler</h2>
        </div>
    
        <form className="text-black d-flex flex-column border rounded-2 border-black p-4">
            <div>
                <label htmlFor="clientName" className="form-label">Nombre del Cliente:</label>
                <input type="text" id="clientName" className="form-control"/>
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Telefono</label>
                <input type="number" id="phone" className="form-control"/>
            </div>
            <div>
                <label htmlFor="suitDetails" className="form-label">Detalle del traje:</label>
                <input type="text" id="suitDetails" className="form-control"/>
            </div>
            <div>
                <label htmlFor="unitPrice" className="form-label">Precio Unitario:</label>
                <input type="number" id="unitPrice" className="form-control"/>
            </div>
            <div>
                <label htmlFor="quantity" className="form-label">Cantidad:</label>
                <input type="number" id="quantity" className="form-control"/>
            </div>
            
            <div>
                <div className="d-flex justify-content-between">
                    <label htmlFor="warranty" className="form-label">Garantia:</label>
                    <label htmlFor="warranty" style={{fontSize:"0.8rem"}}>Agregar Garantia</label>
                </div>
                
                <div className="d-flex flex-row gap-2">
                    <input type="text" id="warranty" className="form-control"/>
                    <select className="form-select w-auto">
                        <option value="days">Efectivo</option>
                        <option value="weeks">Transferencia</option>
                        <option value="months">Documento</option>
                    </select>
                </div>
                
            </div>
            <div>
                <div className="d-flex justify-content-between">
                    <label htmlFor="warranty" className="form-label">Monto total:</label>
                    <label htmlFor="warranty" style={{fontSize:"0.8rem"}}>Agregar Forma de pago</label>
                </div>
                <div className="d-flex flex-row gap-2">
                    <input type="number" id="warranty" className="form-control" disabled/>
                    <select className="form-select w-auto">
                        <option value="days">Efectivo</option>
                        <option value="weeks">Transferencia</option>
                    </select>
                </div>
                
            </div>
        </form>
    </>
  )
}
