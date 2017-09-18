const fs = require("fs");
const path = require("path");
const svgo = require("svgo");
// const filepath = path.resolve(__dirname, "10_of_clubs.svg");
const svgToJSX = require("svg-to-jsx");

const alterName = (name) => {
  name = name.replace( /_of_/, '' );
  name = name.replace( /king/, '13' );
  name = name.replace( /queen/, '12' );
  name = name.replace( /jack/, '11' );
  name = name.replace( /ace/, '1' );
  name = name.replace( /spades/, 'S' );
  name = name.replace( /hearts/, 'H' );
  name = name.replace( /clubs/, 'C' );
  name = name.replace( /diamonds/, 'D' );
  name = name.replace( /(S|H|C|D)2/, '$1-alt' );
  return name;
};

const svg = new svgo({
  // js2svg: {
  //   pretty: true,
  // },
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: false },
    {
      convertColors: {
        names2hex: true,
        rgb2hex: true
      }
    },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    {
      cleanupNumericValues: {
        floatPrecision: 2
      }
    },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { transformsWithOnePath: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: ["font-family"] } },
    { removeElementsByAttr: false },
    { addClassesToSVGElement: false },
    { addAttributesToSVGElement: false },
    { removeStyleElement: false },
    { removeScriptElement: true }
    // {
    //   removeDoctype: true,
    // },
    // {
    //   removeComments: true,
    // },
    // {
    //   removeXMLProcInst: true,
    // },
    // {
    //   cleanupAttrs: {
    //     newlines: true,
    //     trim: true,
    //     spaces: true,
    //   },
    // },

    // {
    //   cleanupNumericValues: {
    //     floatPrecision: 2
    //   }
    // },
  ]
});

function processFile( file, out ) {
  const filepath = path.join( __dirname, file );
  fs.readFile(filepath, "utf8", function(err, data) {
    if (err) {
      throw err;
    }

    svg.optimize(data, (result, error) => {
      if (error) {
        return console.error(error);
      }
      svgToJSX(result.data).then(jsx => {
        fs.writeFile(
          path.join(__dirname, out + ".jsx"),
          "import React from 'react';\nexport default function() { return(" + jsx + "); }",
          (e, r) => {
            if (e) {
              return console.error(e);
            }
            console.log("wrote file");
          }
        );
      });

      console.log(result);
    });
  });

}

fs.readdir(__dirname, function(err, items) {
  items.filter( ( v ) => /\.svg$/.test( v ) );

  for (var i = 0; i < items.length; i++) {
    if ( /\.svg$/.test( items[i] ) ) {
      processFile( items[i], alterName( items[i] ) );
    }

  }
});