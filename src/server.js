const mongodb = global.exports["mongodb"];

on('playerConnecting', async (name, setKickReason, deferrals) => {
    deferrals.defer();
    const player = global.source;
    const identifiers = getPlayerIdentifiers(player);
    const steamId = identifiers.find((id) => id.startsWith('steam:'));

    if (!steamId) {
        deferrals.done("Steam deve essere avviato per accedere al server.");
        return;
    }

    try {
        mongodb.findOne({
            collection: "users",
            query: { steamId },
        }, (success, result) => {
            if (success && result.length) {
                console.log(`Giocatore già registrato: ${result[0].name} ${result[0].lastname}`);
                deferrals.done();
            } else {
                deferrals.done(); // Completa la connessione
                console.log(`Nuovo giocatore con Steam ID: ${steamId}`);
            }
        });
    } catch (err) {
        console.error("Errore durante la verifica dell'utente:", err);
        deferrals.done("Errore del server. Riprova più tardi.");
    }
});

onNet('identity:ready', async () => {
    const player = global.source;
    emitNet('identity:openNUI', player);
})

onNet('identity:submit', async (data) => {
    const player = source;
    const identifiers = getPlayerIdentifiers(player);
    const steamId = identifiers.find((id) => id.startsWith('steam:'));

    if (!steamId) {
        console.error("Impossibile salvare i dati senza uno Steam ID.");
        return;
    }

    const { name, lastname, age, height, nationality } = data;

    try {
        const db = global.exports["mongodb"].getDB("fivem_database");
        const usersCollection = db.collection("users");

        await usersCollection.insertOne({
            steamId,
            name,
            lastname,
            age,
            height,
            nationality,
            createdAt: new Date(),
        });

        console.log(`Utente ${name} ${lastname} salvato con successo!`);

        // Teletrasporta il giocatore
        const spawnCoords = { x: 200.0, y: 200.0, z: 20.0 }; // Sostituisci con le tue coordinate
        emitNet('identity:teleport', player, spawnCoords);
    } catch (err) {
        console.error("Errore durante il salvataggio dei dati:", err);
    }
});