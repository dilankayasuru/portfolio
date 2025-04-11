
import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

export function MysqlLogo() {

    const { nodes, materials } = useGLTF('/assets/mysql.glb') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };
    
    return (
        <group dispose={null}>
            <group scale={0.7}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials['Material.001']}
                    rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve010.geometry}
                    material={materials['Material.048']}
                    position={[0, 0, 0.095]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[18.689, 13.456, 18.689]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/assets/mysql.glb');