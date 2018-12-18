// 云函数入口文件
const cloud = require('wx-server-sdk')
const fetchSubjects = require('./handlers/fetchSubjects')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { scope } = event;
  if (scope == 'fetchSubjects') {
    return fetchSubjects.handler(event)
  }

  throw 'No available scope is found.'
}