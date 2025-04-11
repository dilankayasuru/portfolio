import { useGLTF } from '@react-three/drei';
import { Material, Mesh } from 'three';

export function MongodbLogo() {

    const { nodes, materials } = useGLTF('/assets/mongo.glb') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>;
    };

    return (
        <group dispose={null} scale={0.6}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013.geometry}
                material={materials['SVGMat.010']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_1.geometry}
                material={materials['SVGMat.011']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_2.geometry}
                material={materials['SVGMat.012']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_3.geometry}
                material={materials['SVGMat.013']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_4.geometry}
                material={materials['SVGMat.014']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_5.geometry}
                material={materials['SVGMat.015']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_6.geometry}
                material={materials['SVGMat.016']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_7.geometry}
                material={materials['SVGMat.017']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_8.geometry}
                material={materials['SVGMat.018']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_9.geometry}
                material={materials['SVGMat.019']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_10.geometry}
                material={materials['SVGMat.020']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_11.geometry}
                material={materials['SVGMat.021']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_12.geometry}
                material={materials['SVGMat.022']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_13.geometry}
                material={materials['SVGMat.023']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_14.geometry}
                material={materials['SVGMat.024']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_15.geometry}
                material={materials['SVGMat.025']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve013_16.geometry}
                material={materials['Material.001']}
            />
        </group>
    )
}

useGLTF.preload('/assets/mongo.glb');
