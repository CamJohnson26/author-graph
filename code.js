

var dataArray = [cyStyle, graphData];

document.addEventListener("DOMContentLoaded", function() {

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'cose',
      idealEdgeLength: 100,
      nodeOverlap: 20,
      refresh: 20,
      fit: true,
      padding: 30,
      randomize: false,
      componentSpacing: 100,
      nodeRepulsion: graphData.length * 600,
      edgeElasticity: 100,
      nestingFactor: 5,
      gravity: 160,
      numIter: 1000,
      initialTemp: 15000,
      coolingFactor: 0.95,
      minTemp: 1.0
    },

    style: dataArray[0],

    elements: dataArray[1]

  });

  cy.center()
  cy.fit()
  
  const sourceHTML = graphSources.map(source => `<tr>${source}</tr><br>`).join("")
  document.getElementById('sourceAnchor').innerHTML = `<table>${sourceHTML}</table>`
})