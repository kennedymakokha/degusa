import React, { useState } from 'react';
import FormInput from "../../components/UI/Input";



const From = () => {
    const [loading,setLoading] = useState(false)
    const [body, setBody] = useState({
        first_name: "",
        last_name: '',
        email_address: "",
        phone_no: "",
        con_message: ''

    })
    return (

        <div className="contact-form-wrap">
           {loading&& <div>Kennedy makokha</div>}
            <form id="contact-form" >
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            setBody={setBody}
                            body={body}
                            name={'first_name'}
                            placeholder={'First Name *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            setBody={setBody}
                            body={body}
                            name={'last_name'}
                            placeholder={'Last Name *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            setBody={setBody}
                            body={body}
                            name={'email_address'}
                            placeholder={'Email address *'}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            setBody={setBody}
                            body={body}
                            name={'phone_no'}
                            placeholder={'Phone No'}
                        />
                    </div>

                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            name={'con_message'}
                            setBody={setBody}
                            body={body}
                            placeholder={'Write Your Message *'}
                        />

                        <FormInput
                            tag={'button'}
                            body={body}
                            classes={'btn-outline'}
                        />

                        <div className="form-message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;