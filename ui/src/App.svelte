<script>
  let visible = false; // Variabile per gestire la visibilità dell'app

  // Aggiungi un listener per il messaggio globale
  window.addEventListener('message', (event) => {
    console.log('Messaggio ricevuto:', event.data);

    // Verifica l'azione del messaggio
    if (event.data.action === 'openUI') {
      visible = true; // Mostra l'app
    } else if (event.data.action === 'closeUI') {
      visible = false; // Nascondi l'app
    }
  });
</script>

<!-- Mostra l'app solo se visible è true -->
{#if visible}
<main>
  <h1>Benvenuto nella UI!</h1>
  <button on:click={() => (visible = false)}>
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
