console.log ("ĮŽANGA");
//Javascript - objektinio programavimo kalba, dažniausiai naudojama vartotojo interaktyvioje sąsajoje WWW puslapiuose. Ją 1995 m. sudarė Brendan Eich. 
//JS buvo skirta Netscape naršyklei ir pirmą kartą panaudota 1996 m.
//Pirmą kartą standartizuota 1997 m. Oficialiau žinoma ECMAscript pavadinimu pagal ECMA - Europos kompiuterinės įrangos gamintojų asociacijos, kuri įvedė JS standartą, pavadinimą. Standarto pavadinimas ECMA-262.
//Vienas iš didžiausių pakeitimų JS standarte įvyko 2015 m. paverčiant JS visaverte programavimo kalba. Po to galiojanti JS redakcija paprastai vadinama „ES6 ir vėlesne“ versija ir atnaujinama bemaž kasmet.
// Javascript programos 'hostai' yra interneto naršyklės ir nuo 2010 m. - Node.js serverių programa.
// Paprasčiausiai Javascript išbandyti galima iššaukus interneto naršyklėje 'Developer Tools' langą per F12 arba Ctrl+Shift+I. Po to atsidariusiame lange pasirinkti 'Console' skirtuką. 
//Parašius konsolės eilutėje JS suprantamą operaciją ir nuspaudus 'Enter' galima pamatyti JS veikimą. Pvz., parašykite: 'l=2+3' ir 'Enter' arba 'k=[1, 2, 3, 4]' ir 'Enter'. 
//Naršyklės konsolės langas supranta tik vienos eilutės operacijas, tad juo parašyti didesnes programas yra sudėtinga. Tam naudojami programavimo redaktoriai: Atom, Notepad++, VSCode, Sublime ir kt. Išsaugotos JS bylos turi .js pavadinimo paplėtimą.
//Pamatyti šiose programose veikiantį JS kodą galima susiejus vykdomą .js bylą su naršyklės aktyviuoju puslapiu (.html byla) tame pačiame konsolės lange arba instaliavus Node.js paketą, kuris pavaizduoja veikiantį JS kodą redaktoriaus 'Terminal' lange. 
//Paruoštą JS kodą galima tiesiogiai įterpti HTML bylos <script> elemente.
//Kiti būdai pamatyti veikiantį JS kodą: HTML elementuose (per innerHTML komandą), HTML vaizde (per document.write komandą) ir perspėjimo languose (per window.alert komandą).
//Programuojant reikia surinkti daug pasikartojančių tekstų ir tam padeda redaktoriuose įdiegtas Emmet programinis tekstų nuspėjimo įrankis, kuris, renkant tekstą, automatiškai parodo artimus pasirinkimo variantus.
//Susipažinimui su JS programavimu pilnai tinka internetiniai ('online') redaktoriai, kurie dažniausiai turi HTML, CSS, JS kodų ir kodų veikimo peržiūros langus.
//JS kodas, galintis grąžinti rezultatą, vadinamas ekspresija, tad '2+3' ir '5<2' yra ekspresijos. Duomenys, kuriuos naudoja JS, suskirstyti į tipus. Tai skaičiai (Number), tekstai (String), objektai, masyvai (Array), Būlio (Boolean) ir kt. 
//Duomenys jungiami tarpusavyje operatoriais, kurių paprasčiausi yra matematiniai sudėties, daugybos ir kt. veiksmai. Operatoriais sujungti duomenys vadinami operandais. 
//Platesnis JS kodas, kuris nustato, kaip panaudojamos ekspresijos, vadinamas steitmentais Ūar lietuviškiau - sakiniais). Paprasčiausias steitmentas - kintamajam priskirta ekspresija, pvz., 'l=2+3'.
//Steitmentai vykdomi tuo eiliškumu, kuriuo užrašyti, ir gali būti jungiami į {} skliaustų blokus (angl. scope).

console.log ("SINTAKSĖ"); 
//Rašant kodą galima įvesti jo veikimą paaiškinančius komentarus, kiekvieno jo priekyje įvedant du // simbolius. Komentarų informacija vykdant programą visiškai ignoruojama.
/* Daugelio
eilučių komentaras
rašomas 
tarp šių simbolių */
//Priskyrus komentaro formatavimą JS kodui galima sustabdytijo vykdymą, pvz., testuojant.
//JS sintaksė ignoruoja tarpus ir tuščias eilutes tarp kodo elementų. JS reaguoja į skirtumus tarp mažųjų ir didžiųjų raidžių.
//Pvz.:
console.log
(
    "100"

    +
    3
);//yra lygu:
console.log ("100"+3);
//Specialūs JS žodžiai (raktažodžiai) yra nepanaudojami kitoms, nei jiems rezervuotoms, prasmėms, tad 'let' nėra tapatus 'Let' ir negalima panaudoti 'let' kitkam nei kintamojo deklaracijai.
//JS kodo pavadinimams užrašyti paprastai naudojamas žemesnysis 'camelCase' užrašymo metodas, kai pavadinimas pradedamas mažąja raide, o kiti reikšminiai jungtiniai žodžiai pradedami iš didžiosios. Pvz., apskaičiuotiSkritulioPlotą. Draudžiama pavadinimus pradėti skaitmenų ir specialiais simboliais, išskyrus _ ir $.
//JS kodas leidžia naudoti ne anglų kalbos simbolius pavadinimuose, bet juos naudojant gali kilti problemų senose sistemose, ir JS leidžia naudoti UNICODE simbolių kodavimą.
//Steitmentams atskirti JS naudojamas kabliataškio simbolis steitmento pabaigoje, bet jis nėra būtinas, jei kitas steitmentas pradedamas kitoje eilutėje. Išskyrus kai kuriuos atvejus, pvz., kai steitmentas pradedamas spec. simboliais, prieš tikėtiną kompiliatoriaus sumaišyti steitmentą verta padėti ';', taip atskiriant naują steitmentą nuo prieš tai buvusio.
//Išimtys: simboliai --, ++ ir => neskiriami ir turi būti toje pačioje eilutėje su argumentais, 'return, throw, yield, break, continue' raktažodžių steitmentai tęsiami toje pačioje eilutėje.
//Kodo suderinimui su ES6 ir vėlesniais standartais JS yra įvestas "use strict" tekstas. Įrašius šį tekstą JS bylos viršuje programa automatiškai fiksuos klaidą, kai panaudojama ankstesnio nei ES6 JS standarto sintaksė. 'Use strict' panaudojus funkcijos bloke ji veiks tik tame bloke (angl. scope);

console.log ("PRISKYRIMO IR TYPEOF OPERATORIAI");
//JS kalboje lygybės ženklas = reiškia priskyrimo operatorių, o ne lygybę. Pavyzdžiui, jau užrašytas 'l=2+3' parodo, kad l priskirta 2+3 ekspresija, 'k=[1, 2, 3, 4]' parodo, kad k priskirtas duomenų rinkinys [1, 2, 3, 4].
//Operatorius typeof parodo duomenų tipą pagal JS kalbą. Pvz.:
console.log(typeof(2));
console.log(typeof([1, 2, 3, 4]));

