RegisterCommand('openui', () => {
    SetNuiFocus(true, true); // Abilita il focus per la NUI
    SendNuiMessage(JSON.stringify({ action: 'openUI' })); // Invia un messaggio alla UI (opzionale)
}, false);

RegisterNuiCallbackType('closeUI');
on('__cfx_nui:closeUI', () => {
    SetNuiFocus(false, false); // Disabilita il focus
    console.log('UI chiusa');
});
