function startupStats(client) {
        if(!client.shard) {
            console.log(`====================================`)
            console.log(`Guilds: ${client.guilds.cache.size}`)
            console.log(`Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
            console.log(`Shards: no sharding`)
            console.log(`WebSocket Ping: ${client.ws.ping}`)
            console.log(`Bot: ${client.user.tag}`)
            console.log(`====================================`)
        } else{
            console.log(`====================================`)
            console.log(`Guilds: ${client.guilds.cache.size}`)
            console.log(`Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
            console.log(`Shards: ${client.shard.count}`)
            console.log(`WebSocket Ping: ${client.ws.ping}`)
            console.log(`Bot: ${client.user.tag}`)
            console.log(`====================================`)
        }
};

module.exports = startupStats