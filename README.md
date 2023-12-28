# Progetto Javascript Basic - Counter
<a name="readme-top"></a>
## Introduzione
Il seguente progetto rappresenta la conclusione del corso Start2Impact relativo a Javascript Basic. Il suo obiettivo principale consiste nella creazione di un'applicazione web interattiva dotata di un counter, progettato per il conteggio di oggetti o persone tramite due pulsanti +/-, resi funzionali attraverso Javascript. 
Tuttavia, il mio impegno in questo progetto non si è fermato ai requisiti minimi. Ho esteso l'applicazione con una serie di funzionalità aggiuntive, tra cui la possibilità di aggiungere nuovi counter, modificare i titoli di ciascun contatore, cancellarli quando necessario e aggiungere pulsanti per reimpostare e aggiungere valore ai contatori oltre che la possibilità di cambiare tema di visualizzazione della pagina. Ho prestato particolare attenzione alla parte estetica del sito web adottando uno stile pulito e minimale.

## Sommario

- [Descrizione progetto](#descrizione-progetto)
  - [index.js](#indexjs)
  - [Cambio Tema](#cambio-tema)
- [Linguaggi utilizzati](#linguaggi-utilizzati)
- [Link progetto](#link-progetto)
- [Licenza](#licenza)
- [Contatti](#contatti)

## Descrizione progetto
### index.js

Questo codice JavaScript è stato sviluppato per creare un'applicazione web interattiva che gestisce un contatore principale e consente agli utenti di aggiungere contatori aggiuntivi. L'applicazione fornisce una serie di funzionalità per ciascun contatore, tra cui incremento, decremento, reimpostazione e aggiunta di valori personalizzati. Di seguito sono riportate le principali caratteristiche:

- **Contatore Principale:** Nella homepage, nel momento in cui si accede al sito, compare il contatore principale che può essere incrementato, decrementato, reimpostato e aggiornato con valori personalizzati.

- **Contatori Personalizzati:** Gli utenti hanno la flessibilità di aggiungere più contatori personalizzati, ciascuno con il proprio titolo. Questi contatori sono completamente funzionali e includono lo stesso set di funzionalità del contatore principale.

- **Titoli dei Contatori Editabili:** Gli utenti possono modificare i titoli sia del contatore principale che dei contatori personalizzati facendo clic su di essi e confermando le modifiche.

- **Aggiunta e Rimozione Dinamica dei Contatori:** Il pulsante "Aggiungi Contatore" consente agli utenti di creare nuovi contatori, mentre il pulsante "Cancella" permette di rimuovere un contatore specifico.

- **Interfaccia Utente Responsiva:** L'interfaccia utente è responsiva e si aggiorna in base alle dimensioni del dispositivo.

Questo codice JavaScript può essere utilizzato come base per la creazione di un'applicazione web di gestione dei contatori e offre la flessibilità di gestire e monitorare contemporaneamente diversi contatori.

<a href="https://ibb.co/K5Cx2G5"><img src="https://i.ibb.co/NFw293F/Counter.gif" alt="Counter" border="0" width="139px" height="246px"></a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Cambio Tema

Quando l'utente clicca sull'icona del sole o della luna, a cui è associato l'ID "toggleNightModeButton", il codice aggiunge o rimuove la classe CSS "nightMode" del body dell'applicazione, provocando un cambio del tema dalla modalità scura alla modalità chiara, o viceversa.
Ad ogni click, il bottone cambia l'icona per rappresentare la modalità del tema attualmente in uso. Se compare l'icona del sole significa che è attivo il tema scuro, se invece compare la luna è attivo il tema chiaro.
L'effetto che ho ottenuto con il CSS è quello di invertire i colori del contenuto utilizzando il filtro "invert" al 100% e con “background-color: white !important” per forzare il cambio di sfondo, dal colore originario al bianco. 
Ho utilizzato "!important" per assicurarmi che questa regola prevalga sugli altri CSS esistenti. 

<a href="https://ibb.co/7v1ZpWf"><img src="https://i.ibb.co/JnsGp71/togglemode.gif" alt="togglemode" border="0" width="139px" height="246px"></a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Linguaggi utilizzati:
- HTML
- CSS
- JAVASCRIPT

## Realizzato con:
- Visual Studio Code
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Link progetto:
- Live Demo: https://counterstart2impact.netlify.app/
- Repo GitHub: https://https://github.com/StefanoRimoldi/Progetto-Javascript-Basics
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Licenza
Soggetto ai termini della licenza MIT. Consulta LICENSE.txt per ulteriori informazioni.

## Contatti
- Email: rimoldistefano@gmail.com
- Linkedin: www.linkedin.com/in/stefano-rimoldi

<p align="right">(<a href="#readme-top">back to top</a>)</p>
