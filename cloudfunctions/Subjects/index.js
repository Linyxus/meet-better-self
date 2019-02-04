// 云函数入口文件
const cloud = require('wx-server-sdk')
const fetchSubjects = require('./handlers/fetchSubjects')
const punchIn = require('./handlers/punchIn')
const fetchSubjectPunch = require('./handlers/fetchSubjectPunch')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { scope } = event;
  if (scope == 'fetchSubjects') {
    return await fetchSubjects.handler(event)
  }
  if (scope == 'test') {
    return event
  }
  if (scope == 'punchIn') {
    return await punchIn.handler(event, context)
  }
  if (scope == 'fetchSubjectPunch') {
    return await fetchSubjectPunch.handler(event, context)
  }

  throw 'No available scope is found.'
}