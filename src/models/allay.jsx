import { useRef, useEffect } from 'react';
import allayScene from '../assets/3d/allay.glb'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const allay = () => {
	const allayRef = useRef();
	const {scene , animations} = useGLTF(allayScene);
	const {actions} = useAnimations(animations, allayRef);

    useEffect(() => {
        if (actions['animation.juhih.idle']) {
            actions['animation.juhih.idle'].play();
        }
    }, [actions]);

	useFrame(({clock, camera}) => {
		if (allayRef.current) {
		allayRef.current.position.y = Math.sin(clock.elapsedTime) * 0.4 + 2;

		if (allayRef.current.position.x > camera.position.x + 10) {
			allayRef.current.rotation.y = Math.PI;
		}
		else if (allayRef.current.position.x < camera.position.x - 10) {
			allayRef.current.rotation.y = 0;
		}

		if (allayRef.current.rotation.y === 0) {
			allayRef.current.position.x += 0.01;
			allayRef.current.position.z -= 0.01;
		}
		else {
			allayRef.current.position.x -= 0.01;
			allayRef.current.position.z += 0.01;
		}
	}
	})

  return (
	<mesh position={[-1, 1, 1]} scale={[0.2, 0.2, 0.2]} ref={allayRef}>
		<primitive object={scene} />
	</mesh>
  )
}

export default allay