#!/usr/bin/env node

/**
 * @name Mongoose Visualizer
 * @description
 * Generate a human readable document to show a biz
 * dev guy your data models so that they can point and
 * say "yes, no, add x, add y, so so so …"
 * Fast project to display nicely formated data models json or html
 **/

// main lib

require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator"
    ]
})

var visual = require('../lib/mongoose-visual');

// process
visual(process.argv.slice(2));

/* EOF */
