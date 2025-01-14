function anagram(str1,str2){
    const str1Store = str1.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
    const str2Store = str2.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
    return str1Store === str2Store;
}
console.log(anagram("listen", "silent")); // true 
console.log(anagram("hello", "world")); 