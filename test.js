const path = require('path');
const fs = require('fs');

test('HTML file should contain "Hola Mundo"', () => {
    const htmlPath = path.resolve(__dirname, 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    expect(html).toContain('<h1>Hola Mundo</h1>');
});
