import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';
function Menu(){
	
	return(
	
		
			<nav className="Menu">
				<a href="/">
					<img className="Logo" src={Logo} alt="logo do souflix"/>	
				</a>
				
				<Button as='a' className="ButtonLink" href="/">
					novo vídeo	
				</Button>
				
			</nav>
			
	)
	
}

export default Menu;