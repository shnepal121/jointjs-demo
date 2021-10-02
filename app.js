const graph = new joint.dia.Graph();

const paper = new joint.dia.Paper({
  el: document.getElementById("myholder"),
  model: graph,
  width: 700,
  height: 300,
  gridSize: 10,
  drawGrid: true,
  background: {
    color: "green",
  },
});

paper.scale(0.9, 0.9);
paper.translate(30, 10);

const rect = new joint.shapes.standard.Rectangle();
rect.position(100, 30);
rect.resize(100, 40);
rect.attr({
  body: {
    fill: "blue",
  },
  label: {
    text: "Hello",
    fill: "white",
  },
});
rect.addTo(graph);

const rect2 = rect.clone();
rect2.translate(300, 0);
rect2.attr("label/text", "World!");
rect2.attr("label/fill", "yellow");
rect2.addTo(graph);

const link = new joint.shapes.standard.Link();
link.source(rect);
link.target(rect2);
link.addTo(graph);
link.attr({
  line: {
    stroke: "blue",
    strokeWidth: 1,
    sourceMarker: {
      type: "path",
      stroke: "black",
      fill: "red",
      d: "M 10 -5 0 0 10 5 Z",
    },
    targetMarker: {
      type: "path",
      stroke: "black",
      fill: "yellow",
      d: "M 10 -5 0 0 10 5 Z",
    },
  },
});
link.labels([
  {
    attrs: {
      text: {
        text: "Hello, World!",
      },
    },
  },
]);

const rect3 = new joint.shapes.standard.Rectangle();
rect3.position(100, 200);
rect3.resize(80, 30);
rect3.attr({
  body: {
    fill: "red",
    rx: 20,
    ry: 20,
    strokeWidth: 0,
  },
  label: {
    text: "Hello",
    fill: "white",
    fontconstiant: "small-caps",
  },
});
rect3.addTo(graph);

const rect4 = rect3.clone();
rect4.translate(300, 0);
rect4.attr({
  body: {
    fill: "orange",
    rx: 20,
    ry: 20,
  },
  label: {
    text: "Joint JS",
    fill: "white",
    fontSize: 20,
  },
});
rect4.addTo(graph);

const link1 = new joint.shapes.standard.Link();
link1.source(rect3);
link1.target(rect4);
link1.addTo(graph);
link1.attr({
  line: {
    stroke: "orange",
    strokeWidth: 4,
    strokeDasharray: "4 2",
    sourceMarker: {
      type: "image",
      "xlink:href":
        "http://cdn3.iconfinder.com/data/icons/49handdrawing/24x24/left.png",
      width: 24,
      height: 24,
      y: -12,
    },
    targetMarker: {
      type: "image",
      "xlink:href":
        "http://cdn3.iconfinder.com/data/icons/49handdrawing/24x24/left.png",
      width: 24,
      height: 24,
      y: -12,
    },
  },
});
link1.labels([
  {
    attrs: {
      text: {
        text: "Hello, jointjs",
      },
    },
  },
]);
link1.vertices([
  new g.Point(200, 100),
  new g.Point(250, 100),
  new g.Point(300, 150),
  new g.Point(350, 300),
]);
link1.router("orthogonal");
link1.connector("rounded");

const link2 = new joint.shapes.standard.Link();
link2.source(rect3);
link2.target(rect4);
link2.connector("jumpover", { size: 10 });
link2.addTo(graph);