console.log ("OBJEKTAI");
//Objektas - duomenų porų 'pavadinimas:vertė' rinkinys.
//Objekto sukūrimas per let, const ir var kintamuosius:
let knyga = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
};//objektas yra tarp {skliaustų}.
//Objekto duomenų tipo patikrinimas:
console.log(typeof(knyga));
//Objekto duomenų pavaizdavimas konsolėje:
console.log(knyga);
//Objekto atskirų savybių pasiekimas:
knyga.autorius;//per taško notaciją;
knyga["puslapiuSkaicius"];//per [] skliautų notaciją, tekstai užrašomi kabutėse;
//Pavaizdavimas konsolėje:
console.log(knyga.autorius);
console.log(knyga["puslapiuSkaicius"]);//su [] iškviečiamos savybės, pavadintos skaičiais ar dar kitaip neįprastai, arba dinaminės savybės.
//Nesančių savybių iškvietimas (grąžins 'undefined'):
console.log(knyga.turinys);
let knyga1 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
}
//Objekto tekstinio pavadinimo savybės įvedimas:
knyga1.pavadinimas = "Tuštybės mugė";
knyga1.ISBN = "123-3234-345";
//Skaičiaus pavadinimo savybės įvedimas:
knyga1[100] = "kodas";
//Savybių pavadinimai iš dviejų žodžių užrašomi tekstinėse kabutėse ir iškviečiami [] skliaustų notacijos pagalba.
knyga1["išleidimo metai"] = 1992;
//Tuščios savybės įvedimas:
knyga1.turinys = {};
console.log(knyga1);
console.log(knyga1["išleidimo metai"]);
console.log(knyga1.turinys);
//Objekto savybė ištrinama naudojant delete operatorių:
let knyga2 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
}
delete knyga2["autorius"];
console.log(knyga2);

//Su raktažodžiu "new" galima sukurti objekto tipo tekstus, skaičius ir Būlio vertes:
let z = new String ("niekada")
console.log(typeof(z));
z = new String (100);
console.log(typeof(z));
z = new Boolean ("false")
console.log(typeof(z));
//Tokių kintamųjų sukūrimas yra vengtinas.

console.log ("OBJEKTŲ ŠABLONŲ SUKŪRIMAS");
//Paprasčiausia sukurti objektą su kintamojo deklaracija arba new raktažodį tiesiogiai įvedant jo savybes ir savybių vertes.
//Kuriant daug panašių objektų patogiau turėti jų kūrimo šablonus.
//Jų yra keliolika, vienas iš jų - funkcija, kuri grąžina objektą:
function Medis (pavadinimas, aukštis, skersmuo, savivaldybė) {
    return {
        pavadinimas,
        aukštis,
        skersmuo,
        savivaldybė, 
        aprašymas: function () {return this.pavadinimas+" yra "+this.aukštis+" m aukščio, "+this.skersmuo+" m skersmens medis "+this.savivaldybė+" savivaldybėje."}
    }
}
//Šios funkcijos sukurtas objektas turi keturias savybes ir vieną metodą.
//Pvz.:
let stelmuzesAzuolas = Medis("Stelmužės ąžuolas", "23", "3,5", "Zarasų");
console.log (stelmuzesAzuolas);
console.log (stelmuzesAzuolas.aprašymas());
let rumsiskiuMiskoPusis = Medis("Rumšiškių miško pušis", "32", "4", "Kaišiadorių");
console.log (rumsiskiuMiskoPusis);
console.log (rumsiskiuMiskoPusis.aprašymas());

//Objektų prototipo šablono sukūrimas per constructor funkciją:
function Asmuo (vardas, pavardė, amžius, lytis) {
    this.vardas = vardas;
    this.pavardė = pavardė;
    this.amžius = amžius;
    this.lytis = lytis;
    this.asmensAprašymas = function () {return vardas+" "+pavardė+" yra "+amžius+" amžiaus "+lytis+"."};
}
//Su constructor funkcija sukuriama objekto prototipo šablonas, iš kurio išvestiniai objektai paveldės savybes ir metodus. 
//Raktažodis this nurodo kuriamo objekto savybes.
let asmuo1 = new Asmuo ("Tomas", "Lukaitis", "34", "vyras");
console.log (asmuo1);
asmuo1.asmensAprašymas();
console.log(asmuo1.asmensAprašymas());

// Į objekto prototipą vėliau galima įvesti naujų savybių:
Asmuo.prototype.pilietybė = "lietuvis (-ė)";
console.log(asmuo1.pilietybė);
// Į objekto prototipą vėliau galima įvesti naujų metodų:
Asmuo.prototype.pilnasVardas = function () {return this.vardas+" "+this.pavardė};
//Šie metodai taps prieinami visiems objektams, paveldintiems šablono prototipą.
console.log(asmuo1.pilnasVardas());

//Objektų šablono sukūrimas per class raktažodį. Tai ES6 sintaksės metodas ir nesprantamas senesnėse ES5 JS versijas palaikančiose naršyklėse.
class AsmuoKitas {
    constructor (vardas, pavardė, amžius, lytis){
        this.vardas = vardas;
        this.pavardė = pavardė;
        this.amžius = amžius;
        this.lytis = lytis;
    }
        asmensAprašymas = function () {return this.vardas+" "+this.pavardė+" yra "+this.amžius+" amžiaus "+this.lytis+"."
        };
}
let asmuo2 = new AsmuoKitas ("Tomas", "Lukaitis", "34", "vyras");
console.log (asmuo2);
asmuo2.asmensAprašymas();
console.log(asmuo2.asmensAprašymas());
//Naujos savybės ir metodai įvedam  prototipą kaip ir constructor šablono atveju
AsmuoKitas.prototype.pilietybė = "lietuvis (-ė)";
console.log(asmuo2.pilietybė);
AsmuoKitas.prototype.pilnasVardas = function () {return this.vardas+" "+this.pavardė};
console.log(asmuo2.pilnasVardas());

console.log ("OBJEKTŲ SAVYBIŲ SAVYBĖS");
//Į objektą galima įvesti arba pakeisti savybes, kurių savybes programuotojas gali pats nustatyti per Object.defineProperty metodą:
Object.defineProperty(asmuo2, "pilietybė", {
    enumerable: true, // jei false, savybė nebus rodoma tarp objekto savybių.
    configurable: true,
    writable: true, // jei false, savybės vertė bu nepakeičiama.
    value: "lietuvis (-ė)"
});
console.log(asmuo2.pilietybė);
//Object.freeze () funkcija pavers objektą nekičiamu.
Object.freeze (asmuo2);
asmuo2.tarmė = "žemaitis (-ė)";
console.log (asmuo2.tarmė);
//Bet savybės įvedimas per prototipą persiduoda:
AsmuoKitas.prototype.gimimo_vieta = "Klaipėda";
console.log (asmuo2.gimimo_vieta);

console.log ("OBJEKTŲ METODAI");
//Objektų metodai yra jų savybės savo vertėse turinčios funkciją, kuri veikia to paties objekto atžvilgiu.
//Kai kurie metodai priskiriami kartu su objekto sukūrimu, kitus programuotojas gali sukurti ir priskirti.
//Kartu susikūrusius metodus galima pasitikrinti naršyklės konsolės lange išskleidus rodyklėlę ties objektu ir po to išskleidus kitą rodyklėlę ties [[Prototype]]. 
//Pvz., .hasOwnProperty metodas patikrina, ar objekte yra tam tikro pavadinimo savybė:
console.log (knyga2.hasOwnProperty("autorius"));//false (ne).
//Objekto savybių vertes ir savybių metodų aprašymus galima peržvelgti naudojant 'for ... in' ciklą:
for (i in stelmuzesAzuolas) {
    console.log(stelmuzesAzuolas[i])
}

console.log ("MASYVAI (arrays)");
//Masyvai - numeruotų duomenų rinkiniai.
//Masyvų sukūrimas:
let gatvesNamuNumeriai = [1, 2, 3, 4, 5, 7, 9];//masyvas yra tarp [skliaustų].
//Masyvo duomenų tipo patikrinimas:
console.log(typeof(gatvesNamuNumeriai));
//Masyvo duomenų pavaizdavimas konsolėje:
console.log (gatvesNamuNumeriai);
//Masyvų elementai sunumeruotip radedant 0 (nuline) pozicija:
console.log (gatvesNamuNumeriai[2]);
//Masyvo elementų eilutės ilgis pasiekiamas per .length raktažodį:
console.log (gatvesNamuNumeriai.length);
//Pakutinio masyvo elemento pasiekimas:
console.log (gatvesNamuNumeriai[gatvesNamuNumeriai.length-1]);

