import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

export function ReactLogo() {

    const { nodes, materials } = useGLTF('/assets/react.glb') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };

    return (
        <group dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={32}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve010.geometry}
                    material={materials['SVGMat.007']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve010_1.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/assets/react.glb');