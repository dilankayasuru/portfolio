"use client"
import { FigmaLogo } from "@/components/FigmaLogo";
import { LaravelLogo } from "@/components/LaravelLogo";
import { MongodbLogo } from "@/components/MongodbLogo";
import { MysqlLogo } from "@/components/MysqlLogo";
import { NodejsLogo } from "@/components/NodejsLogo";
import { ReactLogo } from "@/components/ReactLogo";
import { TailwindLogo } from "@/components/TailwindLogo";
import { TypescriptLogo } from "@/components/TypescriptLogo";
import { Environment, Float, Lightformer, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from 'react';

const FloatingIcons = () => {
    const [fov, setFov] = useState(17);

    useEffect(() => {
        const updateFov = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setFov(35);
            }
            else if (width < 1280) {
                setFov(20);
            }
        };
        updateFov();
        window.addEventListener("resize", updateFov);

        return () => window.removeEventListener("resize", updateFov);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-screen -z-20">
            <Canvas camera={{ position: [0, 0, 25], fov: fov }}>
                <color attach="background" args={['#FEF1E1']} />
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 25, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

                <group>
                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[3, 3, 0]}>
                        <TypescriptLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[4, 1, 0]}>
                        <NodejsLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[3, -2, 0]}>
                        <TailwindLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[-4, 0, 0]}>
                        <MysqlLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[-3, 2, 0]}>
                        <FigmaLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[-2.5, -2, 0]}>
                        <ReactLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[-5.5, 3, -3]}>
                        <LaravelLogo />
                    </Float>

                    <Float rotationIntensity={3} floatIntensity={3} speed={2} position={[6, -1.5, -3.5]}>
                        <MongodbLogo />
                    </Float>
                </group>

                <Environment resolution={1024}>
                    <group rotation={[-Math.PI / 3, 0, 0]}>
                        <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                        {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                        ))}
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
                    </group>
                </Environment>
                <Preload all />
            </Canvas>
        </div>

    );
}

export default FloatingIcons;