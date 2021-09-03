console.log ("ĮŽANGA");
//Javascript - objektinio programavimo kalba, dažniausiai naudojama vartotojo interaktyvioje sąsajoje WWW puslapiuose. Ją 1995 m. sudarė Brendan Eich. Pirmą kartą standartizuota 1997 m. Oficialiau žinoma ECMAscript pavadinimu pagal ECMA - Europos kompiuterinės įrangos gamintojų asociacijos, kuri įvedė JS standartą, pavadinimą.
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
//JS kodas, galintis grąžinti rezultatą, vadinamas ekspresija, tad '2+3' ir '5<2' yra ekspresijos. Duomenys, kuriuos naudoja JS, suskirstyti į tipus. Tai skaičiai (Number), tekstai (String), objektai, masyvai (Array), patvirtinimo/paneigimo (Boolean) ir kt. 
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
//Objekto savybė ištrinama naudojant delete raktažodį:
let knyga2 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
}
delete knyga2["autorius"];
console.log(knyga2);

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
//Masyvo elementų įvedimas arba keitimas:
gatvesNamuNumeriai[0]=23;
console.log (gatvesNamuNumeriai[0]);
//Galima įvesti į masyvą aukštesnio eilės skaičiaus elementus:
gatvesNamuNumeriai[0]=25;
console.log (gatvesNamuNumeriai[10]);
console.log (gatvesNamuNumeriai[9]);
console.log (gatvesNamuNumeriai.length);

// Tekstas turi masyvo savybių: - ilgį, simbolio numerį:
let z = "visada";
console.log (z.length); //teksto ilgis.
console.log (z[3]); //ketvirta raidė tekste.

//Tiek objektai, tiek masyvai gali būti tušti:
const tusciasObjektas = {};
const tusciasMasyvas = [];
console.log (tusciasObjektas);
console.log (tusciasMasyvas);
//Tiek objektai, tiek masyvai savo sudėtyje gali turėti kitus objektus ir masyvus.
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
//Palyginimo operatorių veiksmai gražina boolean vertes 'true'(teisinga) ir 'false' (neteisinga).
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
//naudojami su boolean vertėmis.
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
//Pvz., metodas 'reverse' perkeis masyvo elementų išdėstymą atbuline tvarka.
//Metodo duomenų tipo patikrinimas:
console.log(typeof(masyvas.reverse));
//Reverse metodo vykdymas:
masyvas.reverse()
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

console.log ("MATEMATINĖS FUNKCIJOS")
//Matematinės funkcijos yra įterpos tarp Math objekto metodų.
//Kai kurios jų:
console.log (Math.random()); //grąžina skaičių tarp 0 ir 1.
console.log (Math.abs(-10)); //grąžina absoliutinę skaičiaus vertę.
console.log (Math.round(1.32)); //suapvalina skaičių iki artimiausios sveikosios vertės.
console.log (Math.ceil(2.32)); //prideda trupmeninę dalį iki sveikojo skaičiaus.
console.log (Math.floor(2.32)); //atima trupmeninę dalį iki sveikojo skaičiaus;
console.log (Math.PI); //skaičius Pi.
console.log (Math.E); //skaičius E.
console.log (Math.log (10)); //skaičiaus 10 natūralus logaritmas.
console.log (Math.sqrt (16));//kvadratinė šaknis.
console.log (Math.pow (2, 6));//pirmo argumento pakėlimas antro argumento laipsniu.
console.log (Math.pow (64, 1/6));//antro argumento šaknis pirmam argumentui.
console.log (Math.sin (0.52359878)); // logaritminės funkcijos, taip pat cos, tan, atan su radianinėmis vertėmis.
console.log (Math.max ("a", "b", "c")); // grąžina didžiausią argumento vertę.
console.log (Math.min ("a", "b", "c")); // grąžina mažiausią argumento vertę.

