const subjects = require('../subjects')
const cloud = require('wx-server-sdk')

const handler = async (e, ctx) => {
    const { subjectId } = e
    const subject = subjects.subjects.find(s => s.id == subjectId)
    if (subject == undefined) {
        throw 'Invalid subject id.'
    }
    const db = cloud.database().collection('punch')
    const data = await db.where({subjectId: subjectId}).orderBy('createdAt', 'desc').get()
    const punch = data.data
    // const imageProms = punch.map(p => cloud.getTempFileURL(
    //   {fileList: p.imageIds}
    // ))
    // const imageFiles = await Promise.all(imageProms)
    // const imageUrls = imageFiles.map(f => f.fileList.map(x => x.tempFileURL))
    // return Object.assign({}, punch, {images: imageUrls})
    return punch
}

exports.handler = handler