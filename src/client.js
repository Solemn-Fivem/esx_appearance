import * as Cfx from 'fivem-js';

RegisterNuiCallbackType('ready');
on('__cfx_nui:ready', (data, cb) => {
    console.log('NUI is ready!');

    emitNet('identity:ready');
});

onNet('identity:openNUI', () => {
    console.log("Mostrando l'interfaccia.");
    SetNuiFocus(true, true); // Abilita la NUI
    SendNuiMessage(JSON.stringify({ action: 'openIdentity' }));
});