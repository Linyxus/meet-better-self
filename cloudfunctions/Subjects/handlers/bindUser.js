const students = require('../students')
const cloud = require('wx-server-sdk')

const bindUser = async (e, ctxt) => {
    const db = cloud.database().collection('user')
    const openid = e.userInfo.openId
    const { sid } = e
    const node = students.students.find(x => x.sid == sid)

    // check whether `sid` is valid
    if (node == undefined) {
        throw `${sid} is not a valid id! event: ${e}`
    }
    
    // check for duplicates
    const sid_cnt = (await db.where({sid: sid}).count()).total
    if (sid_cnt != 0) {
        throw 'Student ID has been binded.' + sid
    }

    return await db.add({
        data: {
            sid, openid
        }
    })
}

exports.handler = bindUser