console.log("SKAIČIAI")
//JS supranta tradicinius dešimtainius sveikuosius ir trupmeninius skaičius. Taip pat supranta parašytus binarinius, okta, heksa skaičius ir skaičius, parašytus su eksponente.
console.log(typeof(1.03e25));
console.log (10);
console.log (13.15);
console.log (0xac);
console.log (0b100100);
console.log (0o123);
//Aiškumo dėlei didelius skaičius galima skaidyti su _ simboliu:
console.log (100_100.234_345);
//JS trupmeniniai skaičiai iš binarinės bazės, pavyzdžiui, 1/64, 1/2, yra tikslūs, tačiau labiau įprasti dešimtainės bazės trupmeniniai skaičiai, pvz.: 0,1 ar 0,001, yra tik artimi tikrosioms vertėms, kas gali sudaryti neaiškumų ypač su boolean vertėmis susijusiose operacijose.
//dalijimas iš nulio grąžina 'Infinity' vertę.
console.log (10/0);
//nulio dalijimas iš nulio grąžina NaN vertę.
console.log (0/0);
//Objekto Number metodai taikomi skaičiaus duomenų tipui.
console.log (Number.isNaN(NaN));//patikrinimas ar argumentas yra NaN vertė.
console.log (Number.isInteger(10));//patikrinimas ar argumentas yra sveikasis skaičius.
console.log (Number.isInteger(10.1));
console.log (Number.isFinite(10));//patikrinimas ar argumentas yra JS skaičius.
console.log (Number.parseInt ("12.8"));//pakeičia tekstą sveikuoju skaičiu atmetant trupmenos dalį.
console.log (Number.parseFloat ("12.3"));//pakeičia tekstą skaičiumi įskaitant trupmeninę dalį.

console.log ("SKAIČIŲ METODAI IR FUNKCIJOS")
//toString metodas leidžia konvertuoti skaičius į tekstą atsižvelgiant į jų bazę:
let h = 100;
console.log (h.toString (10));//dešimtainis kodas.
console.log ("0b" + h.toString (2));//binarinis kodas.
console.log ("0o" + h.toString (8));//okta kodas.
console.log ("0x" + h.toString (16));//heksa kodas.

//Skaičių metodai:
h = 127.34349
console.log (h.toFixed (0));//palieka 0 skaičių po kablelio.
console.log (h.toFixed (2));//palieka 2 skaičius po kablelio.
console.log (h.toExponential (3));//palieka 1 sveikąjį ir 3 skaičius po kablelio ir pateikia su "e" užrašymu.
console.log (h.toPrecision (7));//užrašo tik norimą kiekį skaičiaus ženklų, šiuo aveju septynis.
//PASTABA. Šios funkcijos suapvalina skaičius (paskutinis atvejis).

//Funkcijos parseInt ir parseFloat stengsis pakeisti tekstų simbolius skaičiais:
console.log (parseInt ("6.87"));//parseInt grąžina sveikuosius skaičius.
console.log (parseInt ("0xFA3"));//funkcijos keičia heksa skaičius į dešimtainius.
console.log (parseInt ("01001", 2));//su nurodyta baze (antruoju argumentu) parseInt kovertuoja skaičius į dešimtainius.
console.log (parseFloat ("6.87"));//parseFloat grąžina skaičius su trupmenine dalimi.
console.log (parseFloat ("3.14true"));//funkcijos grąžina skaičių, jei jis yra teksto priekyje.
console.log (parseFloat ("true 3.14"));//funkcijos nesupranta skaičių teksto dalyje ir grąžina NaN.

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
//Tekstiniai duomenys rašomi apskliausti viengubomis arba dvigubomis kabutėmis (pagal EN klaviatūrą):
console.log("tekstas");
console.log('tekstas');
console.log(typeof("tekstas"));//duomens tipas.
console.log(typeof('tekstas'));//duomens tipas.
//vienos eilutės tekstas perkeliamas į kitą eilutę per \n kombinaciją:
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

console.log("VEIKSMAI SU TEKSTAIS")
// Su + ir += galima sujungti tekstus į vieną:
console.log ("vienas"+"du"+"trys"+"keturi");
// Su === ir !== galima palyginti tekstus;
console.log ("vienas"==="du");
console.log ("vienas"!=="du");
//Kaip masyvo atveju, su .length pamatuojamas teksto ilgis, pozicijos pradedamos skaičiuot nuo 0 (nulinės) pozicijos:
console.log ("vienas".length);
//Palyginami tekstų 16 bit kodai:
console.log ("vienas">"du");

