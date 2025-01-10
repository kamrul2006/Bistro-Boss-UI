import React from 'react';
import ConBanner from '../Components/Contact/ConBanner';
import OurLocation from '../Components/Contact/ourLocation';
import CONTACTFORM from '../Components/Contact/CONTACTFORM';

const ContactUsLayout = () => {
    return (
        <div className='space-y-20 min-h-screen'>
            <ConBanner />

            <OurLocation />

            <CONTACTFORM />
        </div>
    );
};

export default ContactUsLayout;