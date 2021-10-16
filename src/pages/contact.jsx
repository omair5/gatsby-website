import React from 'react';
import Layout from '../components/Layout';
import PeopleSayAboutUs from "../components/PeopleSayAboutUs"
import SignUp from "../components/SignUp"
import WhyChooseUs from "../components/WhyChooseUs"

const Contact = () => {
    return (
        <Layout>
            <SignUp />
            <PeopleSayAboutUs />
            <WhyChooseUs />
        </Layout>
    );
}

export default Contact;