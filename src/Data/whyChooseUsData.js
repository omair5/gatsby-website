import React from 'react';
import { BiWorld } from "react-icons/bi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const WhyChooseUsData = [
    {
        Icon: < BiWorld style={{ color: '#047bf1', fontSize: '70px' }} />,
        title: 'Over 100 Destinations',
        desc: 'Travel To Over 100 Unique Places'
    },
    {
        Icon: < MdOutlineAirplanemodeActive style={{ color: '#f3a82e', fontSize: '70px' }} />,
        title: '1 Million Trips Made',
        desc: 'Over 1 Million Trips Completed'
    },
    {
        Icon: < MdTimer style={{ color: '#f34f2e', fontSize: '70px' }} />,
        title: 'Fastest Support',
        desc: 'Access Our Support Team 24/7'
    },
    {
        Icon: < FaMoneyCheck style={{ color: '#3af576', fontSize: '70px' }} />,
        title: 'Best Deals',
        desc: 'We Offer The Best Prices'
    }
]