CourseMap
======

[![Stories in Ready](https://badge.waffle.io/louy2/coursemap.svg?label=ready&title=Ready)](http://waffle.io/louy2/coursemap)

CourseMap is a new way to explore the course catalog of [RPI](http://www.rpi.edu/). CourseMap provides a graphical view of the courses availible. The goal is to provide a better way of viewing courses availible than what is availible through YACS or the RPI Course Catalog.

CourseMap is an [RCOS](http://rcos.rpi.edu/) project. The RCOS page and blog for this project can be found [Here](http://rcos.rpi.edu/projects/coursemap-yacs-catalog/).


CourseMap uses both [Sigma.js](https://github.com/jacomyal/sigma.js) and [Oboe.js](http://oboejs.com/) libaries.
CourseMap uses [YACS](yacs.me) API to acquire course data.

### Local Setup:

1. Install [Github For Windows](https://windows.github.com/)
2. Open `index.html` with Chrome or Firefox and enable the dev tools in it.
3. `js/index.js` is the main javascript file to edit.
4. [Follow the workflow.](https://guides.github.com/introduction/flow/index.html)

### Known Issues:

1. Grouping of nodes is currently too dense, we're currently exploring solutions (filtering, sublayers)
2. The new API was never made, and the current one has no way of determine prerequisites and corequisites



### The RCOS Team:

1. [Yufan Lou](https://github.com/louy2)
2. [Xian Liu](https://github.com/seamasliu)
3. [Nicholas Smith](https://github.com/emperorpik)
