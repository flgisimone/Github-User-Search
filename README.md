<h1> Github User Search </h1>

<h2> OBIETTIVI </h2>

Creare un'applicazione che all'input di un username, appartente ad un utente registrato su Github, rimandi le informazioni principali dell'account.

<h3> API utilizzate </h3>

<li> API per le informazioni relative all'utente: `https://api.github.com/users/${user}` </li>
<li> API per le informazioni relative alle repository pubbliche dell'utente: `https://github.com/${user}?tab=repositories` </li>

<h3> Components e Atoms utilizzati </h3>

<h4> Atoms </h4>
<li> Error </li> -> Utilizzato per rimandare un messaggio a display per il non corretto funzionamento dell'API

<h4> Components </h4>
<li> SearchBar </li> -> Utilizzato per immettere l'input necessario a cambiare l'endpoint dell'API
<li> UserTab </li> -> Utilizzato per rimandare a display tutte le informazioni relative all'utente in seguito all'username inserito
<li> Footer </li>

<h3> Altri file </h3>
<li> CH_fetch </li> -> Utilizzato per dividere la logica della fetch e importarla direttamente all'interno del componente UserTab
 

