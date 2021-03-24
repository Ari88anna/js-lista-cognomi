// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1)
// della lista in cui il nuovo utente si trova
// (facciamo questo in 2 versioni: col ciclo for e col while)


// chiediamo il cognome all'utente

var cognomeUtente = prompt ('Qual è il tuo cognome?');

// creiamo una lista di cognomi

var  cognomiLista = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli' ];
console.log(cognomiLista);

// poi inseriamo il cognome dell'utente alla lista

cognomiLista.push (cognomeUtente);
console.log(cognomiLista);


// stampare la lista in ordine alfabetico

cognomiLista.sort();
console.log(cognomiLista)


for ( var i = 0; i<cognomiLista.length; i++ ) {
    console.log(cognomiLista[i])    
    
    // scrivere la posizione umana della lista in cui il nuovo utente si trova

    if (cognomiLista[i] == cognomeUtente) {

        var posizioneLista = i + 1 ;
        console.log(posizioneLista);

        alert('sei il numero ' + posizioneLista  + ' della lista')
    }
}



