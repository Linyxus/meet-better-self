const fetchSubjects = () => {
  return wx.cloud.callFunction({
    name: 'Subjects',
    data: {
      scope: 'fetchSubjects',
    }
  })
}

exports.fetchSubjects = fetchSubjects
