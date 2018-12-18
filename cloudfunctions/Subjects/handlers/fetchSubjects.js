const subjects = require('../subjects')

const fetchSubjects = () => {
  return subjects.subjects.map((s, idx) => {
    return Object.assign({}, s, {count: idx})
  })
}

exports.handler = fetchSubjects