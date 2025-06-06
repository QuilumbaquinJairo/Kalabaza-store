import imagen from './assets/Kalabazalogo.webp';

export const KalabazaApp = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen flex-col">
                <img src={imagen} alt="" />
                <button>Ingresar</button>
            </div>
        </>
    )
}

