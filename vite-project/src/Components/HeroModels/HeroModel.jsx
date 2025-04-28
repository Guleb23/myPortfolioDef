import React, { Suspense, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from './Room';
import HeroLights from './HeroLights';
import Loader from '../Loader';


const HeroModel = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <Loader />}
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

                <Suspense fallback={null}>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={!isTablet}
                        maxDistance={20}
                        minDistance={5}
                        minPolarAngle={Math.PI / 5}
                        maxPolarAngle={Math.PI / 2}
                    />
                    <HeroLights />
                    <group rotation={[0, -0.6, 0]} scale={isMobile ? 0.7 : 1} position={[0, -3, 0]}>
                        <Room onLoaded={() => setLoading(false)} />
                    </group>
                </Suspense>
            </Canvas>

        </>

    );
};

export default HeroModel;