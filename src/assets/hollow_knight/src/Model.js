/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Dasha Klyusova (https://sketchfab.com/AnoFail)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hollow-knight-5a76d93e39984f829abd6f406562265b
Title: Hollow Knight
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('../public/hollow_knight.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.068}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['null']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['None.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/hollow_knight.glb')
