var debug = require('debug')('botkit:channel_join')

module.exports = controller => {
  controller.on('bot_channel_join', (bot, message) => {
    controller.studio.run(bot, 'channel_join', message.user, message.channel).catch(err => {
      debug('Error: encountered an error loading onboarding script from Botkit Studio:', err)
    })
  })
}
