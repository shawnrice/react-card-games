var syntax = require('postcss-scss');

module.exports = ({ file, options, env }) => {
  console.warning( file, options, env );
  return {
    parser: file.extname === '.scss' ? 'scss' : false,
    syntax: file.extname === '.scss' ? 'scss' : false,
    plugins: {
      autoprefixer: env === 'production' ? options.autoprefixer : false,
    },
  };
};
