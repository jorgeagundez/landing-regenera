import React, { useState } from 'react';

const Form = () => {

    // Crear el State de Form
    const [formData, updateFormData] = useState({
        name: JSON.parse(localStorage.getItem('name')) || '',
        surname: JSON.parse(localStorage.getItem('surname')) || '',
        email: JSON.parse(localStorage.getItem('email')) || '',
        phone: JSON.parse(localStorage.getItem('phone')) || '',
        comment: JSON.parse(localStorage.getItem('comment')) || '',
    });

    // Extraer los valores
    const { name, surname, email, phone, comment } = formData;

    // Crear el State de los Errores
    const [error, updateError] = useState(false);

    // Crear el State de mensaje success
    const [success, updateSuccess] = useState(false);

    // Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
    
        let type = e.target.type;
        let name = e.target.name;
        let value = e.target.value;

        updateFormData({
            ...formData,
            [name] : value
        })

        updateError(errorInFormat(type, value));

        localStorage.setItem([name], JSON.stringify(value));
    }

    const errorInFormat = (type, value) => {
        
        let newValue = value.trim();
        var bmpDigits = /[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0AE6\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/;
        var hasNumber = RegExp.prototype.test.bind(bmpDigits);
        let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // validación numérica
        if (type === 'text') {
            return hasNumber(newValue);
        }

        // validación email
        if (type === 'email') {
            return !mailFormat.test(newValue);
        }
    }

    const submitForm = e => {
        e.preventDefault();

        if (name.trim() === '' ||
            surname.trim() === '' ||
            email.trim() === ''
        ) {
            updateError(true);

            return;
        }

        if (!e.target.policy.checked) {
            updateError(true);

            return; 
        }

        updateError(false);
        updateSuccess(true);

        updateFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            comment: '',
        })

        localStorage.clear();
    }

    return (
        <section className="form u-padding">
            <h2>Formulario de contacto</h2>

            {error && <p>Hay errores. Revisa los siguientes campos: </p>}

            {success ?
                <p>Gracias por tu solicitud. Nos pondremos en contacto contigo en a menor brevedad posible</p>
                :
                <form
                    id='contact-form'
                    name='contact-form'
                    onSubmit={submitForm}
                    method="POST"
                    data-netlify="true"
                >
                    <div>
                        <label
                            htmlFor="name"
                        >Nombre</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Introduce tu nombre"
                            onChange={actualizarState}
                            value={name}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="surname"
                        >Apellidos</label>
                        <input
                            id="surname"
                            type="text"
                            name="surname"
                            placeholder="Introduce tus apellidos"
                            onChange={actualizarState}
                            value={surname}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                        >Correo electrónico</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Introduce tu correo electrónico"
                            onChange={actualizarState}
                            value={email}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                        >Teléfono</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Teléfono de contacto"
                            onChange={actualizarState}
                            value={phone}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                        >
                            Comentarios:
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Deja tu comentario"
                                value={comment}
                                onChange={actualizarState}
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="policy"
                        >Política de privacidad</label>
                        <input
                            id="policy"
                            name="policy"
                            type="checkbox"
                        />
                    </div>

                    <button
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            }
               
        </section>
    )
}

export default Form;