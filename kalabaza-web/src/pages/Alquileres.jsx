import { useState } from "react";
import adderImage from "../assets/adder.png";
import substractionImage from "../assets/substraction.png";

export const Alquileres = () => {
    const [cantidad, setCantidad] = useState(1);
    const [valorUnitario, setValorUnitario] = useState(0);

    const incrementsubstractionr = () => setCantidad(cantidad + 1);
    const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

    const total = cantidad * valorUnitario;

    return (
        <div className="w-full bg-[#FBBB4B] p-6 rounded-lg shadow-lg ">
            {/* Nombre */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Nombre:</label>
                <input
                    type="text"
                    className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black"
                    placeholder="Nombre del cliente"
                />
            </div>

            {/* Teléfono */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Teléfono:</label>
                <input
                    type="tel"
                    className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black"
                    placeholder="Telefono  ej: 1234567890"
                />
            </div>

            {/* Detalle */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Detalle:</label>
                <input
                    type="text"
                    className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black"
                    placeholder="Detalle del producto"
                />
            </div>

            {/* Valor Unitario */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Valor Unitario:</label>
                <input
                    type="number"
                    value={valorUnitario}
                    onChange={(e) => setValorUnitario(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black"
                />
            </div>

            {/* Garantía */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Garantía:</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        className="w-20 px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black"
                        limit="0"
                    />
                    <div className="relative flex-1">
                        <select className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black appearance-none">
                            <option value="efectivo">Efectivo</option>
                            <option value="transferencia">Transferencia</option>
                            <option value="cedula">Cédula</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cantidad */}
            <div className="mb-4">
                <label className="block text-black font-medium mb-2">Cantidad:</label>
                <div className="flex items-center justify-center gap-6">
                    <button
                        type="button"
                        onClick={incrementsubstractionr}
                        className="w-12 h-12 flex bg-white rounded-2xl items-center justify-center text-2xl font-bold transition-colors"
                    >
                        <img src={adderImage} alt="" width={30} />
                    </button>
                    <div className="w-16 h-12 bg-gray-300 rounded-md flex items-center justify-center">
                        <span className="text-black font-medium text-lg">{cantidad}</span>
                    </div>
                    <button
                        type="button"
                        onClick={decrementar}
                        className="w-12 h-12 bg-white flex rounded-2xl items-center justify-center text-2xl font-bold transition-colors"
                    >
                        <img src={substractionImage} alt="" width={30} />
                    </button>
                </div>
            </div>

            {/* Total a pagar */}
            <div className="mb-6">
                <label className="block text-black font-medium mb-2">Total a pagar:</label>
                <div className="flex gap-2">
                    <div className="w-20 px-3 py-3 bg-gray-300 rounded-md flex items-center">
                        <span className="text-black font-medium">{total.toFixed(2)}</span>
                    </div>
                    <div className="relative flex-1">
                        <select className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:bg-white text-black appearance-none">
                            <option value="efectivo">Efectivo</option>
                            <option value="transferencia">Transferencia</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón Alquilar */}
            <button
                type="submit"
                className="w-full py-4 bg-[#644536] text-white font-medium text-lg rounded-lg hover:bg-[#544030] transition-colors"
            >
                Alquilar
            </button>
        </div>
    );
}