//Tuščio masyvo sukūrimas:
let tusciasMasyvas = [];
console.log(tusciasMasyvas);
//Tuščio masyvo su tuščiomis savybėmis sukūrimas:
tusciasMasyvas = [,,,,,];//penkių tuščių elementų masyvas.
console.log(tusciasMasyvas);
//Tuščio masyvo sukūrimas su nurodytu elementų eilutės ilgiu:
tusciasMasyvas = new Array(4);//keturių tuščių elementų masyvas.
console.log(tusciasMasyvas);


//Masyvo elementų įvedimas arba keitimas:
gatvesNamuNumeriai[0]=23;
console.log (gatvesNamuNumeriai[0]);
//Galima įvesti į masyvą aukštesnio eilės skaičiaus elementus:
gatvesNamuNumeriai[0]=25;
//Tačiau tokiu aveju tapinėse pozicijose lieka undefined elementai:
console.log (gatvesNamuNumeriai[10]);
console.log (gatvesNamuNumeriai[9]);
console.log (gatvesNamuNumeriai.length);
//Masyvo elemento ištrynimas:
delete gatvesNamuNumeriai[2];
//Naudojant delete operatorių pozicijoje lieka undefined/empty elementas, tad šis trynimo būdas nenaudotinas.
console.log (gatvesNamuNumeriai);

// Tekstas turi masyvo savybių: - ilgį, simbolio numerį:
z = "visada";
console.log (z.length); //teksto ilgis.
console.log (z[3]); //ketvirta raidė tekste.

//Pasiekti sudėtinių objektų ir masyvų savybes naudojama daugybinė taškų ir [] skliaustų notacija.
//Įvedame naują objektą į objektą knyga3.
let knyga3 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
}
knyga3["autoriaus_savybes"] = {tautybe:"anglas", amzius:"XIX", lytis:"vyras"}
console.log(knyga3);
//Pasiekiame savybę tautybe vidiniame objekte:
console.log(knyga3.autoriaus_savybes["tautybe"]);

//Masyvų tipas JS yra object. Specialiam patikrinimui yra metodas Array.isArray(), kuris grąžina true, jei objektas yra masyvas, ir false, jei nėra:
console.log (Array.isArray(gatvesNamuNumeriai));

console.log ("MASYVŲ METODAI")
//Masyvų elementų keitimas:
let mas = [1, 2, 3];
mas.push(4);
console.log(mas);//.push prideda elementą masyvo pabaigoje.
mas.pop();
console.log(mas);//.pop nuima elementą masyvo pabaigoje.
mas.shift();
console.log(mas);//.shift nuima elementą masyvo paradžioje.
mas.unshift(5);
console.log(mas);//.unshift prideda elementą masyvo paradžioje.

let mas1 = [1, 2, 3, 4]
mas1.splice (2, 1, 12, 24, 36);
console.log(mas1);//.splice pozicijoje 2 ištrina 1 elementą ir prideda nurodytuosius (12, 24, 36);
mas1.splice (3, 2, "mes", "jie");
console.log(mas1);
//.splice galima naudoti pašalinat elementus iš masyvo vietoj delete operatoriaus ir nepaliekant tuščių pozicijų:
mas1.splice(1, 2);
console.log(mas1);//pirmoje masyvo pozicijoje ištrinti 2 elementai (poz. 2 ir 3);
let h = mas1.concat(mas, gatvesNamuNumeriai);
console.log(h);//.concat sujungia keletą masyvų į vieną.
h = h.slice(5);
console.log (h);//.slice sukuria naują masyvą nuo nurodytos pozicijos iki pabaigos.
h = h.slice (0, 6);
console.log (h);//.slice sukuria naują masyvą nuo pirmo argumento pozicijos (įskaitant) iki antro argumento pozicijos (neįskaitant).

//Masyvo elementų keitimas į tekstą:
h = mas.toString();
console.log(h);//.toString tekstą pateikia ištisinį su kableliais;
h = mas.join(" / ");
console.log(h);//.join tekstą pateikia ištisinį su nuodytu argumento įterpiniu;
//JS gali automatiškai paversti tekstų masyvą vientisu tekstu priklausomai nuo konteksto:

//Masyvų elementų rūšiavimas:
h = ["mes", "jie", "jos", "arba", "kiti"];
console.log (h.sort());//.sort surūšiuoja tekstinius elementus pgal abėcėlę;
console.log (h.reverse ());//.reverse pakeičia elementų išdėstymą atbuline tvarka;
//.sort metodas tinka skaičių pozicijų rūšiavimui mažėjančia ar didėjančia tvarka. Tam reikia papildomai iššaukti palyginimo funkciją. .sort palygina du elementus ir pirmajai pozicijai parenka mažiausią arba didžiausią:
h = [4, 20, -3, 12, 1];
h = h.sort (function (a, b){
    return (a-b);
})
console.log(h);//skaičiai išrūšiuoti didėjimo tvarka (į dešinę);
h = h.sort (function (a, b){
    return (b-a);
})
console.log(h);//skaičiai išrūšiuoti mažėjimo tvarka (į dešinę);
//Surūšiavus elementus atitinkamai galima rasti didžiausią ir mažiausią masyvo skaičius (bus pirmasis ir paskutinis).
let didziausias = h[0];
let maziausias = h[h.length-1];
console.log (didziausias, maziausias);
//Skaičius galima sumaišyti atsitiktine tvarka;
h = h.sort (function (a, b){
    return (0.5-Math.random());
})
console.log(h);
//.sort palyginimo funkcija veikia ir objektų masyve atžvilgiu. Tuomet lyginami atskiri objektų elementai (pavadinimas ir vertė);

console.log ("ARITMETINIAI OPERATORIAI");
//Operatoriai - integruoti JS veiksmai su vertėmis (operandais).
//Aritmetiniai operatoriai + (sudėtis), - (atimtis), / (dalyba), * (daugyba), ** (kėlimas laipsniu), % (grąžina dalybos liekaną);
//Aritmetiniai operatoriai dažnai naudojami kartu su priskyrimo operatoriumi (=) keisti kintamojo vertę kodo metu taip vadinamuoju trumpuoju užrašymu:
let skaicius = 7;
skaicius++; //prideda vienetą.
console.log(skaicius);
skaicius--; //atima vienetą.
console.log(skaicius);
skaicius += 3; //prideda 3.
console.log(skaicius);
skaicius -= 4; //atima 4.
console.log(skaicius);
skaicius *= 4; //padaugina iš 4.
console.log(skaicius);
skaicius /= 3; //padalija iš 3.
console.log(skaicius);
skaicius %= 3; //priskiria dalybos iš 3 liekaną.
console.log(skaicius);

console.log ("PALYGINIMO OPERATORIAI");
//Palyginimo operatorių veiksmai gražina Būlio vertes 'true'(teisinga) ir 'false' (neteisinga).
let x = 10, y = 5; // = yra kintamojo deklaracijos simbolis, === yra griežtos lygybės operatorius, == yra negriežtos lygybės operatorius. 
console.log (x===y); //false.
console.log (typeof(x===y));//palyginimo duomens tipas.
console.log (x!==y); //true. !== yra griežtai nelygu, != yra negriežtai nelygu operatoriai.
console.log (typeof(x!==y));//palyginimo duomens tipas.
console.log (x < y); //false.
console.log (x <= y); //false.
console.log (x > y); //true.
console.log (x >= y); //true.
//Operatoriai > < >= <= ir == palyginime atlieka duomenų tipo pakeitimą, jei tai įmanoma.
console.log ("3" > 2); //true.
console.log ("2"==2); //true.
//Operatorius === palygina tiek vertės, tiek duomenų tipo atitikimą.
console.log ("2"===2); //false.
console.log ("taip"==="taip"); //true.
console.log (false === (x===y)); //true, apversta vertė.
//Sąlygos operatorius ? yra vienintelis, kuris naudoja tris operandus. Pvz.:
z = x!==y ? "tiesa" : "netiesa";
//Jei sąlyga (dalis prieš ?) yra true, operatorius grąžins vertę iškart po ?.
console.log(z);
z = !(x!==y) ? "tiesa" : "netiesa";
//Jei sąlyga (dalis prieš ?) yra false, operatorius grąžins vertę po : ženklo.
console.log(z);

