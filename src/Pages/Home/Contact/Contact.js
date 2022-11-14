import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    const handleContacts = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log(email,subject, message);

    }

    return (
        <section style={{
            backgroundImage: `url(${appointment})`
        }}
        className='py-16 mb-4'>
            <div className='text-center'>
                <h4 className='text-lg text-green-500 font-bold'>Contact Us</h4>
                <h1 className="mt-1 mx-1 text-white text-2xl md:text-3xl font-normal">Stay connected with us</h1>
            </div>

            <form onSubmit={handleContacts}
                className='p-3 mt-4 grid grid-cols-1 gap-2 md:w-96 mx-auto'>

                <input name='email' type="email" placeholder="Email Address" className="input w-full input-sm " />

                <input name='subject' type="text" placeholder="Subject" className="input w-full input-sm" />

                <textarea name='message' className="textarea text-black mb-5" placeholder="Your message">
                </textarea>
                
                <input type='submit'
                    className=" w-24 mx-auto btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" placeholder='Submit' />
                
            </form>
        </section>
    );
};

export default Contact;