import * as Cfx from 'fivem-js';

RegisterNuiCallbackType("ready");
on("__cfx_nui:ready", (data, cb) => {
    emitNet("identity:uiReady"); // Invia al server che la UI è pronta
    cb(); // Rispondi alla callback se necessario
});

onNet("identity:openUi", () => {
    // Mostra l'interfaccia al giocatore
    SetNuiFocus(true, true); // Abilita la UI
    SendNuiMessage(JSON.stringify({ action: "openIdentity" }));
});

RegisterNuiCallbackType("submitIdentity");
on("__cfx_nui:submitIdentity", async (data, cb) => {
    await emitNet("identity:submitIdentity", data);
    SetNuiFocus(false, false); // Abilita la UI
    cb();
});

RegisterCommand("testui", () => {
    emit("identity:openUi");
});