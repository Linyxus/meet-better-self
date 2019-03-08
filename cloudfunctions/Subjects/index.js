// 云函数入口文件
const cloud = require('wx-server-sdk')
const fetchSubjects = require('./handlers/fetchSubjects')
const punchIn = require('./handlers/punchIn')
const fetchSubjectPunch = require('./handlers/fetchSubjectPunch')
const hasBinding = require('./handlers/hasBinding')
const bindUser = require('./handlers/bindUser')

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
  if (scope == 'hasBinding') {
    return await hasBinding.handler(event, context)
  }
  if (scope == 'bindUser') {
    return await bindUser.handler(event, context)
  }

  throw 'No available scope is found.'
}