force-grid
==========

force-grid is an add-in for Bootstrap grid system. It allows the use of classes 
to control the view port by an elements width instead of using CSS3 media queries.

## Quick Start

If you just want to try it then download bootstrap-force-grid.css under CSS
folder. This is compiled using Bootstrap default theme and configuration.

## Getting Started

To compile force-grid with Bootstrap

- Add force-grid in your bootstrap.less
- Compile bootstrap.less

```
// Force Grid
@import "force-grid.less";
```

## View Port Classes

Add these class to force child elements to use specified view port.

- view-lg - Large
- view-md - Medium
- view-sm - Small
- view-xs - Extra Small

## Force.js

This tool auto updates container elements view port depending on its width. 
Force.js requires jQuery and will listen to window.resize event to refresh 
watched elements view port.

The default view ports are the same as Bootstrap media queries.

## Force.js API

### force.set(viewPort, fnQuery)

Add or update a view port. fnQuery is a function that will be called to 
determine if an element should use this view port.

If fnQuery is not defined then viewPort is expected to be an object. This will
replace all view ports defined with viewPort.

### force.remove(viewPort)

Removes viewPort. If viewPort is undefined then it will remove all view ports.

### force.watch(elem)

Add an element to force view port. This can be a jQuery selector, DOM element, 
or jQuery element.

### force.unwatch(elem)

Remove an element on the watch list. If elem is undefined then it will clear watch list.

### force.process()

Manually trigger the re-calculation of view port on watch list.
