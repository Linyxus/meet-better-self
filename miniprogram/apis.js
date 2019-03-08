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

const fetchSubjectPunch = subjectId => {
  return wx.cloud.callFunction({
    name: 'Subjects',
    data: {
      scope: 'fetchSubjectPunch',
      subjectId,
    }
  })
}

const bindUser = sid => {
  return wx.cloud.callFunction({
    name: 'Subjects',
    data: {
      scope: 'bindUser',
      sid,
    }
  })
}

exports.fetchSubjects = fetchSubjects
exports.punchIn = punchIn
exports.fetchSubjectPunch = fetchSubjectPunch
exports.bindUser = bindUser
