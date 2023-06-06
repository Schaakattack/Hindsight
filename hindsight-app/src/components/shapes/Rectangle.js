import * as d3 from "d3";

const Rectangle = (id, x, y, length)=>{
    return {
        id: id,
        x: x - length / 2,
        y: y - length / 2,
        width: length,
        height: length,
        fill: 'none',
        stroke: '#2F80ED',
        type: 'rect'
    }
}

export default Rectangle;