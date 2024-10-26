import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Knight from '../models/knight'


const Home = () => {
	const adjustKnightForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];
		if (window.innerWidth < 768)
			screenScale = [50, 50, 50];
		else
			screenScale = [30, 30, 30];
		return [ screenScale, screenPosition, rotation];
	}
	const [ knightScale, knightPosition , knightrotation] = adjustKnightForScreenSize();
  return (
	<section className='w-full h-screen relative'>
		{/*<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
			Popup
		</div>*/}


		<Canvas 
			className='w-full h-screen bg-transparent'
			camera={{ near: 0.1, far: 1000}}
		>
			<Suspense fallback={<Loader />}>
				<directionalLight position= {[1,1,1]} intensity={1}/>
				<ambientLight />
				<pointLight />
				<spotLight />
				<hemisphereLight />

				<Knight 
					position={knightPosition}
					scale={knightScale}
					rotation={knightrotation}
				/>
			</Suspense>
		</Canvas>
	</section>
  )
}

export default Home