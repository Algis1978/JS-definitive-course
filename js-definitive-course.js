console.log ("OBJEKTAI");
//Objektas - duomenų porų 'pavadinimas:vertė' rinkinys.
//Objekto sukūrimas per let, const ir var kintamuosius:
let knyga = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
};//objektas yra tarp {skliaustų}.
console.log(knyga);
//Objekto savybių pasiekimas:
knyga.autorius
console.log(knyga.autorius);
console.log(knyga["puslapiuSkaicius"]);
//Nesančių savybių iškvietimas (grąžins 'undefined'):
console.log(knyga.turinys);
//Objekto tekstinio pavadinimo savybės įvedimas:
knyga.pavadinimas = "Tuštybės mugė";
knyga.ISBN = "123-3234-345";
//Skaitinio pavadinimo savybės įvedimas:
knyga[100] = "kodas";
//Tuščios savybės įvedimas:
knyga.turinys = {};
console.log(knyga);
console.log(knyga.turinys);

console.log ("MASYVAI (arrays)");
//Masyvai - numeruotų duomenų rinkiniai.
//Masyvų sukūrimas:
let gatvesNamuNumeriai = [1, 2, 3, 4, 5, 7, 9];//masyvas yra tarp [skliaustų].
console.log (gatvesNamuNumeriai);
//Masyvų elementai sunumeruoti, pradedant 0:
console.log (gatvesNamuNumeriai[2]);
//Masyvo elementų eilutės ilgis pasiekiamas per .length raktažodį:
console.log (gatvesNamuNumeriai.length);
//Pakutinio masyvo elemento pasiekimas:
console.log (gatvesNamuNumeriai[gatvesNamuNumeriai.length-1]);
//Masyvo elementų įvedimas arba keitimas:
gatvesNamuNumeriai[0]=23;
console.log (gatvesNamuNumeriai[0]);
//Galima įvesti į masyvą aukštesnio eilės skaičiaus elementus:
gatvesNamuNumeriai[10]=25;
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

console.log ("MATEMATINIAI OPERATORIAI");
//Operatoriai - integruoti JS veiksmai su vertėmis (operandais).
//Matematiniai operatoriai +, -, /, *, ** (kėlimas laipsniu), % (grąžina dalybos liekaną);
//sutrumpinti matematiniai operatoriai:
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

console.log ("PALYGINIMO OPERATORIAI");
//Palyginimo operatorių veiksmai gražina boolean vertes 'true'(teisinga) ir 'false' (neteisinga).
let x = 10, y = 5;
console.log (x===y); //false.
console.log (x!==y); //true.
console.log (x < y); //false.
console.log (x <= y); //false.
console.log (x > y); //true.
console.log (x >= y); //true.
console.log ("taip"==="ne"); //false.
console.log ("taip"==="taip"); //true.
console.log (false === (x===y)); //true, apversta vertė.

console.log ("LOGINIAI OPERATORIAI");
// Loginiai operatoriai && - ir, || - ar, ! - priešingai,
//naudojami su boolean vertėmis.
console.log ((x!==y)&&(x > y)); //true (2 true).
console.log ((x!==y)&&(x <= y)); //false (1 true, 1 false).
console.log ((x!==y)||(x <= y)); //true (1 true, 1 false).
console.log (!(x!==y)); //false (apverstas 1 true).

console.log ("FUNKCIJOS");
//Funkcija - kodo segmentas, kurį galima iššaukti kelis kartus vėliau kode.
//Pradedama raktažožiu 'function', po to seka 'pavadinimas', ('argumentas'), {'operacija'}.
function pridedamVieneta (k){
    return k+1
}
//'return' raktažodis grąžina funkcijos operacijos rezultatą.
console.log (pridedamVieneta (10));
//Funkcija gali būti priskirta kintamajam:
let m = function atimamVieneta (k) {
    return k-1
}
console.log(m (10));
//Funkcija gali būti kitos funkcijos argumentu.
console.log (m(pridedamVieneta (5))); //prideda vienetą ir po to m atima vienetą.
//Rodyklinės funkcijos daugiausiai skirtos perduoti bevardę funkciją vietoj argumento kitai funkcijai.
let l = k => k + 1;
//kintamojo l funkcijos argumentas k perduodamas operacijai k + 1.
console.log (l(15));

