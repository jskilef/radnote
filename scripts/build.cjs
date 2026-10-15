// Embed separated module sources into a fully standalone HTML distributable.
const fs=require('fs'),path=require('path');const root=path.join(__dirname,'..');const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let html=read('src/editor.html');
html=html.replace('<!-- MRA_STYLES -->',read('mra/theme.css')+'\n'+read('mra/styles.css'));
html=html.replace('<!-- CHEST_STYLES -->',read('chest/styles.css'));
const scripts=files=>files.map(p=>'<script>\n'+read(p)+'\n</script>').join('\n');
html=html.replace('<!-- MRA_SCRIPTS -->',scripts(['mra/anatomy.js','mra/engine.js','mra/ui.js']));
html=html.replace('<!-- CHEST_SCRIPTS -->',scripts(['chest/definition.js','chest/state.js','chest/validation.js','chest/generator.js','chest/components.js','chest/persistence.js','chest/ui.js']));
html=html.replace('<!-- SETTINGS_SCRIPTS -->',scripts(['settings/config.js']));
fs.writeFileSync(path.join(root,'index.html'),html);
