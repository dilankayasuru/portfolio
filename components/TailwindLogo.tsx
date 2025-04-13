import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

useGLTF.preload('/assets/tailwind.glb');

export function TailwindLogo() {

    const { nodes, materials } = useGLTF('/assets/tailwind.glb', 'https://www.gstatic.com/draco/v1/decoders/') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };

    return (
        <group dispose={null}>
            <group scale={0.7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube020.geometry}
                    material={materials['Material.021']}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve007.geometry}
                    material={materials['Material.049']}
                    position={[0, 0, 0.095]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={5.573}
                />
            </group>
        </group>
    )
}