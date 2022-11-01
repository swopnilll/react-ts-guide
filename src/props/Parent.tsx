import React from 'react'

import Child from './Child'

const Parent = () => {
    return (
        <Child color="blue" onButtonClick={() => console.log("button click")}>
            <h1>Hello world</h1>
        </Child>
    )
}

export default Parent