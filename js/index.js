// Radius of layers according to course level
var radius = [],
		ln,
		li = [],
		i,
		s,
		coursemap = {
			nodes:[],
			edges:[]
		};

for (i = 0; i < 10; i++) {
	radius[i] = 15 + 10 * i;
	li[i] = 0;
}

sigma.classes.graph.addIndex('layerCount',{
	constructor: function(){ this.layerCount = []; },
	addNode: function(n){
		if (!this.layerCount[n.layer])
			this.layerCount[n.layer] = 0;
		this.layerCount[n.layer]++;
	},
	dropNode: function(nid){
		this.layerCount[this.nodeIndex[nid].layer]--;
	}
});

// Recompute all coordinates
sigma.classes.graph.addMethod('refreshCoordinates', function(){
	var _g = this;
	_g.nodesArray.forEach(function (_n) {
		_n.x = radius[_n.layer] * Math.sin(
			_n.layerIndex*2*Math.PI/_g.layerCount[_n.layer]
		);
		_n.y = radius[_n.layer] * Math.cos(
			_n.layerIndex*2*Math.PI/_g.layerCount[_n.layer]
		);
	});
});

// Custom node renderer
sigma.canvas.nodes.course = function(node, context, settings) {
	context.strokeStyle = node.strokeColor || settings('defaultNodeColor');
	context.fillStyle = node.color || settings('defaultNodeColor');

	context.beginPath();

	var prefix = settings('prefix') || '';
	// extract x,y,size will use multiple times
	var nodeX = node[prefix + 'x'];
	var nodeY = node[prefix + 'y'];
	var size = node[prefix + 'size'];

	// draw the circle
	context.arc(nodeX, nodeY, size, 0, Math.PI * 2, true);
	context.fill();

	// draw the division line
	context.lineTo(nodeX-size,nodeY);
	context.stroke();

	// draw DEPT-0000
	context.save();
	// let the font scale with graph
	var fontSize;
	fontSize = 0.7 * size;
	context.font = (settings('fontStyle') ? settings('fontStyle') + ' ' : '') +
		fontSize + 'px ' + settings('font');
	context.fillStyle = (settings('labelColor') === 'node') ?
		(node.color || settings('defaultNodeColor')) :
		settings('defaultLabelColor');
	context.textAlign = 'center';
	// DEPT above
	context.textBaseline = 'bottom';
	context.fillText(node.department,nodeX,nodeY);
	// 0000 below
	context.textBaseline = 'top';
	context.fillText(node.number,nodeX,nodeY);
	context.restore();
};

var departmentCodes = {};
oboe('http://yacs.me/api/4/departments/')
	.node({
		'result[*]': function(department){
			departmentCodes[department.id] = department.code;
		}
	});
	
// Radius of layers according to course level
var radius = [],
		ln,
		li = [],
		i,
		s,
		coursemap = {
			nodes:[],
			edges:[]
		};

for (i = 0; i < 10; i++) 
{
	radius[i] = 15 + 10 * i;
	li[i] = 0;
}

sigma.classes.graph.addIndex('layerCount',{
	constructor: function(){ this.layerCount = []; },
	addNode: function(n){
		if (!this.layerCount[n.layer])
			this.layerCount[n.layer] = 0;
		this.layerCount[n.layer]++;
	},
	dropNode: function(nid){
		this.layerCount[this.nodeIndex[nid].layer]--;
	}
});

// Recompute all coordinates
sigma.classes.graph.addMethod('refreshCoordinates', function(){
	var _g = this;
	_g.nodesArray.forEach(function (_n) {
		_n.x = radius[_n.layer] * Math.sin(
			_n.layerIndex*2*Math.PI/_g.layerCount[_n.layer]
		);
		_n.y = radius[_n.layer] * Math.cos(
			_n.layerIndex*2*Math.PI/_g.layerCount[_n.layer]
		);
	});
});

// Custom node renderer
sigma.canvas.nodes.course = function(node, context, settings) {
	context.strokeStyle = node.strokeColor || settings('defaultNodeColor');
	context.fillStyle = node.color || settings('defaultNodeColor');

	context.beginPath();

	var prefix = settings('prefix') || '';
	// extract x,y,size will use multiple times
	var nodeX = node[prefix + 'x'];
	var nodeY = node[prefix + 'y'];
	var size = node[prefix + 'size'];

	// draw the circle
	context.arc(nodeX, nodeY, size, 0, Math.PI * 2, true);
	context.fill();

	// draw the division line
	context.lineTo(nodeX-size,nodeY);
	context.stroke();

	// draw DEPT-0000
	context.save();
	// let the font scale with graph
	var fontSize;
	fontSize = 0.7 * size;
	context.font = (settings('fontStyle') ? settings('fontStyle') + ' ' : '') +
		fontSize + 'px ' + settings('font');
	context.fillStyle = (settings('labelColor') === 'node') ?
		(node.color || settings('defaultNodeColor')) :
		settings('defaultLabelColor');
	context.textAlign = 'center';
	// DEPT above
	context.textBaseline = 'bottom';
	context.fillText(node.department,nodeX,nodeY);
	// 0000 below
	context.textBaseline = 'top';
	context.fillText(node.number,nodeX,nodeY);
	context.restore();
};