console.log ("LOGINIAI OPERATORIAI");
// Loginiai operatoriai && - ir, || - ar, ! - priešingai,
//naudojami su Būlio vertėmis.
console.log ("2"!=2); //false.
console.log ((x!==y)&&(x > y)); //true (2 true, && operatorius grąžins true, kai abiejų pusių salygos yra true).
console.log ((x!==y)&&(x <= y)); //false (1 true, 1 false).
console.log ((x!==y)||(x <= y)); //true (1 true, 1 false, || operatorius grąžins true, kai bent vienos pusės salyga yra true).
console.log (!(x!==y)); //false (apverstas 1 true).

console.log ("FUNKCIJOS");
//Funkcija - kodo segmentas, kurį galima iššaukti kelis kartus vėliau kode.
//Pradedama raktažožiu 'function', po to seka 'pavadinimas', ('parametras(-ai)'), {'operacijos blokas'}.
function pridedamVieneta (k){
    return k+1
}
//Funkcijos duomenų tipo patikrinimas:
console.log(typeof(pridedamVieneta));
//'return' raktažodis grąžina funkcijos operacijos rezultatą.
console.log (pridedamVieneta (10));
//Funkcijos apraše k vadinamas parametru. Konkrečios vertės, su kuriomis iššaukiamos funkcijos (pastaruoju atveju 10), vadinamos argumentais.
//Jei funkcijos apraše parametras nenurodytas, pvz., function (), reiškia, kad funkcijos vykdymui atskirų argumentų įvedimas nereikalingas.
//Funkcija gali būti priskirta kintamajam:
let m = function atimamVieneta (k) {
    return k-1
}
console.log(m (10));
//Funkcija gali būti kitos funkcijos argumentu.
console.log (m(pridedamVieneta (5))); //prideda vienetą ir po to atima vienetą.
//Rodyklinės funkcijos daugiausiai skirtos perduoti bevardę funkciją vietoj argumento kitai funkcijai.
let l = m => m + 10;
//kintamajam l priskirta bevardė funkcija, kurios operacija yra m + 10, m yra argumentas. 
console.log(l(10));
//Funkcjos gali būti iššaukiamos vartotojo (pvz., paspaudus mygtuką WWW pslapyje), iš JS kodo arba veikti automatiškai.

console.log ("METODAI");
//Metodais vadinamos funkcijos, priskirtos duomenų tipų (objektų, skaičių ir kt.) savybėms. JS vadinama objektinio projektavimo kalba, nes funkcijos yra priskirtos jos objektams.
let masyvas = [1, 2, 3, 4, 5, 6, 7]
//Pvz., metodas 'shift' ištrins pirmąjį masyvo elementą.
masyvas.shift();
console.log (masyvas)
//Metodas 'push' pridės naujus elementus.
masyvas.push (8, 9, 10)
console.log (masyvas);
//Objektų ir masyvų prototipų metodai nėra tapatūs.
//Savo susikurtą funkciją galima įvesti tarp objekto ir masyvo metodų.
//Pavyzdžiu panaudojam objektą 'knyga4'.
let knyga4 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
};
console.log (knyga4)
//Sukuriame funkciją, kuri sujungs autoriaus ir puslapių skaičiaus savybes į vieną sakinį.
//Šiuo atveju raktažodis 'this' nurodys į paties objekto savybes.
knyga4.aprasas = function () {
    return "Rašytojas "+this.autorius+" parašė "+this.puslapiuSkaicius+" puslapių knygą."
}
console.log (knyga4.aprasas());

console.log ("MATH OBJEKTAS")
//Matematinės funkcijos yra įterpos tarp Math objekto metodų.
//Kai kurios jų:
console.log (Math.random()); //grąžina skaičių tarp 0 ir 1.
console.log (Math.abs(-10)); //grąžina absoliutinę skaičiaus vertę.
console.log (Math.round(1.32)); //suapvalina skaičių iki artimiausios sveikosios vertės.
console.log (Math.ceil(2.32)); //prideda trupmeninę dalį iki sveikojo skaičiaus.
console.log (Math.floor(2.32)); //atima trupmeninę dalį iki sveikojo skaičiaus;
console.log (Math.sqrt (16));//kvadratinė šaknis iš argumento.
console.log (Math.log (16));//natūralus logaritmasiš argumento.
console.log (Math.pow (2, 6));//pirmo argumento pakėlimas antro argumento laipsniu.
console.log (Math.pow (64, 1/6));//antro argumento trupmenos šaknis pirmam argumentui.
console.log (Math.sin (0.52359878)); // logaritminės funkcijos, taip pat asin, cos, acos, tan, atan su radianinėmis vertėmis.
console.log (Math.max (8, 10, 14)); // grąžina didžiausią argumento vertę.
console.log (Math.min (8, 10, 14)); // grąžina mažiausią argumento vertę.

//Math objekto konstantos:
console.log (Math.PI); //skaičius Pi.
console.log (Math.E); //Eulerio skaičius.
console.log (Math.LN2); //natūralus skaičiaus 2 logaritmas;
console.log (Math.LN10); //natūralus skaičiaus 10 logaritmas;
console.log (Math.SQRT2); //skaičiaus 2 kvadratinė šaknis

//Sukombinavus Math.floor ir Math.random metodus galima gauti atsitiktinio sveikojo skaičiaus intervale generatorių:
z = Math.floor(Math.random()*100 + 5);//Grąžins sveikąjį skaičių tarp 5 ir 105;
console.log(z);

console.log("SKAIČIAI")
//JS supranta tradicinius dešimtainius sveikuosius ir trupmeninius skaičius. Taip pat supranta parašytus dvejetainius (binarinius), aštuntainius, šešioliktainius skaičius ir skaičius, parašytus su eksponente. JS yra tik vienas skaičių tipas number. Jie užkoduoti naudojant 64 bitų kodą pagal IEEE 754 standartą.
//Skaitmenų ženklai string tipo duomenyse JS netraktuojami skaičiais per se, iškyrus, kai JS atpažįsta matematines operacijas su jais. Skaičių objektų tipas nenaudotinas. 
//JS sveikieji skaičiai yra tikslūs iki 15 skaitmenų ilgio, kitu atveju apvalinami, jei nėra užrašyti su eksponente.
//JS leidžia 17 skaitmenų trupmeninės dalies ilgį, tačiau aritmetiniai veiksmai su trupmeniniais skaičiais gali būti netikslūs.
console.log (10);
console.log (typeof(10));
console.log (13.15);//trupmeninei daliai atskirti naudojamas taškas;
console.log(1.03e25);//skaičius su eksponente.
console.log (0b100100);// dvejetainės (binarinės) sistemos skaičiai;
console.log (0o123);//aštuntainės sistemos skaičiai;
console.log (0xac);// šešioliktainės sistemos skaičiai;
//Aiškumo dėlei didelius skaičius galima skaidyti su _ simboliu:
console.log (100_100.234_345);
//JS trupmeniniai skaičiai iš binarinės bazės, pavyzdžiui, 1/64, 1/2, yra tikslūs, tačiau labiau įprasti dešimtainės bazės trupmeniniai skaičiai, pvz.: 0,1 ar 0,001, yra tik artimi tikrosioms vertėms, kas gali sudaryti neaiškumų ypač su Būlio vertėmis susijusiose operacijose.
//Dalijimas iš nulio grąžina 'Infinity' vertę.
console.log (10/0);
//Nulio dalijimas iš nulio grąžina NaN vertę.
console.log (0/0);

