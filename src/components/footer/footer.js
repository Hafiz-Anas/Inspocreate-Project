import Image from 'next/image';

const Footer = () => {
	return (
		<div className='footer-section'>
			<div className='wrapper row'>
				<div className='col-3 footer-col'>
					<div className='navbar-logo'>
						<Image src='/images/Group Copy.svg' width={100} height={100} />
						<h1>Inspocreate</h1>
					</div>
				</div>
				<div className='col-3 footer-col'>
					<ul>
						<h5>Useful Links</h5>
						<li>
							<a href='#'>About Us</a>
						</li>
						<li>
							<a href='#'>How its work</a>
						</li>
					</ul>
				</div>
				<div className='col-3 footer-col'>
					<ul>
						<li>
							<a href='#'>Terms of Sevices</a>
						</li>
						<li>
							<a href='#'>Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className='col-3 footer-col'>
					<ul>
						<li>
							<a href='#'>Contact us</a>
						</li>
					</ul>
				</div>
			</div>
			<p>Copyright 2020 all rights are reserved</p>
		</div>
	);
};
export default Footer;
