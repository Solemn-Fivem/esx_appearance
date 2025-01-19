export function ISODate(date) {
    // Verifica se l'input è una data valida
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error("L'input deve essere un oggetto Date valido.");
    }

    // Calcola l'offset del fuso orario italiano (CET/CEST)
    const italianOffset = date.getTimezoneOffset() - (60); // Italia è UTC+1 (CET) o UTC+2 (CEST)

    // Regola la data con l'offset del fuso orario italiano
    const adjustedDate = new Date(date.getTime() - italianOffset * 60 * 1000);

    // Restituisci la data in formato ISO
    return adjustedDate.toISOString();
}