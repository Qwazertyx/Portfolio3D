/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Dasha Klyusova (https://sketchfab.com/AnoFail)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hollow-knight-5a76d93e39984f829abd6f406562265b
Title: Hollow Knight
*/


import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import knightscene from '../assets/hollow_knight/public/hollow_knight.glb'; //

const Knight = (props) => {
	const knightRef = useRef();
  const { nodes, materials } = useGLTF(knightscene)
  return (
    <a.group ref ={knightRef} {...props} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.068}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['null']}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['None.001']}
        />
      </group>
    </a.group>
  )
}

export default Knight;