console.log ("TEKSTŲ METODAI");
// Metodai (grąžina naują tekstą):
console.log ("vienas".substring (1, 4));//teksto fragmentas.
console.log ("vienas".slice (-2));//paskutiniai du simboliai.
console.log ("vienas du".split (" "));//perkerta į du tekstus panaikinant nurodytą ženklą (šiuo atveju tuščią tarpelį).
console.log ("vienas kiemas".indexOf ("e"));//parodo pirmą argumento simbolio pozicija.
console.log ("vienas kiemas".indexOf ("e", 3));//pirma argumento simbolio pozicija po antros pozicijos.
console.log ("vienas kiemas".indexOf ("u", 3));//jei simbolių nėra, grąžinamas -1. 
console.log ("vienas kiemas".indexOf ("kie", 3));//galioja ir simbolių kombinacijom.
console.log ("vienas".startsWith ("k"));//patikrina, ar argumetu prasideda.
console.log ("vienas".endsWith ("k"));//patikrina, ar argumetu užsibaigia.
console.log ("vienas".includes ("ena"));//patikrina, ar yra argumentas.
console.log ("vienas".replace ("vien", "kiem"));//pakeičia pirmą argumentą antru.
console.log ("VieNas".toLowerCase ());//tik mažosios raidės.
console.log ("VieNas".toUpperCase ());//tik didžiosios raidės. 
console.log ("vienas".charAt (1));//grąžina simbolį argumento eilės pozicijoje.
console.log ("vienas".charAt ("vienas".length-1));//grąžina paskutinį simbolį.
console.log ("vienas"[1]);//tas pats traktuojant tekstą kaip masyvą.
console.log ("vienas"["vienas".length-1]);
console.log ("vienas ".trim ());//ištrina tuščius tarpus teksto pradžioje ir pabaigoje.
console.log ("vienas ".repeat (3));//pakartoja tekstą nurodytą argumentu kartų.

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
//boolean operacijose undefined, -0, 0, null, NaN ir "" (teksto nebūvimas) patys savaime grąžina 'false' vertes, kai kiti operandai grąžina 'true' vertes.
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

console.log ("PAPRASTIEJI IR OBJEKTŲ TIPAI")
//Paprastaisiais duomenų tipais vadinami tipai su nekeičiamomis vertėmis: skaičiai, tekstai, boolean ir spec. vertės.
// Objektų tipai: objektai, masyvai, funkcijos, kurių duomenys gali būti keičiami.
// Išimtys: null, kuris yra objektas, ir undefined, kurio tipas yra undefined (nežinomas).
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

console.log ("Blokas")
//Blokas (angl. scope) yra kodo segmentas kuriame galima naudoti tam tikrą kintamųjų rinkinį.
//Šiuo atveju kintamieji yra deklaruoti kintamieji, objektai ir funkcijos bei funkcijų argumentai.
//Globaliame bloke įvesti kintamieji yra pasiekiami iš bet kurios kodo vietos.
//Atskirame bloke įvesti kintamieji yra pasiekiami tik šio bloko ribose.
//Blokas įrėminamas {} skliaustais ir yra funkcijų ir steitmentų dalis.
//Iki šiol visi obejektai, kintamieji ir funkcijos priklausė globaliam blokui.
//Sukuriame kintamuosius funkcijos bloke:
function blokoNaudojimoPavyzdys1 (x, y) {
    let a = (x+y)**y+x|y++;
    let b = h*a;
    return b
}
console.log (blokoNaudojimoPavyzdys1 (40, 4));
// kintamieji x, y, a, b egzistuoja tik funkcijos bloke.
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
console.log(h);//globalaus kintamojo vertės pakeitimas persiduos iš bloko ribų.
function blokoNaudojimoPavyzdys2 (x, y) {
    let a = (x+y)**y+x|y++;
    let h = 60;
    let b = h*a;
    console.log(h)
    return b
}
console.log (blokoNaudojimoPavyzdys2 (40, 4));
console.log(h);//Įvedus to paties pavadinimo kintamąjį kaip globaliame bloke, jo vertė bus perrašoma bloko viduje, bet nepersiduos už bloko ribų.
//Paprastųjų verčių keitimas vyksta eiliškumo pincipu. Tai: string, number, boolean, null ir undefined.
//Tad priskyrus kintamajam vieną iš šių verčių ji galios nuo priskyrimo eilutės ir žemiau iki kito pakeitimo.
h = 10;
h++;// dabar h = 11;
h = h%3;//dabar h = 2;
h *=10// dabar h = 20;
console.log(h);

//Objekto savybių nustatymai persiduoda į ankstesnį bloką.
//Pabandykite 663-oje eilutėje įvesti knyga.testo_savybe = "testo_savybe" ir nauja savybė bus matoma 58-os eilutės console.log(knyga) savybėse.
//Tas pats galioja funkcijoms - vėliausias variantas persiduoda visiems tos pačios funkcijos aprašams ir panadojimams ankstesniame kode.
//Tačiau keičiamas masyvas keičiasi kodo eigoje ir pakeitimai nepersiduoda ankstesniems masyvo duomenims.
h = [1, 2, 3, 4, 5];
console.log(h);
h.unshift ("BAM");
console.log(h);
h.shift ();
console.log(h);

//Be deklaracijos paskelbtas kintamasis nepriklausomai nuo jo pozicijos blokuose tampa globaliu kintamuoju ir vengtina kurti tokius kintamuosius.


