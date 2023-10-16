const input = document.querySelector('.txt');
const area = document.querySelector('.area');
const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    e.preventDefault();
    const str = input.value;
    let i = 0;
    let stored = '';
    const arr = [];
    [...area.value].forEach((char) => {
        if (char === str[i++ % str.length])
            stored += char;
        else {
            stored = '';
            i = 0;
        }
        if (stored === str) {
            arr.push(stored);
            stored = '';
        }
    })
    const num = arr.length;
    document.querySelector('#result')?.remove();
    btn.insertAdjacentHTML('afterend', `<p id="result">Having ${num} of '${str}' in text area.</p>`)
})