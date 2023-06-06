import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { zoom } from "d3-zoom";
import Circle from "./shapes/Circle";
import Triangle, { CalcTrianglePath } from "./shapes/Triangle";
import Rectangle from "./shapes/Rectangle";

import $ from "jquery";
const D3Component = () => {
	const nodesRef = useRef(null),
		linksRef = useRef(null),
		svgRef = useRef(null);

	const [viewWidth, setViewWidth] = useState(window.innerWidth);
	const [viewHeight, setViewHeight] = useState(window.innerHeight);
	// const [graphData, setGraphData] = useState([]);
	const [config, setConfig] = useState({
		width: viewWidth,
		height: viewHeight,
		linkDistance: 100,
		nodeStrength: -150,
		linkStrength: 0.5
	});
	const movingObject = useRef(null);

	// Add circles
	const circlesData = [
		Circle(1, 250, 250, 30),
		Circle(2, 300, 350, 30),
		Circle(3, 350, 400, 30),
	];

	// Add triangles
	const trianglesData = [Triangle(1, 300, 300, 60)];

	// Add rectangles
	const rectanglesData = [Rectangle(1, 400, 400, 60)];

	useEffect(() => {
		function handleResize() {
			setViewWidth(window.innerWidth);
			setViewHeight(window.innerHeight);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const drag = simulation => {
		function dragstarted(event, d) {
			movingObject.current = event.sourceEvent.target;
			const type = $(movingObject.current).attr("type");
			if (type === 'triangle'){
				d3.select(movingObject.current).raise().classed("active", true);
			}
			if (!event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(event, d) {
			const type = $(movingObject.current).attr("type");
			if (type === "circle") {
				d.fx = event.x;
				d.fy = event.y;
			} else if (type === "triangle") {
				console.log(d)
				d.pathString = CalcTrianglePath(event.x, event.y, 60);
				d.fx = event.x;
				d.fy = event.y;
			} else if (type === "rect") {
				d.fx = event.x;
				d.fy = event.y;
			}
		}

		function dragended(event, d) {
			const type = $(movingObject.current).attr("type");
			if (type === 'triangle'){
				d3.select(movingObject.current).raise().classed("active", false);
			}
			movingObject.current = null;
			if (!event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		}

		return d3
			.drag()
			.on("start", dragstarted)
			.on("drag", dragged)
			.on("end", dragended);
	};

	const mouseOver = (event, d) => {
		$(event.target).css("opacity", 1);
	};

	const mouseOut = (event, d) => {
		$(event.target).css("opacity", 0.5);
	};

	const graphData = {
		nodes: [...circlesData, ...trianglesData, ...rectanglesData],
		links: [
			{ source: 3, target: 3 },
			{ source: 2, target: 3 },
		],
	};

	useEffect(() => {
		const nodesContainer = d3.select(nodesRef.current);
		const linksContainer = d3.select(linksRef.current);

		// Configure the force simulation for your graph.
		const simulation = d3
			.forceSimulation(graphData.nodes)
			.force(
				"link",
				d3
					.forceLink(graphData.links)
					.id((d) => d.id)
					.distance(config.linkDistance).strength(config.linkStrength)
			)
			.force("charge", d3.forceManyBody().strength(config.nodeStrength).distanceMax(250))
			.force("radial", d3.forceRadial(100, config.width / 2, config.height / 2).strength(0.05))
			// .force(
			// 	"center",
			// 	d3.forceCenter(config.width / 2, config.height / 2)
			// );

		// Create and bind SVG elements for the links in your graph.
		const links = linksContainer
			.selectAll("line")
			.data(graphData.links)
			.enter()
			.append("line")
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		// Create and bind SVG elements for the nodes in your graph.
		const nodes = nodesContainer
			.selectAll("circle")
			.data(circlesData)
			.join("circle")
			.attr("type", (d)=> d.type)
			.attr("id", (d) => d.id)
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.attr("r", (d) => d.r)
			.attr("fill", (d) => d.fill)
			.attr("stroke", (d) => d.stroke)
			.attr("stroke-width", 4)
			.attr("opacity", 0.5)
			.on("mouseover", mouseOver)
			.on("mouseout", mouseOut)
			.call(drag(simulation));

		const triangles = nodesContainer
			.selectAll("path")
			.data(trianglesData)
			.join("path")
			.attr("type", (d)=> d.type)
			.attr("id", (d) => d.id)
			.attr("d", (d) => d.pathString)
			.attr("fill", (d) => d.fill)
			.attr("stroke", (d) => d.stroke)
			.attr("stroke-width", 4)
			.attr("opacity", 0.5)
			.on("mouseover", mouseOver)
			.on("mouseout", mouseOut)
			.call(drag(simulation));

		const rectangles = nodesContainer
			.selectAll("rect")
			.data(rectanglesData)
			.join("rect")
			.attr("type", "rect")
			.attr("id", (d) => d.id)
			.attr("x", (d) => d.x)
			.attr("y", (d) => d.y)
			.attr("width", (d) => d.width)
			.attr("height", (d) => d.height)
			.attr("fill", (d) => d.fill)
			.attr("stroke", (d) => d.stroke)
			.attr("stroke-width", 4)
			.attr("opacity", 0.5)
			.on("mouseover", mouseOver)
			.on("mouseout", mouseOut)
			.call(drag(simulation));

			// Update the positions of the nodes and links on each tick of the simulation.
		simulation.on("tick", () => {
			links
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);

			nodes
				.attr('cx', d => d.x).attr('cy', d => d.y);

			// triangles
			triangles
				.attr("x", d => d.x)
				.attr("y", d => d.y)
				.attr("d", d=> CalcTrianglePath(d.x, d.y, 60))

			rectangles
				.attr("x", d => d.x).attr("y", d => d.y);
		});
		
		const svg = d3.select(svgRef.current);
		const zoomHandler = zoom().on("zoom", (event) => {
			nodesContainer.attr("transform", event.transform);
			linksContainer.attr("transform", event.transform);
		});
		svg.call(zoomHandler);

		simulation.alpha(1).restart().tick();
	}, [graphData, config]);

	return (
		<svg
			viewBox={`0 0 ${viewWidth} ${viewHeight}`}
			pointerEvents="all"
			preserveAspectRatio="xMidYMid meet"
			ref={svgRef}
		>
			<g id="nodes" ref={nodesRef}></g>
			<g id="links" ref={linksRef}></g>
		</svg>
	);
};

export default D3Component;
