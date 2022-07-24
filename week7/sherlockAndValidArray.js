"use strict";

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // sort map by value
  let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  if (sorted.length == 1) return "YES";
  console.log(sorted);
  if (
    sorted[0][1] - sorted[sorted.length - 1][1] > 1 &&
    sorted[sorted.length - 1][1] != 1
  )
    return "NO";
  if (sorted[0][1] - sorted[sorted.length - 1][1] == 0) return "YES";
  let idx = 0;
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] - sorted[i + 1][1] == 1) {
      idx = i + 1;
      break;
    }
    if (sorted[i][1] - sorted[i + 1][1] == sorted[i][1] - 1) {
      idx = i + 1;
      break;
    }
  }
  console.log("idx  ", idx);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] - sorted[i + 1][1] == 1) {
      count++;
    }
    if (sorted[i][1] - sorted[i + 1][1] == sorted[i][1] - 1) {
      count2++;
    }
  }
  if (count2 > 1) return "NO";
  else if (count2 == 1) {
    if (idx == sorted.length - 1) return "YES";
  }

  if (count > 1) return "NO";
  if (count == 1) {
    if (idx != 1 && idx != sorted.length - 1) {
      return "NO";
    }
    return "YES";
  }
}
console.log(
  isValid(
    "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
  )
);
