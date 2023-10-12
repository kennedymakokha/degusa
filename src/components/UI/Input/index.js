import React from 'react';

const FormInput = ({ tag, type, name, placeholder, classes, body, setBody }) => {

    const Post = async (data) => {
        // var myHeaders = new Headers();
        // myHeaders.append("x-access-token", "goldapi-1pgf6rlmylsbqq-io");
        // myHeaders.append("Content-Type", "application/json");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
        //     .then(response => response.text())
        //     .then(result => {

        //         console.log(result)
        //     })
        //     .catch(
        //     // error => console.log('error', error)
        // );


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('https://marapesa.com/api/mail', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };



    const submit = async (e) => {
      
        try {
            e.preventDefault()
            const data = {
                name: `${body.first_name} ${body.last_name}`,
                phone: `${body.phone_no}`,
                email: `${body.email_address}`,
                company: "Degusa Goldhandel AG ",
                msg: `${body.con_message}`,
                to_mail: 'info@degusagoldhandelag.com'

            }

            await Post(data)
            alert('Thank you ')
            window.location.reload(false);
            setBody({
                first_name: "",
                last_name: '',
                email_address: "",
                phone_no: "",
                con_message: ''
            })
            
            //console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="single-input-item">

            <label>
                {(() => {
                    if (tag === 'input') {
                        return <input type={type}  name={name} placeholder={placeholder} className={classes} onChange={(e) => {
                            setBody((prevState) => ({
                                ...prevState, [e.target.name]: e.target.value
                            }))
                        }} />
                    } else if (tag === 'textarea') {
                        return <textarea name={name} cols="30" rows="7" placeholder={placeholder} className={classes} required
                            onChange={(e) => setBody((prevState) => ({
                                ...prevState, [e.target.name]: e.target.value
                            }))} />
                    } else if (tag === 'button') {
                        return <button className={`btn-outline ${classes}`} onClick={(e) => submit(e)}>Send Message</button>
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;