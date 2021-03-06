const wordsDaily = require('./resolvers/wordsDaily')

const subjects = [
  {
    id: 'words-daily',
    title: 'Word Daily',
    description: 'Recite words everyday.',
    punch: {
      options: [
        {
          name: 'count',
          hint: 'Words',
          datatype: 'number'
        }
      ],
      resolver: wordsDaily.resolver
    }
  },
  {
    id: 'get-up-early',
    title: 'Get Up Early',
    description: 'Try to get up early.',
    punch: {
      options: [],
      resolver: () => {data: 'Success!'}
    }
  }
]

exports.subjects = subjects;