import { useState } from 'react';
import './Follow.css';
import React from 'react';
import Map from './Map';
import './botton.css';
import { Animation } from './Animation';
import {
	FaTwitter,
	FaTelegram,
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
	const [enteredName, setName] = useState('');
	const [enteredPhone, setPhone] = useState('');
	const [enteredSubject, setSubject] = useState('');
	const [enteredMessege, setMessege] = useState('');

	const handelInputChange = (identifire, value) => {
		if (identifire === 'Name') {
			setName(value);
		} else if (identifire === 'Phone') {
			setPhone(value);
		} else if (identifire === 'Subject') {
			setSubject(value);
		} else if (identifire === 'Messege') {
			setMessege(value);
		}
	};

	const style = {
		textAlign: 'start',
		justifyContent: 'start',
		color: 'balck',
	};
	const handelSubmitData = (event) => {
		event.preventDefault();

		setName('');
		setPhone('');
		setSubject('');
		setMessege('');
	};

	const iconSize = {
		height: 25,
		width: 20,
		color: 'rgba(27, 112, 223, 0.71)',
	};
	return (
		<div className='design'>
			<Animation>
				<h1> Contact Me </h1>

				<div className='display '>
					<form style={style} onSubmit={handelSubmitData}>
						<input
							type='text'
							placeholder='name '
							className='btn_design input-control'
							value={enteredName}
							onChange={(event) => {
								handelInputChange('Name', event.target.value);
							}}
							required
						/>
						<input
							type='text'
							placeholder='phone'
							className='btn_design input-control'
							value={enteredPhone}
							onChange={(event) => {
								handelInputChange('Phone', event.target.value);
							}}
							required
						/>
						<input
							type='text'
							placeholder='subject'
							className='btn_design input-control'
							value={enteredSubject}
							onChange={(event) => {
								handelInputChange('Subject', event.target.value);
							}}
							required
						/>
						<textarea
							className='btn_design txt input-control'
							placeholder='messege'
							value={enteredMessege}
							onChange={(event) => {
								handelInputChange('Messege', event.target.value);
							}}
							required
						/>

						<button type=' button' className='btn_design'>
							{' '}
							Send{' '}
						</button>
					</form>
				</div>

				<div className='display '>
					<h5> Email </h5>
					<p> lalah.walizadah2022@gmail.com </p>

					<h5> Phone </h5>
					<p> +93 790 408 842 </p>

					<h5> Follow Me </h5>

					<div className='wrap'>
						<div className='butn'>
							<div className='icon'>
								<a
									href='https://x.com/lwalizadeh?s=11&t=8mujEK_kxt7z7wytRsNxsg'
									className='anim'>
									<FaTwitter style={iconSize} />
								</a>
							</div>
							<span>Twitter</span>
						</div>

						<div className='butn'>
							<div className='icon'>
								<a href='https://t.me/Luna_Suk' className='anim'>
									<FaTelegram style={iconSize} />
								</a>
							</div>
							<span> Telegram </span>
						</div>

						<div className='butn'>
							<div className='icon'>
								<a href='https://facebook.com/' className='anim'>
									<FaFacebook style={iconSize} />
								</a>
							</div>
							<span> Facebook</span>
						</div>

						<div className='butn'>
							<div className='icon'>
								{' '}
								<a
									href='https://www.instagram.com/lalehwalizadeh?igshid=OGQ5ZDc2ODk2ZA== '
									className='anim'>
									<FaInstagram style={iconSize} />
								</a>
							</div>
							<span>Instagram</span>
						</div>
						<div className='butn'>
							<div className='icon'>
								<a href='https://wa.me/+93790408842' className='anim'>
									<FaWhatsapp style={iconSize} />
								</a>
							</div>
							<span> Whatsapp</span>
						</div>
					</div>
				</div>

				<div className='display '>
					<Map />
				</div>
			</Animation>
		</div>
	);
}
