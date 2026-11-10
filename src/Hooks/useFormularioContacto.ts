
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { formularioContacto } from "../Types/contactos";
import Swal from "sweetalert2";

const USUARIO_CONTACTO: formularioContacto = {
    nombre: "",
    email: "",
    mensaje: "",
};

const useFormularioContacto = () => {

    const [form, setForm] = useState<formularioContacto>(USUARIO_CONTACTO);

    const [cargando, SetCargando] = useState<boolean>(false);

  
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (
            !form.nombre.trim() ||
            !form.email.trim() ||
            !form.mensaje.trim()
        ) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Todos los campos son obligatorios",
            });
            return;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email.trim())) {
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Por favor, ingrese un correo electrónico válido",
            });
            return;
        }

        // Simulando carga
        SetCargando(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            Swal.fire({
                icon: "success",
                title: "Formulario enviado correctamente",
                text: "¡Gracias por contactarnos!",
            });

            // Limpiar formulario
            setForm(USUARIO_CONTACTO);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo enviar el formulario",
            });

        } finally {
            SetCargando(false);
        }
    };

    return {
        form,
        cargando,
        handleChange,
        handleSubmit,
    };
};

export default useFormularioContacto;
