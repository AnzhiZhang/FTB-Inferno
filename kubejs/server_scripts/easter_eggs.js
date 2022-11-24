onEvent('player.logged_in',(event) => {
    let player = event.player

    //Birthdays
    let currentDate = new Date()
    let today =
        currentDate.getMonth() +
        1 + //[0,11] so +1
        '-' +
        currentDate.getDate() //[0,31]
    let birthdays = [
        ['aaronhowser1','12-2','Pack dev'],
        ['Saereth','11-23','Pack dev'],
        ['Tazz','6-21','Pack dev'],
        ['Gennie','2-7','Structure builder'],
    ]

    birthdays.forEach((birthday) => {
        let person = birthday[0]
        let birthdate = birthday[1]
        let role = birthday[2]

        if (birthdate == today) {
            player.tell([
                Component.string('Happy birthday to '),
                Component.string('[' + person + ']').hover(Component.string(role)),
            ])
        }
    })
})

//Amogus
onEvent('ftbquests.custom_reward.3B841D268E88C261',(event) => {
    const { player } = event
    if (player != null) {
        const mungus = player.level.createEntity('alexsmobs:mungus')
        mungus.setPosition(player.x,player.y,player.z)
        mungus.spawn()
        //player.server.runCommandSilent(	`execute at ${player.id} run playsound inferno:amogus master ${player}`	)
        //Removed for copyrwrite reasons, the saddest reasons
    }
})
