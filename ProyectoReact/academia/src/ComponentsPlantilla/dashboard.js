import React from 'react';
import Menu from './menu';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <Menu></Menu>
            </div>
         );
    }
}
 
export default Dashboard;