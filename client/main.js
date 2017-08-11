d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json',(data) => {

	const dataNew = data['data'].map((d) => [d[0],d[1]]);
	makeViz(dataNew)
});

function makeViz(dataset) {
	//Width and height of the overall graph
	var w = 900;
	var h = 450;
	var padding = 50;
	var parseDate = d3.timeParse("%Y-%m-%d");
	var formatTime = d3.timeFormat("%B, %Y");
	var formatCy = d3.format(",");


	var maxDate = new Date(dataset[274][0]);
	var minDate = new Date(dataset[0][0]);

	//Steps I remember to D3
	//1. Define scales
	//2. Define axis
	//3. Define rects
	//4. Define Labels
	//5. Define Interactions

// Define scales
	var xScale = d3.scaleTime()
		.domain([minDate,maxDate]) // cria um array [0,1,2,3,4...dataset.length]
		.range([padding,w-padding*2]);

		var yScale = d3.scaleLinear()
		  .domain([0,d3.max(dataset,(d)=> d[1])])
		  .range([h-padding,10]);


	// Define axis

	var xAxis = d3.axisBottom()
		.scale(xScale)
		.ticks(10);

	var yAxis = d3.axisLeft()
		.scale(yScale)
		.ticks(10);

	//Define rects
	var svg = d3.select('body')
		.append('svg')
		.attr('width',w)
		.attr('height',h);

	svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x',(d) => xScale(new Date(d[0])))
	.attr('y', (d) => yScale(d[1]))
	.attr('width',(w-padding*2-30)/dataset.length)
	.attr('height',(d) => h-yScale(d[1])-padding)
	.attr('fill', (d,i) => `rgb(0,0,${i})`)
	.on('mouseover',function(d) {
		var xPosition = parseFloat(d3.select(this).attr("x"));
		var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + h / 2;

		d3.select('#tooltip')
		 .style('left',`${xPosition}px`)
		 .style('top',`${yPosition}px`)
		 .select('#value')
		 .text(formatCy(d[1]));

		 d3.select('#tooltip')
 		 .style('left',`${xPosition}px`)
 		 .style('top',`${yPosition}px`)
 		 .select('#caralho')
 		 .text(formatTime(parseDate(d[0])))


	 d3.select('#tooltip').classed('hidden',false);

	});

	//Define axis groups
	svg.append('g')
		.attr('class','x axis')
		.attr('transform',`translate(0,${h-padding})`)
		.call(xAxis);

	svg.append('g')
		.attr('class','y axis')
		.attr('transform',`translate(${padding},0)`)
		.call(yAxis);

}
