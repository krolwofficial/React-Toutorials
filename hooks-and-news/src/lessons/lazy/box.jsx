import React, {useRef, useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'

const Tilt = ({children}) => {
    const tiltRef = useRef()

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
        })
        return () => tiltRef.current.vanillaTilt.destroy()
    })

    return (
        <div ref={tiltRef} className="tilt-root">
            <div className="tilt-child">{children}</div>
        </div>
    )
}

const Usage = ({children}) => {
    return (
        <div style={{backgroundColor: 'black', padding: 50}} className="totally-centered">
            <Tilt>
                <div className="totally-centered">vanilla-tilt.js</div>
            </Tilt>
        </div>
    )
}

export default Tilt
