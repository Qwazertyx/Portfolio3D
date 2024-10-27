import { Link } from "react-router-dom";
import {arrow} from '../assets/icons';

const Infobox = ({ text, link, btnText }) => (
	<div className='info-box'>
		<p className="font-medium sm:text-xl text-center" >{text}</p>
		<Link to={link} className="neo-brutalism-white neo-btn" >
			{btnText}
			<img src={arrow} className="w-4 h-4 object-contain" />
		</Link>
	</div>
)

const renderContent = {
	1: (
		<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>
			Hi, I am <span className="font-semibold">Victor</span>👋
			<br />
			An IT Development student from France.
		</h1>
	),
	2: (
		<Infobox
			text = "Led multiple projects from concept to delivery, Curious to see more?"
			link = "/projects"
			btnText="Visit my portfolio"
		/>
	),
	3: (
		<Infobox
			text = "Looking for an internship in IT development for 4 to 6 months starting in April"
			link = "/about"
			btnText="Learn more"
		/>
	),
	4: (
		<Infobox
			text = "Need a project done or looking for a dev? Let's talk!"
			link = "/contact"
			btnText="Contact me"
		/>
	),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent [currentStage] || null

}

export default HomeInfo