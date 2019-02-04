const resolver = async (args, context) => {
  const { db, now, _openid } = context;
  const punch = {
    subjectId: 'words-daily',
    _openid: _openid,
    createdAt: now,
    credits: args.count,
    words: args.words,
    imageIds: args.imageIds
  }

  try {
    const res = await db.collection('punch').add({
      data: punch
    })
  }
  catch (e) {
    throw 'Here are some error...'
  }

  return punch
}

exports.resolver = resolver