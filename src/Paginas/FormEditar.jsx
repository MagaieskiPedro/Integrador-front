import estilo  from "./FormEditar.module.css"

export function FormEditar(){
    return (
        <main className={estilo.container}>
            <section>
                <h1>Altere um dado: </h1>
                <form action="">
                    <label htmlFor="sensor">Sensor: 
                        <input type="text" name="sensor" id="sensor"/>
                    </label>
                    
                    <label htmlFor="mac_address">Endereço mac: 
                        <input type="text" name="mac_address" />
                    </label>
                    
                    <label htmlFor="unidade_med">Unidade de medida:
                        <input type="text" name="unidade_med" />
                    </label>
                    
                    <label htmlFor="latitude">Latitude:
                    <input type="text" name="latitude" />
                    </label>

                    <label htmlFor="longitude">Longitude:
                         <input type="text" name="longitude" />
                    </label>

                    <label htmlFor="status">Status: 
                        <input type="text" name="status" />
                    </label>
                    
                    <button>Alterar</button>
                </form>
            </section>
        </main>
    )
}