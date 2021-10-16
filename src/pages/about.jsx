import React from 'react';
import Layout from '../components/Layout';
import WhyChooseUs from "../components/WhyChooseUs"
import PeopleSayAboutUs from "../components/PeopleSayAboutUs"

const about = () => {
    return (
        <>
            <Layout>
                <PeopleSayAboutUs />
                <WhyChooseUs />
            </Layout>
        </>
    );
}
export default about;