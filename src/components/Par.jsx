import React from 'react'
import Particles from 'react-tsparticles'
import Paraconfig from './Parconfig'
import { loadFull } from "tsparticles"
import { useCallback } from "react"
export default function Par() {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0"
                }}
                params={Paraconfig}
            />
        </div>
    )
}
