import * as d3 from "d3";

function getTriangleVertices(centerX, centerY, sideLength) {
	const height = Math.sqrt(3) * (sideLength / 2);
	const x1 = centerX;
	const y1 = centerY - height / 2;
	const x2 = centerX + sideLength / 2;
	const y2 = centerY + height / 2;
	const x3 = centerX - sideLength / 2;
	const y3 = centerY + height / 2;
	return [[x1, y1], [x2, y2], [x3, y3]];
  }

export const CalcTrianglePath = (x, y, length) => {
	const points = getTriangleVertices(x, y, length);

	const lineGenerator = d3.line().curve(d3.curveLinearClosed);
	return lineGenerator(points);
}

const Triangle = (id, x, y, length)=>{

	const pathString = CalcTrianglePath(x, y, length);
    return {
		id: id, pathString, fill: 'none', stroke: '#23C16B', type:'triangle'
    };
}

export default Triangle;