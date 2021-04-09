import React from 'react';

import { Helmet } from 'react-helmet';


const HelmetComponent = ({title}) => (
    <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel='icon' href="https://png.pngtree.com/png-clipart/20190924/original/pngtree-sun-icon-design-png-image_4816760.jpg" />
        <title>{title} | WWW </title>
    </Helmet>
)

export default HelmetComponent;