export const randomCodeGen = (size = 7) => {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';

  for (let i = 0; i < size; i++) {
    const index = Math.floor(Math.random() * char.length);
    code += char[index];
  }

  return code;
}

// Exemplo de uso
console.log(randomCodeGen()); // Saída tipo: "3XyZ1kA"
