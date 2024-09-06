function checkLetterA(string) {
  //Converter todas as letras A maiúsculas em letras a minúsculas
  const stringLowerCase = string.toLowerCase();

  //Inicia um contador para contar as quantidades da letra 'a' que vai aparecer na string.
  let counter = 0;

  //Loop para itinerar através da string e contar todas as letras 'a'
  for (let i = 0; i < stringLowerCase.length; i++) {
    if (stringLowerCase[i] === "a") {
      counter++;
    }
  }

  //Vamos verificar agora se temos alguma letra 'a ' na sting
  if (counter > 0) {
    console.log(`A letra 'A' ou 'a' aparece na string ${counter} veze(s)`);
  } else {
    console.log(`A letra 'A' ou 'a' não aparece na string`);
  }
}
const string = "Nathalia Fernandes Oliveira ";
checkLetterA(string);
