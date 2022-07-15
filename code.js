

var dataArray = [cyStyle, graphData];

document.addEventListener("DOMContentLoaded", function() {

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'cose',
      idealEdgeLength: 100,
      nodeOverlap: 20,
      refresh: 20,
      fit: false,
      padding: 300,
      randomize: false,
      componentSpacing: 100,
      nodeRepulsion: 100,
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

  cy.center()
  cy.fit()
})