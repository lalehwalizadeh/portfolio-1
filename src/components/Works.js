import React, { useState } from 'react';
import Data from './Data';
import './Works.css';
import { FaGithub } from 'react-icons/fa';
import PaginationWorks from './PaginationWorks';
import { Animation } from './Animation';

export default function Search() {
	const [filter, setFilter] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(3);

	const searchText = (event) => {
		setFilter(event.target.value);
	};
	let dataSearch = Data.cardData.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(filter.toString().toLowerCase())
		);
	});

	const lastPostIndex = currentPage * postPerPage;
	const firstPostIndex = lastPostIndex - postPerPage;
	const currentPost = dataSearch.slice(firstPostIndex, lastPostIndex);

	return (
		<section className=' design'>
			<div className='row '>
				<h1> My Works </h1>

				<div className='col-12 mb-5'>
					<div className='mb-2 col-8 mx-auto '>
						<input
							type='text'
							className='form-control '
							placeholder='Search '
							value={filter}
							onChange={searchText.bind(this)}
						/>
					</div>
				</div>

				{currentPost.map((item) => {
					return (
						<div className='pic-card flip'>
							<Animation>
								<div className='shadow'>
									<Animation>
										<img
											src={item.img}
											alt='pictures'
											className='card-img-top IMG'
										/>
									</Animation>
									<div>
										<h5 className='worksTitle'> {item.title} </h5>
										<p> {item.dec} </p>
									</div>
									<a className='efect' href={item.link}>
										{' '}
										view on <FaGithub />
									</a>
								</div>
							</Animation>
						</div>
					);
				})}
			</div>

			<PaginationWorks
				totalPost={dataSearch.length}
				postPerPage={postPerPage}
				setCurrentPage={setCurrentPage}
				setPostPerPage={setPostPerPage}
				currentpage={currentPage}
			/>
		</section>
	);
}
