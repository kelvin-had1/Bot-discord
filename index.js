const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client()


const prefix = "+";

client.on('message', (msg)=>{
    if (msg.author.bot) return
    if (!msg.content.startsWith(prefix)) return
    
    const commandBody = msg.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const comando = args.shift().toLowerCase()
    
    if(comando === 'soma') {
        const numArgs = args.map(x => parseFloat(x))
        const sum = numArgs.reduce((counter, x) => counter += x)
        msg.reply(`a soma dos números é ${sum}!`)
    }

})

client.on('message', msg => {
    const comando = msg.content

    
    
    switch (comando) {
        case 'Mineiro':
            msg.reply('Euvo seu doente! :cheese:')
            break;

            case 'Victor':
                msg.reply('Um aliado foi desconectado :flushed:')
            
                break

                case 'Erik':
                    msg.reply('Rexxxxxxxxxxxpeita o mono Shen, Ganko bot ulto top e mando maestria')
                    break
    
                    case 'Kelvin':
                        msg.reply('Mono Lee Sunga')
                        break

                        case 'Nicolas':
                            msg.reply('Senpai')
                            break

                            case 'Igor':
                                msg.reply('yasuo montage ataque basico')
                                break

                                case 'Ellen':
                                    msg.reply('Queijinho')
                                    break

                                    case 'Giovana':
                                        msg.reply('Esposa do Kelvin, forget')
                                        break

        default:
            break;
    }

})

client.login(config.BOT_TOKEN)