import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = ({title}) => (
    <Helmet>
        <link rel='icon' href="https://png.pngtree.com/png-clipart/20190924/original/pngtree-sun-icon-design-png-image_4816760.jpg" />
        <title>Minimus | {title}</title>
    </Helmet>
)

export default HelmetComponent;