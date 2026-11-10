
import useFormularioContacto from "../Hooks/useFormularioContacto";

const FormularioContacto = () => {

    const {form,cargando,handleChange,handleSubmit
    } = useFormularioContacto();

    return (
        <div className=" w-full min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to bg-purple-400 px-4">
            
            <form onSubmit={handleSubmit} className=" w-full max-w-sm bg-white rounded-xl shadow-xl p-8 space-y-6" >
                
                <div>
                    <h1 className="text-center text-2xl font-bold text-gray-800">contáctanos</h1>
                    <label className=" block text-sm font-medium text-gray-700 mb-1" > Nombre</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Ingrese su nombre" className=" w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none" focus:ring-2 focus:ring-indigo-500 />
                </div>

                <div> 
                    <label className=" block text-sm font-medium text-gray-700 mb-1" > Correo electrónico </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Ingrese su correo" className=" w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none" focus:ring-2 focus:ring-indigo-500 />
                </div>

                <div>
                    <label className=" block text-sm font-medium text-gray-700 mb-1" >  Mensaje </label>
                    <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Escriba su mensaje" rows={5} className=" w-full px-4 py-2 border border-gray-300 rounded-lg 
                    focus:outline-none" focus:ring-2 focus:ring-indigo-500 />
                </div>

                <button type="submit" disabled={cargando} className=" w-full py-2 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed " >
                    {cargando ? "Enviando..." : "Enviar mensaje"} 
                </button>
                <p className=" text-sm- text-center text-gray-500">Será un placer trabajar juntos </p>
            </form>

        </div>
    );
};

export default FormularioContacto;
