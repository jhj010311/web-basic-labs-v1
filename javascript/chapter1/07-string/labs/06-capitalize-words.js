/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
function capitalizeWords(sentence) {
    // TODO: split → map → join
    return (
        sentence
            .split(" ")
            // .map((x) => x.replace(x.charAt(0), x.charAt(0).toUpperCase()))
            .map((x) => x.replace(x[0], x[0].toUpperCase()))
            .join(" ")
    );
}
console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"
