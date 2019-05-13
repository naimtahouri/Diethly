import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
            <div className='row'>
                <div className='col-12 m-0 p-0'>
                    <div className='nav-bar'>
                        <div className='brand-box'>
                            <h1 className='nav-brand'>.Diethly</h1>
                        </div>
                        <div className='box-navlink'>
                            <NavLink to="/"><h2 className='link-item'>Home</h2></NavLink>
                            <NavLink to="/Discover"><h2 className='link-item'>Découvrir</h2></NavLink>
                            <NavLink to="/Liste"><h2 className='link-item'>Mes favoris</h2></NavLink>
                            <NavLink to="/Advices"><h2 className='link-item'>Conseils</h2></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;