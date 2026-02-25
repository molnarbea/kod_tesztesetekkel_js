export function egyedi_betuk(szoveg = "") {
  const lista = [];
  for (let i = 0; i < szoveg.length; i++) {
    let betu= szoveg[i];
    let kisbetu=betu.toLowerCase();
    if (/^[a-záéíóöőúüű]$/.test(kisbetu) && lista.includes(kisbetu) != true) {
      lista.push(kisbetu);
    }
    
  }
  lista.sort();
  console.log(lista);
  return lista;
}
