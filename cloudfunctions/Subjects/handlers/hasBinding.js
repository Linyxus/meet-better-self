const cloud = require('wx-server-sdk')

const hasBinding = async (e, ctx) => {
    openid = e.userInfo.openId
    const db = cloud.database().collection('user')
    const cnt = await db.where({openid: openid}).get()
    return cnt.data
}

exports.handler = hasBinding