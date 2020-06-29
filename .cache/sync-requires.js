const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/home/joilson/www/web-pages/richard-krasnuk/src/pages/index.js")))
}

