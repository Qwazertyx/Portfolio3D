/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: madexc (https://sketchfab.com/madexc)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/private-island-1f6e2ed818e446ffa6e2178717aa4981
Title: private-island
*/


import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import mcislandScene from '../assets/mcisland/public/mcisland.glb'; //

const McIsland = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
	const mcislandRef = useRef();
	const { gl, viewport } = useThree();
	const { nodes, materials } = useGLTF(mcislandScene)

	const lastX = useRef(0);
	const rotationSpeed = useRef(0);
	const dampingFactor = 0.80;

	const handlePointerDown = (e) => { 
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(true);

		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		lastX.current = clientX;
	}
	const handlePointerUp = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(false);

	}
	const handlePointerMove = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if(isRotating){
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;
			const delta = (clientX - lastX.current) / viewport.width;
			mcislandRef.current.rotation.y += delta * Math.PI * 0.005;
	
			lastX.current = clientX;
			rotationSpeed.current = delta * Math.PI * 0.005;
		}
	}
	const handleKeyDown = (e) => {
		if(e.key === 'ArrowLeft'){
			if (!isRotating) setIsRotating(true);
				mcislandRef.current.rotation.y += Math.PI * 0.01;
				rotationSpeed.current = 0.0125;
		}
		else if(e.key === 'ArrowRight'){
			if (!isRotating) setIsRotating(true);
				mcislandRef.current.rotation.y -= Math.PI * 0.01;
				rotationSpeed.current = -0.0125;
		}
	}

	const handleKeyUp = (e) => {
		if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
			setIsRotating(false);
		}
	}

	useFrame(() => {
		// If not rotating, apply damping to slow down the rotation (smoothly)
		if (!isRotating) {
		  rotationSpeed.current *= dampingFactor;
		  // Stop rotation when speed is very small
		  if (Math.abs(rotationSpeed.current) < 0.001) {
			rotationSpeed.current = 0;
		  }
		  mcislandRef.current.rotation.y += rotationSpeed.current;
		} else {
		  // When rotating, determine the current stage based on island's orientation
		  const rotation = mcislandRef.current.rotation.y;
		  const normalizedRotation =
			((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
	
		  // Set the current stage based on the island's orientation
		  switch (true) {
			case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
			  setCurrentStage(4);
			  break;
			case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
			  setCurrentStage(3);
			  break;
			case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
			  setCurrentStage(2);
			  break;
			case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
			  setCurrentStage(1);
			  break;
			default:
			  setCurrentStage(null);
		  }
		}
	  });

	  useEffect(() => {
		const canvas = gl.domElement;
		canvas.addEventListener('pointerdown', handlePointerDown);
		canvas.addEventListener('pointerup', handlePointerUp);
		canvas.addEventListener('pointermove', handlePointerMove);
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			canvas.removeEventListener('pointerdown', handlePointerDown);
			canvas.removeEventListener('pointerup', handlePointerUp);
			canvas.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		}
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);


  return (
    <a.group ref={mcislandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.068}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Anvil}/>
        <mesh geometry={nodes.Object_3.geometry} material={materials.material}/>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Bookshelf}/>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Chest}/>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Cobblestone_Stairs}/>
        <mesh geometry={nodes.Object_7.geometry} material={materials.Colored_Terracotta}/>
        <mesh geometry={nodes.Object_8.geometry} material={materials.Crafting_Table}/>
        <mesh geometry={nodes.Object_9.geometry} material={materials.Dandelion}/>
        <mesh geometry={nodes.Object_10.geometry} material={materials.Diamond_Ore}/>
        <mesh geometry={nodes.Object_11.geometry} material={materials.Dirt}/>
        <mesh geometry={nodes.Object_12.geometry} material={materials.Enchanting_Table}/>
        <mesh geometry={nodes.Object_13.geometry} material={materials.Farmland}/>
        <mesh geometry={nodes.Object_14.geometry} material={materials.Fence}/>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Flower_Pot}/>
        <mesh geometry={nodes.Object_16.geometry} material={materials.Furnace}/>
        <mesh geometry={nodes.Object_17.geometry} material={materials.Gold_Ore}/>
        <mesh geometry={nodes.Object_18.geometry} material={materials.Grass}/>
        <mesh geometry={nodes.Object_19.geometry} material={materials.Grass_Block}/>
        <mesh geometry={nodes.Object_20.geometry} material={materials.Gravel}/>
        <mesh geometry={nodes.Object_21.geometry} material={materials.Hay_Bale}/>
        <mesh geometry={nodes.Object_22.geometry} material={materials.Jukebox}/>
        <mesh geometry={nodes.Object_23.geometry} material={materials.Mob_Head}/>
        <mesh geometry={nodes.Object_24.geometry} material={materials.Oak_Leaves}/>
        <mesh geometry={nodes.Object_25.geometry} material={materials.Oak_Log}/>
        <mesh geometry={nodes.Object_26.geometry} material={materials.Poppy}/>
        <mesh geometry={nodes.Object_27.geometry} material={materials.Pumpkin}/>
        <mesh geometry={nodes.Object_28.geometry} material={materials.Rail}/>
        <mesh geometry={nodes.Object_29.geometry} material={materials.Stationary_Water}/>
        <mesh geometry={nodes.Object_30.geometry} material={materials.Stone}/>
        <mesh geometry={nodes.Object_31.geometry} material={materials.Stone_Bricks}/>
        <mesh geometry={nodes.Object_32.geometry} material={materials.Sunflower}/>
        <mesh geometry={nodes.Object_33.geometry} material={materials.Torch}/>
        <mesh geometry={nodes.Object_34.geometry} material={materials.Wheat}/>
      </group>
    </a.group>
  )
}

export default McIsland;