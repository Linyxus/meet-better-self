const subjects = require('../subjects')
const cloud = require('wx-server-sdk')

const fetchSubjects = async () => {
  const countsProm = subjects.subjects.map(s => cloud.database().collection('punch').where({subjectId: s.id}).count())
  const counts = await Promise.all(countsProm)
  return subjects.subjects.map((s, idx) => {
    return Object.assign({}, s, {count: counts[idx].total})
  })
}

exports.handler = fetchSubjects