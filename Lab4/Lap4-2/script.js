let a, b, c = 0;
const btn = document.querySelector('input[type="submit"]');
const PTB2 = {
    delta: (a, b, c) => Math.pow(b, 2) - 4 * a * c,
    calc(a, b, c) {
        this.del = this.delta(a, b, c);
        if (this.del === 0) {
            this.x1 = -b / 2 * a;
            this.x2 = -b / 2 * a;
        }
        else if (this.del > 0) {
            this.x1 = (-b + Math.sqrt(this.del)) / 2;
            this.x2 = (-b + Math.sqrt(this.del)) / 2;
        }
    }
}
btn.addEventListener('click', function(e) {
    e.preventDefault();
    a = Number.parseInt(document.getElementById('a').value) || 0;
    b = Number.parseInt(document.getElementById('b').value) || 0;
    c = Number.parseInt(document.getElementById('c').value) || 0;
    if (a && b && c) {
        PTB2.calc(a, b, c);
        document.querySelector('.result')?.remove();
        const html = `
                <div class="result">
                    <p>Result: Δ = ${PTB2.del}, x<sub>1</sub> = ${PTB2.del >= 0 ? PTB2.x1 : 'invalid'}, x<sub>2</sub> = ${PTB2.del >= 0 ? PTB2.x2 : 'invalid'}</p>
                </div>
                `
        btn.insertAdjacentHTML('afterend', html);
    }
})