const db = require('../Server/db')
const {User, Channel, Message} = require('../Server/db/Models')
const {channelData, messageData} = require('./data')

async function seed() {
  await db.sync({force: true})
  console.log('db sync begun: old data purged!')

  const users = await Promise.all([
    User.create({
      email: 'kelsey@email.com',
      Interest: 'aviation',
      TimeZone: 'Central',
      Name: 'Kelsey',
      password: '123',
    }),
    User.create({
      email: 'leslie@email.com',
      Interest: 'Coffee',
      TimeZone: 'Eastern',
      Name: 'Leslie',
      password: '123',
    }),
    User.create({
      email: 'hannah@email.com',
      Interest: 'Linguistics',
      TimeZone: 'Central',
      Name: 'hannah',
      password: '123',
    }),
    User.create({
      email: 'thenu@email.com',
      Interest: 'music',
      TimeZone: 'Central',
      Name: 'thenu',
      password: '123',
    }),
    User.create({
      email: 'tts2021@email.com',
      Interest: 'tech',
      TimeZone: 'Central',
      Name: 'TechTogetherSeattle',
      password: '123',
    }),
  ])
  const messages = await Promise.all(
    messageData.map((message) => Message.create(message))
  )
  const channels = await Promise.all(
    channelData.map((channel) => Channel.create(channel))
  )

  if (messages && channels && users) {
    for (let i = 1; i <= messages.length; i++) {
      if (i < channels.length) {
        await users[i].addMessage(i)
        await channels[i].addMessage(i)
      } else {
        await users[0].addMessage(i)
        await channels[0].addMessage(i)
      }
    }
    users.forEach(async (user) => {
      await Promise.all([user.addChannel(Math.floor(Math.random() * 5) + 1)])
    })
  }
  console.log('seeded users, channels, and messages')
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('done seeding')
    setTimeout(async () => {
      await db.close()
      console.log('db closed')
    }, 2000)
  }
}
runSeed()
