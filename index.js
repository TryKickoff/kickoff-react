if (process.env.NODE_ENV === 'production') {
  module.exports = require('./kickoff-react-components.production.min.js')
} else {
  module.exports = require('./kickoff-react-components.development.js')
}
