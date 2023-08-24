function binToDec(bin) {
  return parseInt(bin, 2);
}

// a << b	Сдвигает двоичное представление a на b битов влево, добавляя справа нули.
// a | b	Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.
function binToDec_V2(bin) {
  return [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);
}

binToDec("1001001");
binToDec_V2("1001001");
