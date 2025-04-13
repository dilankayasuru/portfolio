import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

useGLTF.preload('/assets/figma.glb');

export function FigmaLogo() {

  const { nodes, materials } = useGLTF('/assets/figma.glb', 'https://www.gstatic.com/draco/v1/decoders/') as unknown as {
    nodes: Record<string, Mesh>;
    materials: Record<string, Material>;
  };

  return (
    <group dispose={null}>
      <group scale={0.5} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_1.geometry}
          material={materials['SVGMat.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_2.geometry}
          material={materials['SVGMat.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_3.geometry}
          material={materials['SVGMat.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_4.geometry}
          material={materials['SVGMat.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_5.geometry}
          material={materials['SVGMat.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve005_6.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  )
}