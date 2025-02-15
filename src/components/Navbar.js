import React from 'react';
import './link.css';

export default function Navbar() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						{' '}
						Portfolio{' '}
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item '>
								<a className='nav-link' href='/'>
									Home
								</a>
							</li>

							<li className='nav-item '>
								<a className='nav-link' href='/about'>
									{' '}
									About Me{' '}
								</a>
							</li>

							<li className='nav-item '>
								<a className='nav-link' href='/projects'>
									{' '}
									Projects{' '}
								</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link' href='/contact'>
									{' '}
									Contact Me{' '}
								</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link' href='/works'>
									{' '}
									Works{' '}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