var departmentCodes = {};
oboe('http://yacs.me/api/4/departments/')
	.node({
		'result[*]': function(department){
			departmentCodes[department.id] = department.code;
		}
	});


var Map = function() 
{
    this.keys = new Array();
    this.data = new Array(5);

    this.put = function (key) 
	{
        if (this.data[key] == null) 
		{
            this.keys.push(key);
			this.data[key] = new Array(5);
        }
		
		return;
    };
				

    this.get = function (key) 
	{
        return this.data[key];
    };
	
	this.increment = function (key,val)
	{
		if (this.data[key] != null)
		{
			if (this.val < 2000 || this.val == 10)
			{
			this.data[key][0] = this.data[key][0] + 1;
			}
			else if (this.val < 3000)
			{
				this.data[key][1] = this.data[key][1] + 1;
			}
			else if (this.val < 4000 || this.val == 30)
			{
				this.data[key][2] = this.data[key][2] +1;
			}
			else if (this.val < 5000)
			{
				this.data[key][3] = this.data[key][3] + 1;
			}
			else if (this.val < 6000 || this.val == 50)
			{
				this.data[key][4] = this.data[key][4] +1;
			}
			else if (this.val < 7000)
			{
				this.data[key][5] = this.data[key][5] +1;
			}
			else if (this.val < 8000 || this.val == 70)
			{
				this.data[key][6] = this.data[key][6] +1;
			}
			else
			{
				this.data[key][7] = this.data[key][7] +1;
			}
		}
		
		return;
	};

    this.entrys = function () 
	{
        var len = this.keys.length;
        var entrys = new Array(len);
        for (var i = 0; i < len; i++) 
		{
            entrys[i] = 
			{
                key: this.keys[i],
                value: this.data[i]
            };
        }
        return entrys;
    };

    this.isEmpty = function () 
	{
        return this.keys.length == 0;
    };

    this.size = function () 
	{
        return this.keys.length;
    };
}
	
var departmentNums = new Map();

oboe('http://yacs.me/api/4/courses/?semester_id=85363')
  .node({
		// Process each course as it arrives
		'result[*]': function(course){
			ln = Math.floor(course.number / 1000) - 1;
			if (ln < 0) 
			{
				ln = Math.floor(course.number / 10) - 1;
			}
			//Increment map of courses
			departmentNums.put(departmentCodes[course.department_id]);
			departmentNums.increment(departmentCodes[course.department_id],course.number);
			
			// Add the current node
			coursemap.nodes.push({
				type: 'course',
				id: 'n'+course.id,
				x: ln,
				y: li[ln],
				size: 1,
				strokeColor: '#222',
				color: '#ddd',
				label: course.name,
				department: departmentCodes[course.department_id],
				number: course.number,
				layer: ln,
				layerIndex: li[ln]++
			});
		},
		// After all courses processed, refresh the graph
		'result': function(){
			s = new sigma({
				graph: coursemap,
				renderer: {
					container: document.getElementById('container'),
					type: 'canvas'
				},
				settings: {
					labelSize: 'proportional',
					labelThreshold: 999
				}
			});
			s.graph.refreshCoordinates();
			s.refresh();
		}
	})
	.done(function(jdata){
		console.log(jdata.result.length);
	});

oboe('http://yacs.me/api/4/courses/?semester_id=85363')
  .node({
		// Process each course as it arrives
		'result[*]': function(course){
			ln = Math.floor(course.number / 1000) - 1;
			if (ln < 0) {
				ln = Math.floor(course.number / 10) - 1;
			}
			// Add the current node
			coursemap.nodes.push({
				type: 'course',
				id: 'n'+course.id,
				x: ln,
				y: li[ln],
				size: 1,
				strokeColor: '#222',
				color: '#ddd',
				label: course.name,
				department: departmentCodes[course.department_id],
				number: course.number,
				layer: ln,
				layerIndex: li[ln]++
			});
		},
		// After all courses processed, refresh the graph
		'result': function(){
			s = new sigma({
				graph: coursemap,
				renderer: {
					container: document.getElementById('container'),
					type: 'canvas'
				},
				settings: {
					labelSize: 'proportional',
					labelThreshold: 999
				}
			});
			s.graph.refreshCoordinates();
			s.refresh();
		}
	})
	.done(function(jdata){
		console.log(jdata.result.length);
	});
