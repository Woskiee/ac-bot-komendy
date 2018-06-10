var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Configure logger settings.
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize:true
});

logger.level = 'debug';

//Initialize the bot
var bot = new Discord.Client({
    token: auth.token,
    autorun:true
});

bot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //Bot will listen for messages that start with an '!'.
    if(message.substring(0, 1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //!test
            case 'test':
                bot.sendMessage({
                    to: channelID,
                    message: "Wiiiiitajcie ja jestem zobooooknes!!"
                });
            break;
            //!komendy
            case 'komendy':
                bot.sendMessage({
                    to: channelID,
                    message: ":black_small_square: !rangi - informacje o rangach VIP/SVIP/MVIP.\\n:black_small_square: !administracja - spis ekipy i administracji serwerka  discord.\\n:black_small_square: !mcserwer - ip KOZACKIEGO serwerka mc\\n:black_small_square: !serwer - informacje o serwerze\\n:black_small_square: !8ball Pytanie? - odpowiedz bota\\n:black_small_square: !regulamin - wyświetla regulamin serwera discord.\\n:black_small_square: !levels - pokazuje status lvl.\\n:black_small_square: !yt - informacje na temat reklamowania i rangi YouTuber\\n:black_small_square: !rank - pokazuje wykres lvl\\n:black_small_square: !porn - aaaa.....\\n:black_small_square: !rekrutacja - informacje na temat rekrutacji"
                });
            break;
            //!rangi
            case 'rangi':
                bot.sendMessage({
                    to: channelID,
                    message: "✪ @VIP posiada:\\n\\n:black_small_square:  Możliwość posiadania 1 kanału prywatnego.\\n\\n:black_small_square: Unikalny kolor na chacie.\\n\\n:black_small_square: Wyświetlanie w oddzielnej kategorii.\\n\\n:black_small_square: Dostęp dla strefy VIP/SVIP/MVIP.\\n\\n✪ @SVIP posiada:\\n\\n:black_small_square: Wszystko to co @VIP\\n\\n:black_small_square: Wyświetlanie w oddzielnej  kategorii\\n\\n:black_small_square: Unikalny kolor na chacie.\\n\\n:black_small_square: Możliwość posiadania 2 kanałów prywatnych.\\n\\n✪ @MVIP posiada:\\n\\n:black_small_square: Wszystko to co @VIP i @SVIP\\n\\n:black_small_square: Wyświetlanie w oddzielnej  kategorii.\\n\\n:black_small_square: Unikalny kolor na chacie.\\n\\n:black_small_square: Możliwość posiadania 3 kanałów prywatnych.\n"
                });
            break;
            //!mcserwer
            case 'mcserwer':
                bot.sendMessage({
                    to: channelID,
                    message: ":black_small_square: Jak już idziesz grać w minecrafa to wpadnij na: diglett.pl. Pograsz tutaj na sieci serwerów -  wersja 1.7 - 1.12.1 :D, a jeśli chcesz mnie spotkać to zapraszam na tryb 4fun, (takie ciasteczko)"
                });
            break;
            //!serwer
            case 'serwer':
                bot.sendMessage({
                        to: channelID,
                        message: ":black_small_square: Serwer powstał aby integrować ludzi i nawiązywać znajomości.\\n\\n:black_small_square: Serwer informuje o nowościach w grach i dostarcza ciekawostek z świata gier.\\n\\n:black_small_square: Na serwerze nie można się nudzić, atrakcyjne komendy poprawią wszystkim humor, a atmosfera panująca na serwerze nawet największego smutasa wyrwie z melancholii.\\n\\nMIŁEJ GRY!"
                });
            break;
        }
    }
});