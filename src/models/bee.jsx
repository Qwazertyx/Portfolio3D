import React, { useEffect, useRef } from 'react';
import beeScene from '../assets/3d/bee.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bee = ({ isRotating, ...props }) => {
	const ref = useRef();
	const { scene, animations } = useGLTF(beeScene);
	const { actions } = useAnimations(animations, ref);

	useEffect(() => {
		if(isRotating){
			actions['Take 001'].play();
		}
		else {
			actions['Take 001'].stop();
		}
	}, [actions, isRotating]);


	return (
	  <mesh {...props} ref={ref}>
	    <primitive object={scene} />
	  </mesh>
	);
}

export default Bee;