import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './botton.css';
import { Animation } from './Animation';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Education from './Education';
import SkillBar from './SkillBar';

const About = () => {
	const [shoSkills, setSkills] = useState(false);

	const handelClickSkills = () => {
		setSkills(!shoSkills);
	};
	return (
		<div className='div'>
			<div className='aboutDiv'>
				<Animation>
					<h1> About Me </h1>
					<p>
						My name is Laleh Walizadeh , Dedicated and motivated Computer
						Science student with a passion for web development seeking an
						intership opportunity at CTI .Eager to contribute my technical
						skills and classrom knowledge to a real-world setting, while
						learning and growing as a web developer . Committed to producing
						high-quality and efficient web solution.
					</p>

					<h3> Education </h3>

					<Education />

					<h3> My Intrest & Hobbies </h3>
					<div>
						<p>
							Of course , cooding is one of my intrests , but besides this , I
							also have some other hobbies like drwing , painting , waching
							movies , travelling , scientific researches ,reading books like
							story books , psychology books , graphic works and sleep 🥴. I
							also like social network very much and sometimes I try to do
							useful and usable activities on my page or channel .
						</p>
					</div>

					<a href='/contact' className='btn_design'>
						{' '}
						Contact Me{' '}
					</a>

					<button className='btn_design' onClick={handelClickSkills}>
						{' '}
						Skills
					</button>
					<CSSTransition
						in={shoSkills}
						timeout={100}
						classNames='fade'
						unmountOnExit>
						<div className='page'>
							{' '}
							<SkillBar />{' '}
						</div>
					</CSSTransition>
				</Animation>
			</div>
		</div>
	);
};
export default About;
