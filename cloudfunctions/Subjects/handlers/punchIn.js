const subjects = require('../subjects')
const cloud = require('wx-server-sdk')

const handler = async (e, ctx) => {
  const { subjectId, options } = e;
  const subject = subjects.subjects.find(s => s.id == subjectId)
  if (subject == undefined) {
    throw 'Invalid subject id!'
  }
  try {
    const data = await subject.punch.resolver(options, {db: cloud.database(), now: new Date(), _openid: e.userInfo.openId})
    return { data }
  }
  catch (e) {
    return { error: e }
  }
}

exports.handler = handler