import { useEffect, useRef } from "react";
import particleNetwork from '@/third_party/particle.js'
const Particle = ()=>{
    const particleRef = useRef(null);
    useEffect(()=>{
        if(particleRef.current){
            const options = {
                particleColor: '#AAA',
                background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',
                interactive: true,
                speed: 'medium',
                density: 'high'
            }
            setTimeout(()=>{
                new particleNetwork(particleRef.current, options)
            }, 50);
        }
	}, [])

    return (
        <div className="z-0 top-0 bottom-0 block w-full h-full" id="particle-canvas" ref={particleRef}/>
    )
}

export default Particle