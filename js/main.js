const inputs = document.querySelectorAll("input");

// Dictonnari
const dictonnari = { one: ["second", "fourth"], second: ["third"], third: [], fourth: ["second"], fifth: ["one", "second", "third", "fourth"], }
for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.addEventListener("click", (ev) => {
        for (let index = 0; index < dictonnari[ev.currentTarget.id].length; index++) {
            const elementId = dictonnari[ev.currentTarget.id][index];
            const actual = document.querySelector(`input#${elementId}`);
            actual.checked = !actual.checked;
        }
    })
}