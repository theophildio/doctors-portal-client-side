import React from "react";
import { Link } from "react-router-dom";
import FooterBg from '../../../assets/images/footer.png';

const Footer = () => {
  const getDate = new Date();
  const currentYear = getDate.getFullYear();
	return (
		<footer className="pt-16" style={{
      backgroundImage: `url(${FooterBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
			<div className="footer px-4 lg:px-12 bg-base text-accent flex flex-col lg:flex-row justify-between mb-20">
				<div>
					<span className="footer-title">Services</span>
					<Link to="/" className="link link-hover">
						Emergency Checkup
					</Link>
					<Link to="/" className="link link-hover">
						Monthly Checkup
					</Link>
					<Link to="/" className="link link-hover">
						Monthly Checkup
					</Link>
					<Link to="/" className="link link-hover">
						Deep Checkup
					</Link>
				</div>
				<div>
					<span className="footer-title">ORAL HEALTH</span>
					<Link to="/" className="link link-hover">
						Fluoride Treatment
					</Link>
					<Link to="/" className="link link-hover">
						Cavity Filling
					</Link>
					<Link to="/" className="link link-hover">
						Teath Whitening
					</Link>
				</div>
				<div>
					<span className="footer-title">OUR ADDRESS</span>
					<p>New York - 101010 Hudson</p>
				</div>
			</div>
			<div className="text-center pb-8">
				<p className="capitalize">Copyright © {currentYear} - All right reserved | Developed by <a href="https://github.com/theophildio" target="_blank" rel="noreferrer" className="text-primary">Theophil Dio</a></p>
			</div>
		</footer>
	);
};

export default Footer;