console.log("NUMBER OBJEKTAS, PARSEINT IR PARSEFLOAT METODAI")
//Number() konstrukcinis objektas keičia kintamųjų vertes į skaičius:
console.log (Number("100"));// 100
console.log (Number(true));// 1
console.log (Number(false));// 0
//Didžiausi ir mažiausi JS skaičiai yra tarp Number objekto savybių:
console.log (Number.MAX_VALUE);// 1.7976931348623157e+308, didžiausias JS skaičius.
console.log (Number.MIN_VALUE);// 5e-324, mažiausias JS skaičius.

//Objekto Number metodai taikomi skaičiaus duomenų tipui.
console.log (Number.isNaN(NaN));//patikrinimas, ar argumentas yra NaN vertė.
console.log (Number.isInteger(10));//patikrinimas, ar argumentas yra sveikasis skaičius.
console.log (Number.isInteger(10.1));
console.log (Number.isFinite(10));//patikrinimas ar argumentas yra JS skaičius.
console.log (Number.parseInt ("12.8"));//pakeičia tekstą sveikuoju skaičiu atmetant trupmenos dalį.
console.log (Number.parseFloat ("12.3"));//pakeičia tekstą skaičiumi įskaitant trupmeninę dalį.

//Globalūs metodai parseInt ir parseFloat keičia tekstų simbolius skaičiais:
console.log (parseInt ("6.87"));//parseInt grąžina skaičiaus sveikąją dalį.
console.log (parseInt ("0xFA3"));//parseInt ir parseFloat funkcijos keičia šešioliktainius skaičius į dešimtainius.
console.log (parseInt ("01001", 2));//su nurodyta baze (antruoju argumentu) parseInt kovertuoja skaičius į dešimtainius.
console.log (parseFloat ("6.87"));//parseFloat grąžina skaičius su trupmenine dalimi.
console.log (parseFloat ("3.14true"));//parseInt ir parseFloat funkcijos grąžina skaičių, jei jis yra teksto priekyje.
console.log (parseFloat ("true 3.14"));//parseInt ir parseFloat funkcijos nesupranta skaičių teksto dalyje ir grąžina NaN.

console.log ("SKAIČIŲ METODAI IR FUNKCIJOS")
//toString metodas leidžia konvertuoti skaičius į tekstą atsižvelgiant į jų bazę:
h = 100;
console.log (h.toString (10));//dešimtainis skaičius.
console.log ("0b" + h.toString (2));//dvejetainis skaičius.
console.log ("0o" + h.toString (8));//aštuntainis skaičius.
console.log ("0x" + h.toString (16));//šešioliktainis skaičius.

h = 127.34349
console.log (h.toFixed (0));//palieka trupmeninės dalies (po kablelio) argumento kiekį skaitmenų.
console.log (h.toFixed (2));//paliko 2 skaitmenis po kablelio.
console.log (h.toExponential (3));//palieka 1 sveikąjį ir argumento kiekį skaitmenų po kablelio bei pateikia eksponentinį užrašymą.
console.log (h.toPrecision (7));//užrašo tik norimą kiekį skaitmenų nuo skaičiaus pradžios, šiuo aveju septynis.
//PASTABA. Šios funkcijos suapvalina skaičius (paskutinis atvejis).
console.log((115+15).valueOf());//valueOf metodas grąžina iš skaičių skaičius.
//valueOf metodas panauojamas pakeičiant skaičiaus tipą iš object į number.
h = new Number(115);
console.log(typeof(h));
console.log(typeof(h.valueOf()));

console.log ("BITWISE OPERATORIAI");
//Bitwise operatoriai atlieka veiksmus su binariniais skaičiais pavertę juos 32 bitų sveikaisiais skaičiais. JS užkoduoja skaičius 64 bitų trupmeniniais skaičiais, tad prieš atliekant bitwise veiksmą, skaičiai pakeičiami į 32 bitų ir baigus veiksmą pakeičiami atgal.
// AND operatorius, ženklas &, grąžina 1 jei palyginamų bitų vienodose pozicijose yra 1, kitu atveju grąžina 0. Pvz.:
console.log (0b0101);//5
console.log (0b0011);//3
console.log (5&3);//grąžino 0...0001 binarinį skaičių.
// OR operatorius, ženklas |, grąžina 1 jei palyginamų bitų vienodose pozicijose yra bent vienas 1, kitu atveju grąžina 0. Pvz.:
console.log (5|3);//grąžino 0...0111 binarinį skaičių.
// XOR operatorius, ženklas ^, grąžina 1 jei palyginamų bitų vienodose pozicijose yra tik vienas 1, kitu atveju grąžina 0. Pvz.:
console.log (5^3);//grąžino 0...0110 binarinį skaičių.
// NOT operatorius, ženklas ~, invertuoja visus skaičiaus 32 bitus. Pvz.:
console.log (~3);//grąžino 1...1100
// Nulio perstūmimo kairėn operatorius, ženklas <<, prideda 0 bitą dešinėje nurodytą kartą skaičių ir numeta bitus kairėje. Pvz.:
console.log (3<<3)//pridėjo tris nulius iš dešinės 0...11000
// Perstūmimo dešinėn operatorius, ženklas >>, prideda kairėje esamą bitą (0 arba 1) iš kairės nurodytą kartą skaičių ir numeta tiek pat bitų iš dešinės. Pvz.:
console.log (24>>3)//pridėjo tris bitus, tokius pačius kaip pirmasis kairėje, iš kairės ir numetė tris bitus dešinėje.
// Nulio perstūmimo dešinėn operatorius, ženklas >>>, prideda 0 bitus kairėje nurodytą kartą skaičių ir numeta tiek pat bitų dešinėje. Pvz.:
console.log (-5>>>28);

console.log("DATOS")
//Einamojo momento laiką JS galima išsišaukti naudojant Date funkciją.
console.log(typeof(Date));
let dabar = Date.now ();//grąžina laiką milisekundėmis nuo 1970 m. kažkada.
console.log(dabar);
dabar = new Date (); // grąžiną dabartinį komp. laiką anglišku formatu.
console.log(dabar);
let iso = dabar.toISOString(); //laiko formato perrašymas.
console.log (iso);

console.log("TEKSTAS (string)")
//Tekstiniai duomenys (taip pat vadinami eilutėmis) rašomi apskliausti viengubomis arba dvigubomis kabutėmis (pagal EN klaviatūrą):
console.log("tekstas");
console.log('tekstas');
console.log(typeof("tekstas"));//duomens tipas.
console.log(typeof('tekstas'));//duomens tipas.
//Vienos eilutės tekstas perkeliamas į kitą eilutę per \n kombinaciją:
console.log('tekstas\nkita eilutė');
//kelių eilučių tekstas sukeliamas į vieną eilutę per \ simbolį:
console.log('tekstas\
 kita eilutė');
// Simbolis \ išveda ", ', \ kaip tekstą:
console.log ('tekstas\'tekstas\"tekstas\\')
// Simbolio \ kombinacijos:
console.log ("tekstas \xA9"); //Unicode simboliai.
console.log ("tekstas \u{1f600}"); //Unicode simboliai.
console.log ("tekstas \u1d60"); //Unicode simboliai.
//Simbolis \ turi kitų reikšmių, pvz., \b, \t ir kt., bet šios vertės buvo reikalingo spausdinimo įrenginiams, faksams ir šiuo metu nebeaktualios.
//Pastaba. \ simboliu negalima perkelti į kitą eilutę JS kodo.

console.log("VEIKSMAI SU TEKSTAIS")
// Su + ir += galima sujungti tekstus į vieną:
console.log ("vienas"+"du"+"trys"+"keturi");
// Su === ir !== galima palyginti tekstus;
console.log ("vienas"==="du");
console.log ("vienas"!=="du");
//Kaip masyvo atveju, su .length pamatuojamas teksto ilgis, pozicijos pradedamos skaičiuoti nuo 0 (nulinės) pozicijos:
console.log ("vienas".length);
//Palyginami tekstų 16 bit kodai:
console.log ("vienas">"du");
//Tekstą galima vertinti kaip masyvą:
console.log ("vienas"[1]);//tas pats traktuojant tekstą kaip masyvą.
console.log ("vienas"["vienas".length-1]);
//Tačiau tai nerekomenduotina. Jei visgi norima tai daryti reikėtų teksto tipą pakeisti į masyvą su split metodu:
h = "vienas";
console.log(h.split());
console.log(h.split(""));//išves visus teksto simbolius į atskirus masyvo elementus.
console.log(typeof(h.split()));
console.log(typeof(h.split("")));

