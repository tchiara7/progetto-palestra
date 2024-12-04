//Gestione acquisto corsi
function mostraNotifica(nomeCorso) {
    const notifica = document.getElementById("notifica");
    notifica.classList.remove("d-none");
    notifica.innerText = "Acquisto efettuato! Hai acquistato il corso " + nomeCorso;
    setTimeout(() => {
        notifica.classList.add("d-none");
    }, 3000);
}

// Gestione del modulo
document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo
    document.getElementById('successMessage').classList.remove("d-none"); // Mostra il messaggio di successo
    this.reset(); // Reset del modulo
});