console.log ("METODAI");
//Metodais vadinamos funkcijos, priskirtos objektų ir masyvų savybėms.
//Pagal nutylėjimą globalūs metodai priskirti objekto ir masyvo prototipo objektui:
let masyvas = [1, 2, 3, 4, 5, 6, 7]
//Pvz., funkcija 'reverse' perkeis elementų išdėstymą atbuline tvarka.
masyvas.reverse()
console.log (masyvas);
//Funkcija 'push' pridės naujus elementus.
masyvas.push (8, 9, 10)
console.log (masyvas);
//Objektų ir masyvų prototipų metodai nėra tapatūs.
//Savo susikurtą funkciją galima įvesti tarp objekto ir masyvo savybių.
//Pavyzdžiu panaudojam objektą 'knyga1'.
let knyga1 = {
    autorius: "V. M. Tekerėjus",
    puslapiuSkaicius: 823,
};
console.log (knyga1)
//Sukuriame funkciją, kuri sujungs autoriaus ir puslapių skaičiaus savybes į vieną sakinį.
//Šiuo atveju raktažodis 'this' nurodys į paties objekto savybes.
knyga1.aprasas = function () {
    return "Rašytojas "+this.autorius+" parašė "+this.puslapiuSkaicius+" puslapių knygą."
}
console.log (knyga1.aprasas ());

console.log ("MATEMATINĖS FUNKCIJOS")
//Matematinės funkcijos yra JS įterptos funkcijos.
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
console.log (Math.sin(0.52359878)); // logaritminės funkcijos, taip pat cos, tan, atan su radianinėmis vertėmis.

console.log("SKAIČIŲ FUNKCIJOS")
//dalijimas iš nulio grąžina 'Infinity' vertę.
console.log (10/0);
//nulio dalijimas iš nulio grąžina NaN vertę.
console.log (0/0);
console.log (Number.isNaN(NaN));//patikrinimas ar argumentas nėra skaičius.
console.log (Number.isInteger(10));//patikrinimas ar argumentas yra sveikasis skaičius.
console.log (Number.isInteger(10.1));
console.log (Number.isFinite(10));//patikrinimas ar argumentas yra JS skaičius.
console.log (Number.parseInt ("12.8"));//pakeičia tekstą sveikuoju skaičiu.
console.log (Number.parseFloat ("12.3"));//pakeičia tekstą skaičiumi įskaitant trupmeninę dalį.

console.log("DATA")
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
// Su + galima sujungti tekstus į vieną:
console.log ("vienas"+"du"+"trys"+"keturi");
// Su === ir !== galima palyginti tekstus;
console.log ("vienas"==="du");
console.log ("vienas"!=="du");
//Kaip masyvo atveju su .length pamatuojamas teksto ilgis:
console.log ("vienas".length);
//Palyginami tekstų 16 bit kodai:
console.log ("vienas">"du");

console.log ("TEKSTŲ METODAI");
// Metodai (grąžina naują tekstą):
console.log ("vienas".substring (1, 4));//teksto fragmentas.
console.log ("vienas".slice (-2));//paskutiniai du simboliai.
console.log ("vienas du".split (" "));//perkerta į du tekstus.
console.log ("vienas kiemas".indexOf ("e"));//pirma simbolio pozicija.
console.log ("vienas kiemas".indexOf ("e", 3));//pirma simbolio pozicija po antros pozicijos.
console.log ("vienas kiemas".indexOf ("u", 3));//jei simbolių nėra, grąžinamas -1. 
console.log ("vienas kiemas".indexOf ("kie", 3));//galioja ir simbolių kombinacijom.
console.log ("vienas".startsWith ("k"));//patikrina, ar argumetu prasideda.
console.log ("vienas".endsWith ("k"));//patikrina, ar argumetu užsibaigia.
console.log ("vienas".includes ("ena"));//patikrina, ar yra argumentas.
console.log ("vienas".replace ("vien", "kiem"));//pakeičia pirmą argumentą antru.
console.log ("VieNas".toLowerCase ());//tik mažosios raidės.
console.log ("VieNas".toUpperCase ());//tik didžiosios raidės. 
console.log ("vienas".charAt (1));//grąžina simbolį argumento pozicijoje.
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

console.log ("SPECIALIOS VERTĖS");
//NaN - nurodo skaitinės vertės nebuvimą:
let h = 4 * "a";
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

console.log ("PAPRASTOSIOS IR SUDĖTINĖS VERTĖS")
//Paprastosiomis vertėmis vadinamos nekeičiamos vertės: skaičiai, tekstai, boolean ir spec. vertės.
// Sudėtinės vertės: objektai, masyvai, funkcijos.