console.log ("TEKSTŲ METODAI");
// Panaudoti tekstų metodai grąžina naują tekstą.
//Teksto fragmentų paieška:
console.log ("vienas kiemas".indexOf ("e"));//parodo pirmą argumento simbolio pozicija.
console.log ("vienas kiemas".indexOf ("e", 3));//pirma argumento simbolio pozicija po antros pozicijos.
console.log ("vienas kiemas".indexOf ("u", 3));//jei simbolių nėra, grąžinamas -1. 
console.log ("vienas kiemas".indexOf ("kie", 3));//galioja ir simbolių kombinacijom (teksto ištraukom).
console.log ("vienas kiemas".search ("e"));//parodo pirmą argumento simbolio pozicija.
//indexOf ir search metoai yra tapatū, tačiau search metodas leižia naudoti RegExp argumentus.
//Teksto fragmentų atskyrimas:
console.log ("vienas".substring (4));//teksto fragmentas nuo 4 pozicijos (įskaitant) pabaigos.
console.log ("vienas".substring (1, 4));//teksto fragmentas nuo 1 pozicijos (įskaitant) iki 4 (neįskaitant).
console.log ("vienas".substr (1, 3));//teksto fragmentas nuo 1 pozicijos (įskaitant) 3 pozicijų ilgio;
console.log ("vienas".slice (4));//teksto fragmentas nuo 4 pozicijos (įskaitant) pabaigos;
console.log ("vienas".slice (0, 2));//simboliai nuo 0 (įskaitant) iki 2 pozicijos (neįskaitant);
console.log ("vienas".slice (-2));//palieka paskutinius 2 simbolius.
console.log ("vienas".slice (-3, -1));//paskutiniai du simboliai.
//slice ir substring metodai yra panašūs, tik substring nepriima nigiamų argumentų. Substr metode nurodomas simbolių ilgi, o ne pozicija.

console.log ("vienas du".split (" "));//perkerta į du tekstus panaikinant nurodytą simbolį ar simbolių fragmentą (šiuo atveju tuščią tarpelį) ir įkelia naujus tekstus į masyvą.
console.log ("vienas".startsWith ("k"));//patikrina, ar argumetu prasideda.
console.log ("vienas".endsWith ("k"));//patikrina, ar argumetu užsibaigia.
console.log ("vienas".includes ("ena"));//patikrina, ar yra argumentas.
console.log ("vienas".replace ("vien", "kiem"));//pakeičia pirmą argumentą antru, bet veikia tik pirmo rasto fragmnto atveju. Norint pakeisti daugelį fragmentų viename tekste reikia panaudoti RegExp tipo argumentą.
console.log ("VieNas".toLowerCase ());//pakeičia tik į mažąsias raides.
console.log ("VieNas".toUpperCase ());//pakeičia tik į didžiąsias raides. 
console.log ("vienas".charAt (1));//grąžina simbolį argumento eilės pozicijoje.
console.log ("vienas".charAt ("vienas".length-1));//grąžina paskutinį simbolį.
console.log ("vienas".charCodeAt (0));//grąžina simbolio unicode kodą.
console.log ("vienas ".trim ());//ištrina tuščius tarpus teksto pradžioje ir pabaigoje.
console.log ("vienas ".repeat (3));//pakartoja tekstą nurodytą argumentu kartų.
h = "vienas";
console.log (h.concat(" ", "didelis", " ", "kiemas"));//sujungia keletą tekstų į vieną, nors tokiu atveju paprasčiau naudoti + operatorių.

console.log ("TEKSTO IR KINTAMŲJŲ UŽRAŠYMAS KARTU");
//Tekstas ir kintamieji užrašomi kartu naudojant + operatorių:
let penki = 5;
let padaugintaIsPenkiu = function (data) {
return data*penki
}
console.log ("Skaičių 8 padauginsiu iš "+penki+" ir gausiu "+padaugintaIsPenkiu (8)+".")
//Kitaip tą patį galima užrašyti per ` ženklą ir naudojant ${} kintamųjų vietos pažymėjimui ${}. Šiuo metodu galima užrašyti daugelio eilučių tekstą be \n kombinacijos:
console.log (`Skaičių 8 
padauginsiu iš ${penki}
ir gausiu ${padaugintaIsPenkiu (8)}.`)
//String.raw () funkcija grąžina `` ženklais parašytą tekstą kartu su \ ženklo kombinacijomis.
console.log (String.raw`Skaičių 8 
\tpadauginsiu iš ${penki} 
ir gausiu ${padaugintaIsPenkiu (8)}.`)

console.log ("SPECIALIOSIOS VERTĖS");
//NaN - nurodo, kad vertė nėra skaičius:
h = 4 * "a";
console.log (h);
//undefined - nurodo vertės nebuvimą masyvuose, objektuose, kintamuosiuose ir tuo atveju, kai funkcija negrąžina vertės:
h = [];
console.log (h[5]);
//Infinity - nurodo JS nesuprantamą ypač didelį ar mažą (neigiamas Infinity) skaičių. Operacijos su Infinity grąžina Infinity.
h = 8/0 + 15;
console.log (h);
//null - nurodo objekto, skaičiaus, teksto nebuvimą, kur tikimąsi jį esant. Tapatus verte 'undefined', bet skiriasi tipu - yra objektas, kai 'undefined' neturi tipo (tipas 'undefined').
console.log(undefined==null);//true
console.log(undefined===null);//false
//0 ir -0 yra vertės, kai JS negali suprasti skaičiaus, esančio per arti nulio iš teigiamos ir neigiamos pusių.
h = -1e-100000;
console.log (h);
//Būlio operacijose undefined, -0, 0, null, NaN ir "" (teksto nebūvimas) patys savaime grąžina 'false' vertes, kai kiti operandai grąžina 'true' vertes.
h = function (data) {
    if (null && 5===5){ //operandas null grąžino 'false'
        return data
    }
    else {
        return 10
    }
}
console.log (h (5));
h = function (data) {
    if (Infinity && 5===5){ //operandas Infinity grąžino 'true'
        return data
    }
    else {
        return 10
    }
}
console.log (h (5));

console.log ("PAPRASTIEJI IR OBJEKTINIAI TIPAI")
//Paprastaisiais duomenų tipais vadinami tipai su nekeičiamomis vertėmis: skaičiai, tekstai, Būlio, null ir undefined.
// Objektiniai tipai: objektai, masyvai, funkcijos, RegExp, Math, datos - kurių duomenys gali būti keičiami.
// Null tipo duomenų yra tik vienas 'null', undefined tipo duomenų yra tik vienas 'undefined', Būlio tipo duomenų yra tik du: 'true' ir 'false'.
//Tekstų, skaičių ir Būlio duomenis galima deklaruoti esant objektais su raktažodžiu 'new'. Verčių 'null' ir 'undefined' tipų pakeisti negalima.
// Duomenų tipą galima pasitikrinti operatoriumi typeof:
console.log(typeof "12");
console.log(typeof ["12", 15]);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
//Operacijų metu naudojamos paprastosios vertės, kai objektų verčių aveju - nuorodos į tas vertes.
//Pavyzdys 1:
let tekstas1 = "vienas";
let tekstas2 = "vienas";
console.log (tekstas1===tekstas2);//true, nes lyginamos vertės, kurios yra vienodos.
let masyvas1 = [1, 2, 3, 4];
let masyvas2 = [1, 2, 3, 4];
console.log (masyvas1===masyvas2);//false, nes lyginamos nuorodos, kurios skirtingos (veda į skirtingus objektus).
//Pavyzdys 2 su tekstu:
console.log (tekstas1);
tekstas1.replace ("vien", "kiem");
console.log (tekstas1);//tekstas1 nepasikeitė.
let tekstas3 = tekstas1.replace ("vien", "kiem");
console.log (tekstas3);//sukurtas naujas tekstas3.
console.log (tekstas1);//tekstas1 tuo metu nepasikeitė;
//Pavyzdys 3 su masyvu:
console.log (masyvas1);
masyvas1[0]=10;
console.log (masyvas1);//masyvo savybė [0] pasikeitė.
let masyvas3 = masyvas1;
console.log (masyvas3);//masyvas3 yra nuoroda į tą patį objektą kaip masyvas1 atveju.
masyvas2[0]=15;
console.log (masyvas1);
console.log (masyvas3);//savybės 0 pasikeitė objekte, į kurį nurodo masyvas1 ir masyvas3.
//Objektų tipo duomenų savybes ir metodus galima peržiūrėti naršyklės konsolės lange išskleidus rodyklėlę ties pavadinimu.

