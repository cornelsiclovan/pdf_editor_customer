import React from 'react';
import Card from '../../UIElements/Card';
import Button from '../../FormElements/Button';

import './ClientItem.css';
import './ClientList.css';

const NoItem = props => {
    
    return (
        <React.Fragment>
            <ul className="place-list">
            <li className="place-item">
                <Card className="place-item__content">
                            <div className="place-item__info">
                                Va rugam sa apasati butonul de mai jos pentru a aduga datele dumneavoastra
                            </div>
                            <div className="place-item__actions">
                                <Button inverse to={`/clienti/new`}>Am citit si sunt deacord cu termenii si conditiile si doresc sa <br/><b>adaug datele</b></Button>
                            </div>
                </Card>
                <br/>

                <Card className="place-item__content">
                            <div>
                                <center><h2>Nota de informare protecția datelor personale GDPR</h2></center>
                                <p style={{padding: 25 +"px"}}>
                                Conform cerinţelor Legii nr. 677/2001 pentru protecţia persoanelor cu privire la prelucrarea datelor cu caracter personal şi libera circulaţie a acestor date, modificată şi completată şi ale Legii nr. 506/2004 privind prelucrarea datelor cu caracter personal şi protecţia vieţii private în sectorul comunicaţiilor electronice, platforma noastră .................... administrata de către DG TRAINING & SCHOOL SRL, are obligaţia de a administra în condiţii de siguranţă şi numai pentru scopurile specificate, datele personale pe care ni le furnizaţi despre dumneavoastră, un membru al familiei dumneavoastră ori o altă persoană. Scopul colectării datelor este utilizarea lor in vederea ofertarii și prestarii serviciilor solicitate și facturarea acestora.
                                    In conformitate cu Regulamentul General Privind Protectia Datelor (GDPR), care a intrat  in vigoare la 25 mai 2018, dorim sa va informam in legatura cu drepturile dumneavoastra asupra datelor personale. Securitatea datelor dumneavoastra este foarte importanta pentru noi. Ne asiguram in permanenta ca sistemele noastre de stocare si prelucrare a datelor au un grad ridicat de securitate si sunt aliniate la cerintele regulamentelor si legilor in vigoare, privind protectia datelor cu caracter personal.
                                Atunci când accesați platforma  ..................................... sau ne contactati, vă rugăm să ne furnizați informații personale.
                                Avem nevoie de acordul dumneavoastra pentru a va oferi:
                                <ul>
                                        <li><b>Informatii, oferte speciale privind serviciile noastre și serviciile către ONRC, ANAF
                                Care sunt datele cu caracter personal folosite de echipa noastra?</b></li>
                                        <li><b>Nume si prenume </b></li>
                                        <li><b>Adresa de domiciliu</b></li>
                                        <li><b>Seria CI/BI/Pasaport și CNP</b></li>
                                        <li><b>Adresa de E-mail și WEB</b></li>
                                        <li><b>Numar de telefon </b></li>
                                        <li><b>Functia dumneavoasra în cadrul societății pe care o reprezentați.</b></li>
                                </ul>
                                    Aceste informații sunt salvate în baza de date a clienților pentru a vă putea oferi serviciile noastre. 
                                    Conform Legii nr. 677/2001, beneficiaţi de dreptul de acces, de intervenţie asupra datelor, dreptul de a nu fi supus unei decizii individuale şi dreptul de a vă adresa justiţiei. Totodată, aveţi dreptul să vă opuneţi prelucrării datelor personale care vă privesc şi să solicitaţi ştergerea datelor. Dacă unele din datele despre dumneavoastră sunt incorecte, vă rugăm să ne informaţi cât mai curând posibil. Pentru exercitarea acestor drepturi, vă puteţi adresa cu o cerere scrisă, datată şi semnată la Departamentul Reclamatii, la adresa de e-mail dgtrainingschool@gmail.com  De asemenea, vă este recunoscut dreptul de a vă adresa justiţiei.
                                    Dacă în orice moment doriți să vă ștergeți contul online si/sau datele personale, vă rugăm să ne contactați la adresa de email: dgtrainingschool@gmail.com  sau prin intermediul detaliilor de contact (email, număr de telefon sau formular online).

                                    Astfel, echipa DG TRAINING & SCHOOL SRL   a implementat o serie de solutii tehnice pentru care va solicitam atentia:
                                •	Va puteti retrage și din păcate nu va putem onora cu serviciile noastre 
                                •	nu vă stochează datele decât este necesar pentru scopurile in care au fost inițial trimise și procesate.
                                •	Puteti solicita stergerea/anonimizarea datelor din contul dumneavoastra de client, la adresa de email:  dgtrainingschool@gmail.com 
                                Această declarație de confidențialitate poate fi modificată fără o notificare prealabilă ca urmare a
                                modificărilor efectuate în operațiunile noastre. Prin urmare, vă recomandăm să verificați regulat această declarație de confidențialitate. 
                                </p>
                            </div>
                </Card>

                <br/>

                <Card className="place-item__content">
                            <div>
                                <center><h2>Declarație de confidențialitate</h2></center>
                                <p style={{padding: 25 +"px"}}>
                                În principiu, datele dvs. personale vor fi utilizate de DG TRAINING & SCHOOL SRL  și de catre afiliații/angajatii săi 
	Noi nu dezvăluim datele personale terților fără permisiunea dvs., cu excepția cazului în care suntem obligați să faceți acest lucru prin lege sau printr-o hotărâre judecătorească.

	In cazul folosirii platformei noastre online dedicata operatiunilor la Registrul Comertului/ ANAF, informațiile dvs. personale vor fi păstrate pentru o mai facila  comunicare și ofertare a serviciilor noastre.

	Respectăm confidențialitatea tuturor clienților și ne asigurăm că toate informațiile personale pe care ni le furnizați rămân confidențiale, totuși trebuie să înțelegeți că informațiile pe care le furnizați prin intermediul acestui Formular/trimise pe email/Whatsapp sau alta aplicație  vor fi disponibile echipei noastre cu scopul de a aborda în mod corespunzător și de a evalua cererea dumneavoastră.

	Această declarație de confidențialitate se aplică exclusiv serviciilor noastre.

	De asemenea aducem in atentia tuturor clientilor nostri ca datele inscrise la Registrul comertului sunt publice. 


                                </p>
                            </div>
                </Card>
            </li>
            </ul>
        </React.Fragment>
    );
};  

export default NoItem;