//Operacijų metu naudojamos paprastosios vertės, kai sudėtinių verčių aveju - nuorodos į tas vertes.
//Pavyzdys 1:
let tekstas1 = "vienas";
let tekstas2 = "vienas";
console.log (tekstas1===tekstas2);//true, nes lyginamos vertės, kurios yra vienodos.
let masyvas1 = [1, 2, 3, 4];
let masyvas2 = [1, 2, 3, 4];
console.log (masyvas1===masyvas2);//flse, nes lyginamos nuorodos, kurios skirtingos.
//Pavyzdys 2 su tekstu:
console.log (tekstas1);
tekstas1.replace ("vien", "kiem");
console.log (tekstas1);//tekstas1 nepasikeitė.
let tekstas3 = tekstas1.replace ("vien", "kiem");
console.log (tekstas3);//sukurtas naujas tekstas3.
console.log (tekstas1);//tekstas1 nepasikeitė;
//Pavyzdys 2 su masyvu:
console.log (masyvas1);
masyvas1[0]=10;
console.log (masyvas1);//masyvo savybė [0] pasikeitė.
let masyvas3 = masyvas1;
console.log (masyvas3);//masyvas3 yra nuoroda į tą patį objektą kaip masyvas1 atveju.
masyvas3[0]=15;
console.log (masyvas1);
console.log (masyvas3);//savybės 0 pasikeitė objekte, į kurį nurodo masyvas1 ir masyvas2.

console.log ("PAPRASTŲJŲ VERČIŲ TIPŲ KEITIMAS")
//vykdant veiksmus JS automatiškai keičia operandų tipus priklausomai nuo konteksto:
h = 2 * "3";
console.log (h);//atpažinęs matematinį operatorių, išskyrus +, JS stengsis pakeisti tekstą į skaičių. 
h = "12"/"3";
console.log (h);
h = "3" + 2;
console.log (h);//+ atveju skaičių keis į tekstą.
h = 2 + true;
console.log (h);// boolean true atveju keis į skaičių 1. 
h = 2 + false;
console.log (h);// boolean false atveju keis į skaičių 0.
h = "3" + false;
console.log (h);//teksto su boolean aveju, boolean keičiamas į tekstą.
h = 2 / "dem";
console.log (h);//nesant galimybės tekstą suprasti kaip skaičių, grąžinamas NaN rezultatas.

//Galima keisti tipus funkcijų Number, String, Boolean pagalba:
console.log(Number("3"));
console.log(Number(false));
console.log(String(4));
console.log(String(true));
console.log(Boolean(0));
console.log(Boolean(Infinity));

console.log ("PAPRASTŲJŲ VERČIŲ KEITIMO METODAI IR FUNKCIJOS")
//toString metodas leidžia konvertuoti atsižvelgiant į skaičiaus bazę:
h = 100;
console.log (h.toString (10));//dešimtainis kodas.
console.log ("0b" + h.toString (2));//binarinis kodas.
console.log ("0o" + h.toString (8));//okta kodas.
console.log ("0x" + h.toString (16));//heksa kodas.

//Skaičių keitimo metodai:
h = 127.34349
console.log (h.toFixed (0));//palieka 0 skaičių po kablelio.
console.log (h.toFixed (2));//palieka 2 skaičius po kablelio.
console.log (h.toExponential (3));//palieka 1 sveikąjį ir 3 skaičius po kablelio ir pateikia su "e" užrašymu.
console.log (h.toPrecision (7));//užrašo tik norimą kiekį skaičiaus ženklų, šiuo aveju septynis.
//PASTABA. Šios funkcijos suapvalina skaičius (paskutinis atvejis).

//Funkcijos parseInt ir parseFloat stengsis pakeisti visus įmanomus tekstų simbolius skaičiais:
console.log (parseInt ("6.87"));//parseInt grąžina sveikuosius skaičius.
console.log (parseInt ("0xFA3"));//funkcijos keičia heksa skaičius į dešimtainius.
console.log (parseInt ("01001", 2));//su nurodyta baze (antruoju argumentu) parseInt kovrtuoja skaičius į dešimtainius.
console.log (parseFloat ("6.87"));//parseFloat grąžina skaičius su trupmenine dalimi.
console.log (parseFloat ("3.14true"));//funkcijos grąžina skaičių, jei jis yra teksto priekyje.
console.log (parseFloat ("true 3.14"));//funkcijos nesupranta skaičių teksto dalyje ir grąžina NaN.

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
console.log(kuboAukstis);
//Sukurkime kintamąjį, kuris rodytų kūbo tūrį:
let kuboTuris = kuboAukstis*kuboPlotis*kuboIlgis;
console.log (kuboTuris.toFixed (2));
//let kintamasis po to gali būti keičiamas be atskiros deklaracijos:
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