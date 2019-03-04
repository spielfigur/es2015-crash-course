let template = [
    '<div class="Alert">',
        '<p>Foo</p>',
    '</div>'
].join('');

console.log(template);

let name = 'Bar';
let new_template = `
<div class="Alert">
    <p>${name}</p>
</div>
`.trim();

console.log(new_template);