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
      Timezone: 'Central',
      Name: 'Kelsey',
      password: '123',
    }),
    User.create({
      email: 'leslie@email.com',
      Interest: 'Coffee',
      Timezone: 'Eastern',
      Name: 'Leslie',
      password: '123',
    }),
    User.create({
      email: 'hannah@email.com',
      Interest: 'Linguistics',
      Timezone: 'Central',
      Name: 'hannah',
      password: '123',
    }),
    User.create({
      email: 'thenu@email.com',
      Interest: 'music',
      Timezone: 'Central',
      Name: 'thenu',
      password: '123',
    }),
    User.create({
      email: 'tts2021@email.com',
      Interest: 'tech',
      Timezone: 'Central',
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

  for (let i = 0; i < messages.length; i++) {
    if (i < users.length) {
      await users[i].addMessage(i)
    } else await users[0].addMessage(i)
  }
  users.forEach(async (user) => {
    await Promise.all([
      user.addChannel(Math.floor(Math.random() * 5)),
      user.addChannel(Math.floor(Math.random() * 5)),
    ])
  })
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
    setTimeout(async () => await db.close(), 1500)
    console.log('db closed')
  }
}
runSeed()
