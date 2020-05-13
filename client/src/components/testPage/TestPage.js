import React, {useEffect, useState} from 'react';

import './TestPage.css';

function TestPage(props) {
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		async function blogFetchFunction() {
			await fetch('http://localhost:5000/api/blogs')
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setBlog(data);
				})
				.catch(console.error);
		}
		blogFetchFunction();
	}, []);

	return (
		<div>
			<div className='blogGrid'>
				{blog && (
					<div>
						<div className='testUL'>
							{blog.map((b, index) => (
								<div key={index} className='card'>
									<div className='photoBG' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(http://localhost:5000/api/blog/photo/${b.slug})`}}>
										<div className='cardTitle'>
											<h3>{b.title}</h3>
											<p>{b.postedBy.username}</p>
										</div>
									</div>
									<div className='cardexcerpt'>
										<p>{b.excerpt}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default TestPage;
