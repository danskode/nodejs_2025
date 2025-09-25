function candyFactory() {
  return ["🍭", "🍬", "🍫"];
}

const owner = "Willy Wonka";

// man kan også eksportere en funktion manuelt ved at skrive export direkte foran funtioner
// export const owner = ...

// Man kan lave et objekt med funktionsref: nedenfor er højre side af : en funktionsreference ...
export default {
  candyFactory: candyFactory,
  owner: owner,
};
