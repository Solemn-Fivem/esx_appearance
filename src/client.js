import Cfx from "fivem-js";

onNet("identity:open", () => {
    const playerPed = PlayerPedId();
    // Salva la posizione e l'heading originali per il ripristino
    const originalPos = GetEntityCoords(playerPed, true);
    const originalHeading = GetEntityHeading(playerPed);

    // Definisci una posizione target e un heading per l'inquadratura
    const targetPos = { x: -1170.21, y: 4926.41, z: 224.34 }; // Modifica in base alle tue esigenze
    const targetHeading = 90.0; // Imposta il player di fronte alla camera

    // Teletrasporta il player e imposta l'heading
    SetEntityCoords(playerPed, targetPos.x, targetPos.y, targetPos.z, false, false, false, true);
    SetEntityHeading(playerPed, targetHeading);

    // Blocca il player per evitare movimenti durante l'inquadratura
    FreezeEntityPosition(playerPed, true);
    SetPedCanPlayAmbientAnims(playerPed, false);
    SetPedCanPlayAmbientBaseAnims(playerPed, false);
    TaskStandStill(playerPed, 5000);

    // Attendi un breve intervallo per assicurarti che il ped si sia aggiornato
    setTimeout(() => {
        // Crea e posiziona la camera
        const cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
        SetCamCoord(cam, targetPos.x - 1, targetPos.y, targetPos.z + 1.5); // Alza leggermente la camera
        PointCamAtCoord(cam, targetPos.x, targetPos.y, targetPos.z + 1.5); // Inquadra il player
        SetCamActive(cam, true); // Assicurati che la camera sia attiva
        RenderScriptCams(true, false, 0, true, true);
        SetNuiFocus(true, true);

        // Dopo 5 secondi, ripristina la posizione originale, sblocca il player e distruggi la camera
        setTimeout(() => {
            RenderScriptCams(false, false, 0, true, true);
            DestroyCam(cam, false);

            // Ripristina il player
            FreezeEntityPosition(playerPed, false);
            SetEntityCoords(playerPed, originalPos[0], originalPos[1], originalPos[2], false, false, false, true);
            SetEntityHeading(playerPed, originalHeading);
            SetNuiFocus(false, false);

            // Comunica al server di reimpostare il bucket se necessario
            emitNet("identity:removeBucket", GetPlayerServerId(PlayerId()));
        }, 5000);
    }, 100); // 100ms di attesa per l'aggiornamento del ped
});

RegisterCommand("tpm", () => {
    const playerPed = PlayerPedId();
    const waypoint = GetFirstBlipInfoId(8); // 8 è il tipo di blip per il waypoint

    if (DoesBlipExist(waypoint)) {
        const coords = GetBlipInfoIdCoord(waypoint);
        let [found, groundZ] = GetGroundZFor_3dCoord(coords[0], coords[1], 1000.0, false);

        if (!found) {
            groundZ = coords[2]; // Usa l'altezza originale se il suolo non viene trovato
        }

        SetEntityCoords(playerPed, coords[0], coords[1], groundZ + 1.0, false, false, false, true);
        emit("chat:addMessage", {
            args: ["Teletrasportato al waypoint!"]
        });
    } else {
        emit("chat:addMessage", {
            args: ["Nessun waypoint impostato!"]
        });
    }
}, false);

RegisterCommand('car', async (source, args) => {
    const carName = args[0] || "adder";
    const carHash = GetHashKey(carName);

    RequestModel(carHash);

    const waitingCar = setInterval(() => {
        if (HasModelLoaded(carHash)) clearInterval(waitingCar);
    }, 500);

    const playerPed = PlayerPedId();
    const [x, y, z] = GetEntityCoords(playerPed, true);
    const vehicle = CreateVehicle(carHash, x, y, z, GetEntityHeading(playerPed), true, false);
    SetPedIntoVehicle(playerPed, vehicle, -1);
}, false);

RegisterCommand("getCoords", () => {
    const playerPed = PlayerPedId();
    const coords = GetEntityCoords(playerPed, true);
    console.log(`Posizione: ${coords[0]}, ${coords[1]}, ${coords[2]}`);
    emit("chat:addMessage", {
        args: [`Posizione: ${coords[0]}, ${coords[1]}, ${coords[2]}`]
    });
});