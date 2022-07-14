

var dataArray = [cyStyle, graphData];
var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  layout: {
    name: 'cose',
    idealEdgeLength: 100,
    nodeOverlap: 20,
    refresh: 20,
    fit: true,
    padding: 100,
    randomize: false,
    componentSpacing: 100,
    nodeRepulsion: 40000000,
    edgeElasticity: 100,
    nestingFactor: 5,
    gravity: 160,
    numIter: 1000,
    initialTemp: 10000,
    coolingFactor: 0.95,
    minTemp: 1.0
  },

  style: dataArray[0],

  elements: dataArray[1]

});