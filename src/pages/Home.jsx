import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Knight from '../models/knight'
import Sky from '../models/Sky'
import Allay from '../models/allay'
import Bee from '../models/bee'
import HomeInfo from '../components/HomeInfo'


const Home = () => {

	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	const adjustKnightForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -15, -40];
		let rotation = [0.1, 4.7, 0];
		if (window.innerWidth < 768)
			screenScale = [25, 25, 25];
		else
			screenScale = [45, 45, 45];
		return [ screenScale, screenPosition, rotation];
	}
	const [ knightScale, knightPosition , knightrotation] = adjustKnightForScreenSize();

	const adjustBeeForScreenSize = () => {
		let screenScale, screenPosition;
		if (window.innerWidth < 768){
			screenScale = [1, 1, 1];
			screenPosition = [0, -0.2, 3];
		}
		else{
			screenScale = [1.1, 1.1, 1.1];
			screenPosition = [0, 0, 4];
		}
		return [ screenScale, screenPosition];
	}
	const [ beeScale, beePosition] = adjustBeeForScreenSize();

  return (
	<section className='w-full h-screen relative bg-gray-950 '>
		<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
			{currentStage && <HomeInfo currentStage={currentStage}/>}
		</div>


		<Canvas 
			className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
			camera={{ near: 0.1, far: 1000}}
		>
			<Suspense fallback={<Loader />}>
				<directionalLight position= {[1,1,1]} intensity={1}/>
				<ambientLight intensity={1}/>
				<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
				<Allay/>
				<Sky isRotating={setIsRotating}/>
				<Knight 
					position={knightPosition}
					scale={knightScale}
					rotation={knightrotation}
					isRotating={isRotating}
					setIsRotating={setIsRotating}
					setCurrentStage={setCurrentStage}
				/>
				<Bee
					scale={beeScale}
					position={beePosition}
					isRotating={isRotating}
					rotation={[0, 20, 0]}
				/>
			</Suspense>
		</Canvas>
	</section>
  )
}

export default Home