console.log ("PAPRASTŲJŲ VERČIŲ AUTOMATINIS TIPŲ KEITIMAS")
//Vykdant veiksmus JS automatiškai keičia operandų tipus priklausomai nuo konteksto:
h = 2 * "3";
console.log (h);//atpažinęs matematinį operatorių, išskyrus +, JS stengsis pakeisti tekstą į skaičių. 
h = "12"/"3";
console.log (h);
h = "3" + 2;
console.log (h);//+ atveju skaičių keis į tekstą.
h = 2 + true;
console.log (h);// boolean true keis į skaičių 1. 
h = 2 + false;
console.log (h);// boolean false keis į skaičių 0.
h = "3" + false;
console.log (h);//teksto su boolean aveju, boolean keičiamas į tekstą.
h = 2 / "dem";
console.log (h);//nesant galimybės tekstą suprasti kaip skaičių, grąžinamas NaN rezultatas.

//Galima keisti tipus funkcijų Number (į skaičių), String (į tekstą), Boolean (į boolean) pagalba:
console.log(Number("3"));
console.log(Number(false));
console.log(String(4));
console.log(String(true));
console.log(Boolean(0));
console.log(Boolean(Infinity));

console.log ("KINTAMIEJI ('variables')");
//JS kode operandai paprastai yra ne konkrečios vertės, o kintamieji su priskirtomis vertėmis.
//Prieš pradedant naudoti kintamasis yra deklaruojamas raktažodžiais let, const, var ir jam suteikiamas pavadinimas. let ir var nurodo galimus kisti savo vertėmis kintamuosius, const vertė išlieka pastovi kodo eigoje arba kodo bloke. Kintamieji gali turėti bet kokią priskirtą vertę.

const PI = Math.PI.toFixed(4);//lygybės ženklas yra vertės priskyrimo simbolis.
console.log (PI);
//Pabandžius keisti const reikšmę, JS fiksuos klaidą.
//PI=5; -- Error
//Kintamųjų pavadinimai parenkami reikšminiais; let ir var kintamieji gali būti deklaruoti be verčių:
let kvadratoKraštinė = 4;
let kvadratoIstrizaine;
console.log (kvadratoKraštinė);
console.log (kvadratoIstrizaine);
kvadratoIstrizaine = kvadratoKraštinė*Math.sqrt(2);
console.log (kvadratoIstrizaine.toFixed (4));
//vienu metu galima deklaruoti keletą kintamųjų:
let kuboAukstis = 15, kuboPlotis = 6, kuboIlgis = 8;
console.log(kuboIlgis);
//Sukurkime kintamąjį, kuris apskaičiuotų kūbo tūrį:
let kuboTuris = kuboAukstis*kuboPlotis*kuboIlgis;
console.log (kuboTuris.toFixed (2));
//let kintamasis tame pačiame bloke po to gali būti keičiamas be atskiros deklaracijos:
kuboAukstis = 12, kuboPlotis = 5, kuboIlgis = 6;
console.log(kuboAukstis);
kuboTuris = kuboAukstis*kuboPlotis*kuboIlgis;
console.log (kuboTuris.toFixed (2));

//JS draudžia paskelbti tokio pat pavadinimo kintamuosius let ir const, išskyrus naudojimą vaikiniuose blokuose.
//Kintamasis var yra iš senesnės nei ES6 JS versijos. Jo vertė persiduoda iš bloko ribų, o paskelbus bendrame bloke įgyja globalią vertę. Jį taip pat galima deklaruoti kelis kartus. Tame pačiame bloke galima naudoti var kintamąjį prieš jį deklaruojant. Šiuo metu JS var kintamieji nebenaudotini.
//Paskelbus kintamąjį be deklaracijos jis tampa globaliu kintamuoju ir yra vengtinas:
u = 3;
//Naudojant "use strict" JS neleis įvesti kintamojo be deklaracijos.
kuboTurisBlogas = kuboAukstis*kuboPlotis*kuboIlgis*u;
console.log (kuboTurisBlogas.toFixed (2));
//tokius kintamuosius galima ištrinti:
delete (u);
//kuboTurisBlogas = kuboAukstis*kuboPlotis*kuboIlgis*u; - klaida, u ištrintas.
delete (kuboTurisBlogas);
//console.log (kuboTurisBlogas); - klaida, kuboTurisBlogas ištrintas
//Tuo metu let ir const kintamųjų ištrinti JS neleidžia:
delete (PI);
console.log (PI);//ignoruotas delete (PI).
delete (kuboTuris);
console.log (kuboTuris);//ignoruotas delete (kuboTuris).

console.log ("SIMBOLIAI IR RegExp")
//Simboliai yra tekstinės vertės paprastasis duomenų tipas, naudojamas unikalių objekto savybių nustatymui.
//Simboliai sukuriami su 'Symbol'funkcija:
let autoriausSavybe = Symbol ("autorius")
//Įterpiame simpolio pavadinimą į objektą knyga5.
let knyga5 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
}
knyga5[autoriausSavybe] = "V. M. Tekerėjus"
console.log (knyga5)
//Simbolių vatojimas užtikrina, kad objekto savybė nebus netyčiomis pakeista.
//Pavyzdžiui, galima sukurti lygia atrodančia savybę:
let autoriausSavybe2 = Symbol ("autorius")
knyga5[autoriausSavybe2] = "V. M. Tekerėjus"
//Tačiau šios savybės nebus tapačios:
console.log(autoriausSavybe===autoriausSavybe2) //grąžina false.
console.log(typeof autoriausSavybe);
//Reguliariosios ekspresijos, trumpiau - RegExp, yra objektinis tekstinių duomenų tipas, skirtas ieškoti ir keisti pasikartojančias tekstines struktūras (angl. pattern).
//RegExp duomuo užrašomas tarp dviejų // ženklų. Po to gali sekti papildomas ženklas ar ženklai, patikslinantys teksto panaudojimą.
console.log(typeof /gpb/);

console.log ("DESTRUKTŪRIZACIJA")
//Destruktūrizacija yra tam tikra kintamojo arba funkcijos parametro deklaracija, paimant jo vertę iš objektinių duomenų.
//Destruktūrizacijos deklaracija sudaryta iš dviejų dalių, atskirtų = priskyrimo ženklo.
//Kairiojoje dalyje yra vienas ar keletas kintamųjų, dešiniojoje - objektas arba masyvas, iš kurio paimamos kintamojo vertės.
//Pvz.:
let [w, e, r] = [3, 4, 5];
console.log (w);
console.log (e);
console.log (r);
//Galima priskirti kintamajam tam tikros masyvo pozicijos vertę:
[,h, ] = [8, 9, 10];
console.log (h);
//Jei bus bandoma priskirti neegzistuojančią vertę, kintamasis grįš su undefined verte:
[,h,,e ] = [8, 9, 10];
console.log (e);
//Destruktūrizuojant likusius duomenis galima palikti atskirame masyve su trijų taškų priskyrimu:
[,h,,...e ] = [8, 9, 10, 11, 12, 13];
console.log (e);
//Destruktūrizuojant pasiekiami vidiniai masyvai:
[,,,[,h,]] = [8, 9, 10, e];
console.log (h);
//Objekto destruktūrizacija:
let knyga6 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
    pavadinimas: "Tuštybės mugė"
}
console.log(knyga6);
let {autorius, pavadinimas, puslapiuSkaicius} = knyga6;
console.log(autorius);
console.log(pavadinimas);
console.log(puslapiuSkaicius);
//Destruktūrizuojant objektus galima priskirti skirtingus savybių pavadinimus per : ženklą:
let {autorius: aut1, pavadinimas: pav1} = knyga6;
console.log(aut1);
console.log(pav1);
//Tai gali būti naudinga, kai destruktūrizuojami sudėtiniai objektai su tais pačiais savybių pavadinimais.

