import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

useGLTF.preload('/assets/laravel.glb');

export function LaravelLogo() {

    const { nodes, materials } = useGLTF('/assets/laravel.glb', 'https://www.gstatic.com/draco/v1/decoders/') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };

    return (
        <group dispose={null} scale={0.6} rotation={[0, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube019_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube019_2.geometry}
                material={materials['Material.002']}
            />
        </group>
    )
}