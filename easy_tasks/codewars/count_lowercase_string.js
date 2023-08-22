function lowercaseCount_V1(str){
	return (str.match(/[a-z]/g) || []).length; // || [] - Или пустой массив 
}

function lowercaseCount_V2(str){
	return str.replace(/[^a-z]/g, "").length;
}

function lowercaseCount_V3(str){
    const ARRAY_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
	                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
						's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	return str.split('').filter(char => (char === char.toLowerCase() && ARRAY_LETTERS.includes(char) )).length;
}

lowercaseCount_V1("abc");
lowercaseCount_V1("abcABC123");
lowercaseCount_V1("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount_V1("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");

lowercaseCount_V2("abc");
lowercaseCount_V2("abcABC123");
lowercaseCount_V2("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount_V2("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");

lowercaseCount_V3("abc");
lowercaseCount_V3("abcABC123");
lowercaseCount_V3("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
lowercaseCount_V3("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");