console.log ("VEIKSMŲ EILIŠKUMAS")
//JS operacijose veiksmai atliekami sekant užrašymo eiliškumą, iš viršaus į apačią. 
//Daugybiniuose veiksmuose su operatoriais teikiama loginė pirmenybė, panaši į matematinę.
//Pirmiausia atliekami veiksmai () skliaustuose, ++ ir -- vėliau, po to daugybos ir dalybos veiksmai atliekami prieš sudėties ir atimties.

console.log ("GLOBALUS OBJEKTAS")
//Globalus objektas yra objektas, kuris sukuriamas pradėjus veikti interneto naršyklei arba Node serverių programai ir jo savybės yra pasiekiamos JS. Šiose savybėse yra užfiksuotos globalios konstantos (pvz., undefined, infinity), objektai (pvz., Math, JSON), funkcijos ir konstruktorių funkcijos (pvz., parseInt (), Object ()).
//Node programoje globalus objektas turi pavadinimą "global", kai naršyklėse - "Window".
//Bendrai įvestas "globalThis" objektas, kuris nurodo ir naršyklių, ir Node globalius objektus (kurie skiriasi tarpusavyje).
console.log(typeof(globalThis));
console.log(globalThis);

console.log ("BLOKAS")
//Blokas (angl. scope) yra kodo segmentas kuriame galima naudoti tam tikrą kintamųjų rinkinį.
//Šiuo atveju kintamieji yra deklaruoti kintamieji, objektai ir funkcijos bei funkcijų argumentai.
//Globaliame bloke įvesti kintamieji yra pasiekiami iš bet kurios kodo vietos.
//Atskirame bloke įvesti kintamieji yra pasiekiami tik šio bloko ribose.
//Blokai yra funkcijų ir steitmentų turinys.
//Sukuriame kintamuosius funkcijos bloke:
function blokoNaudojimoPavyzdys1 (x, y) {
    let a = (x+y)**y+x|y++;
    let b = h*a;
    return b
}
console.log (blokoNaudojimoPavyzdys1 (40, 4));
//Kintamieji x, y, a, b egzistuoja tik funkcijos bloke.
//console.log(b); globaliame bloke išmes klaidą 'b is not defined'.
//Tai leidžia naudoti vienodų pavadinimų kintamuosius neprikausomuose blokuose daug kartų.
//Tačiau kintamasis h buvo deklaruotas globaliame bloke:
console.log(h);
//Globalų kintamąjį galima pakeisti lokaliame bloke:
function blokoNaudojimoPavyzdys2 (x, y) {
    let a = (x+y)**y+x|y++;
    h = 120;
    let b = h*a;
    return b
}
console.log (blokoNaudojimoPavyzdys2 (40, 4));
console.log(h);//globalaus kintamojo vertės pakeitimas persiduos už bloko ribų.
function blokoNaudojimoPavyzdys2 (x, y) {
    let a = (x+y)**y+x|y++;
    let h = 60;
    let b = h*a;
    console.log(h)
    return b
}
console.log (blokoNaudojimoPavyzdys2 (40, 4));
console.log(h);//Įvedus to paties pavadinimo kintamąjį kaip globaliame bloke, jo vertė bus perrašoma bloko viduje, bet nepersiduos už bloko ribų.
//Verčių keitimas bloke vyksta eiliškumo pincipu.
//Tad priskyrus kintamajam vieną iš šių verčių ji galios nuo priskyrimo eilutės ir žemiau iki kito pakeitimo.
h = 10;
h++;// dabar h = 11;
h = h%3;//dabar h = 2;
h *=10// dabar h = 20;
console.log(h);

//Be deklaracijos paskelbtas kintamasis nepriklausomai nuo jo pozicijos blokuose tampa globaliu kintamuoju ir vengtina kurti tokius kintamuosius.

//Įvestą funkciją galima iššaukti bet kurioje bloko vietoje. Įveskite 1-oje kodo eilutėje console.log (blokoNaudojimoPavyzdys2 (40, 4)); ir rezultatas bus pavaizduotas konsolėje nepaisant to, kad pati funkcija aprašyta vėlesnėse eilutėse.
//Vengtina kurti to paties pavadinimo ar globalaus objekto pavadinimo funkcijas, metodus. 

// Setup
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    for (let i = 0; i<contacts.length; i++) {
        if (contacts[i]["firstName"]==name) {
            if (contacts[i][prop]) {return contacts[i][prop]}
            else {return "No such property"} 
        }               
    }
    return "No such contact"
  // Only change code above this line
}

console.log (lookUpProfile("Akira", "likes"));
console.log (lookUpProfile("Sherlock", "likes"));
console.log (lookUpProfile("Bob", "number"));
console.log (lookUpProfile("Bob", "potato"));
console.log (lookUpProfile("Akira", "address"));
console.log (lookUpProfile("Kristian", "lastName"));

//ex. 98 rekursijos funkcija:
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));
  console.log (typeof(autoriausSavybe));

  for (i in stelmuzesAzuolas) {
      console.log(stelmuzesAzuolas[i])
  }
  for (i in stelmuzesAzuolas) {
    if (stelmuzesAzuolas[i]!=="Stelmužės ąžuolas"){
    } else{ h = "Stelmužės ąžuolas"  }
}
console.log(h);
  
  h = [];
  for (i in stelmuzesAzuolas) {
    h.push(stelmuzesAzuolas[i])
}
console.log(h);



function countup(n) {
    if (n < 1) {
      return [];
    } else {
      let countArray = countup(n - 1);
      console.log(countArray);
      countArray.push(n);
      console.log(countArray);
      return countArray;
    }
  }
  console.log(countup(1));

  function countdown(n){
    if (n<1) {
      return [];
    }
    let myArray = [];
    myArray.push(n);
    myArray = countdown (n-1);
    return myArray;
  }
  console.log(countdown(10));


  function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("right", 2));

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("right", 3));

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the division operator (/)
console.log(echo("left", 6) / echo("middle", 2) / echo("right", 3));

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo("left", 2) ** echo("middle", 3) ** echo("right", 2));

function echo(name, num) {
    console.log("Evaluating the " + name + " side");
    return num;
}
// Notice the parentheses around the left and middle exponentiation
console.log((echo("left", 2) ** echo("middle", 3)) ** echo("right", 2));

function recurseForever(a) {
    if (a>=10) {
        return a;
    }
    console.log (a);
    return recurseForever(a + 1);
  }
  const result = recurseForever(5);
  console.log(result);

  function countdown(n){
    if (n<1) {
      return [];
    }
    const myArray = countdown(n-1);
    myArray.unshift(n);
    return myArray;
  }
  console.log(countdown (5));

  function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum)
    {return [];}
    else {
      let myArray = rangeOfNumbers(startNum+1, endNum);
      myArray.unshift (startNum);
      return myArray
    }
  };
  console.log(rangeOfNumbers (5, 9));

  const myConcat = (arr1, arr2) => arr1.concat(arr2);

  console.log(myConcat ([5, 6, 7], {"lia-lia":"BOOM"}));