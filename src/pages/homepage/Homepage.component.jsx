import React from 'react';
import { Switch, Route} from 'react-router-dom'

import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";


const Homepage = () => {
    return (
        <div>
            <Directory/>
        </div>
    );
};

export default Homepage;
