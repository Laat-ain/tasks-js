function deleteCharacters(string) {
  return string.split(",").slice(1, -1).join(" ") || null;
}

function deleteCharacters_V2(string) {
    const masString = string.split(",");
	  if (masString.length > 2) {
		return masString.slice(1, -1).join(" ");
	  }
	  return null;
}

deleteCharacters("1,2,3");
deleteCharacters("1,2,3,1,2,3");
deleteCharacters("1,2");
deleteCharacters("");

deleteCharacters_V2("1,2,3");
deleteCharacters_V2("1,2,3,1,2,3");
deleteCharacters_V2("1,2");
deleteCharacters_V2("");
