import { react } from "@babel/types";
import particlesConfig from "./particulesconfig";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import {loadSlim, loadFull} from 'tsparticles'

const BackgroundParticules = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(
        <>
             <Particles options={particlesConfig} id="tsparticles"  init={particlesInit} loaded={particlesLoaded} />
        </>
    )
}
export default BackgroundParticules;