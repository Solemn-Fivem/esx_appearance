<script>
  let visible = false; // Controlla la visibilità della UI

  // Listener per i messaggi inviati da FiveM
  window.addEventListener('message', (event) => {
    console.log('Messaggio ricevuto:', event.data);

    // Controlla l'azione ricevuta
    if (event.data.action === 'openUI') {
      visible = true; // Mostra la UI
    } else if (event.data.action === 'closeUI') {
      visible = false; // Nascondi la UI
    }
  });

  // Funzione per chiudere la UI e inviare la callback a FiveM
  const closeUI = () => {
    // Invio della callback a FiveM
    fetch('https://first-nui/closeUI', { // Sostituisci "resource_name" con il nome della tua risorsa
      method: 'POST',
    });

    visible = false; // Nascondi la UI localmente
  };
</script>

<!-- Mostra la UI solo se visible è true -->
{#if visible}
<main>
  <h1>Benvenuto nella UI!</h1>
  <button on:click={closeUI}>
    Chiudi
  </button>
</main>
{/if}

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 2rem;
    background-color: #222;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
