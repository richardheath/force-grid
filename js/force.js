(function() {
    var root = this;
    var force = root.force = {};

    // Initial Settings
    var viewPorts = {
        xs: function (width) { return width < 768; },
        sm: function (width) { return width >= 768 && width < 992; },
        md: function (width) { return width >= 992 && width < 1200; },
        lg: function (width) { return width >= 1200; }
    };
    var prefix = 'view-';
    var watchList = [];

    // Set / Remove view ports
    force.set = function (viewPort, fnTest) {
        if (fnTest) { // Add viewPort
            viewPorts[viewPort] = fnTest;
        }
        else { // If fnTest not provided then expect viewPort is an object
            viewPorts = viewPort;
        }
    };
    force.remove = function (viewPort) {
        if (viewPort) 
            delete viewPorts[viewPort];
        else
            viewPorts = {}; // Clear all
    };

    // Add / remove an element to auto force viewPort
    force.watch = function (elem) {
        if (elem instanceof jQuery === false)
            elem = $(elem); // Expect selector or DOM element

        watchList.push(elem);
        calcViewPort(elem);
    };
    force.unwatch = function (elem) {
        if (!elem) // Clear watchList
            watchList = [];

        if (elem instanceof jQuery === false)
            elem = $(elem); // Expect selector or DOM element

        for (var idx = 0; watchList.length; ++idx) {
            if (elem.is(watchList[idx]))
                watchList.splice(idx, 1);
        }
    };

    // Process all elements in watch list
    force.process = function () {
        for (var idx = 0; idx < watchList.length; ++idx) {
            calcViewPort(watchList[idx]);
        }
    };

    // Determine element viewPort based on width
    function calcViewPort($el) {
        $el[0].className = removePrevViewPort($el[0].className);

        var view, width = $el.width();
        for (view in viewPorts) {
            if (viewPorts[view](width))
                $el.addClass(prefix + view);
        }
    }

    // Remove previous viewPort
    function removePrevViewPort(className) {
        var classes = className.split(' ').filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });

        return classes.join('');
    }

    // Listen to window resize event
    $(window).resize(force.process);

}).call(this);