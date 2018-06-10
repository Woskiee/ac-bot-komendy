import discord

client = discord.Client()

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return

    if message.content.startswith('!witaj'):
        msg = 'Wiiiiiiiiitajcie ja jestem Dooooknesss! {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)

@client.event
async def on_ready():
    print('Zalogowano jako')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run('NDU1MzgzNzExODM2NDA1NzYw.Df7N7Q.DTVxzeYaNITacZvmKwC_gL43Nbo')
