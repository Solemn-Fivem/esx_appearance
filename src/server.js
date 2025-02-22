RegisterCommand("setskin", (source, args, rawCommand) => {
    // Assegna un bucket univoco al player (ad esempio usando il suo ID)
    const bucket = source;
    SetPlayerRoutingBucket(source, bucket);

    // Invia un evento al client per attivare la visuale personalizzata
    emitNet("identity:open", source);
}, false);

onNet("identity:removeBucket", (source) => {
    // Reimposta il bucket del giocatore a 0 (bucket di default)
    SetPlayerRoutingBucket(source, 0);
});

RegisterCommand("test", (source, args, rawCommand) => {
    emitNet("identity:openUi", source);
}, false);