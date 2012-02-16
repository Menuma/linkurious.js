function SigmaPublic(inst) {
  var s = inst;

  // Config:
  this.config = function(a1, a2) {
    var res = s.config(a1, a2);
    return res == s ? this : res;
  };

  this.config_drawing = function(a1, a2) {
    var res = s.plotter.config(a1, a2);
    return res == s.plotter ? this : res;
  };

  this.config_layout = function(a1, a2) {
    var res = s.forceatlas2.config(a1, a2);
    return res == s.forceatlas2 ? this : res;
  };

  this.config_mouse = function(a1, a2) {
    var res = s.mousecaptor.config(a1, a2);
    return res == s.mousecaptor ? this : res;
  };

  this.config_graph = function(a1, a2) {
    var res = s.graph.config(a1, a2);
    return res == s.graph ? this : res;
  };

  this.getMouse = function() {
    return {
      mouseX: s.mousecaptor.mouseX,
      mouseY: s.mousecaptor.mouseY,
      down: s.mousecaptor.isMouseDown
    };
  };

  // Actions:
  this.position = function(stageX, stageY, ratio) {
    if (arguments.length == 0) {
      return {
        stageX: s.mousecaptor.stageX,
        stageY: s.mousecaptor.stageY,
        ratio: s.mousecaptor.ratio
      };
    }else {
      s.mousecaptor.stageX = stageX != undefined ?
        stageX :
        s.mousecaptor.stageX;
      s.mousecaptor.stageY = stageY != undefined ?
        stageY :
        s.mousecaptor.stageY;
      s.mousecaptor.ratio = ratio != undefined ?
        ratio :
        s.mousecaptor.ratio;

      return this;
    }
  };

  this.resize = function(w, h) {
    s.resize(w, h);
    return this;
  };

  this.draw = function(nodes, edges, labels, safe) {
    s.draw(nodes, edges, labels, safe);
    return this;
  };

  // Tasks methods:
  this.addTask = function(id, worker, condition) {
    s.addTask(id, worker, condition);
    return this;
  };

  this.removeTask = function(id) {
    s.removeTask(id);
    return this;
  };

  // Graph methods:
  this.addNode = function(id, params) {
    s.graph.addNode(id, params);
    return this;
  };

  this.addEdge = function(id, source, target, params) {
    s.graph.addEdge(id, source, target, params);
    return this;
  }

  this.dropNode = function(v) {
    s.graph.dropNode(v);
    return this;
  };

  this.dropEdge = function(v) {
    s.graph.dropEdge(v);
    return this;
  };

  this.getGraph = function() {
    return s.graph;
  };

  this.emptyGraph = function() {
    s.graph.empty();
    return this;
  };

  this.getNodesCount = function() {
    return s.graph.nodes.length;
  };

  this.getEdgesCount = function() {
    return s.graph.edges.length;
  };

  // Monitoring
  this.activateMonitoring = function() {
    return s.monitor.activate();
  };

  this.desactivate = function() {
    return s.monitor.desactivate();
  };
}