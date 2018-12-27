const fetchSubjects = () => {
  return wx.cloud.callFunction({
    name: 'Subjects',
    data: {
      scope: 'fetchSubjects',
    }
  })
}

const punchIn = (subjectId, options) => {
  return wx.cloud.callFunction({
    name: 'Subjects',
    data: {
      scope: 'punchIn',
      subjectId,
      options
    }
  })
}

exports.fetchSubjects = fetchSubjects
exports.punchIn = punchIn
