// Embed the separated MRA sources, retaining a fully standalone distributable HTML.
const fs=require('fs'),path=require('path');const root=path.join(__dirname,'..');const read=p=>fs.readFileSync(path.join(root,p),'utf8');
let html=read('src/editor.html');html=html.replace('<!-- MRA_STYLES -->',read('mra/theme.css')+'\n'+read('mra/styles.css'));html=html.replace('<!-- MRA_SCRIPTS -->',['mra/anatomy.js','mra/engine.js','mra/ui.js'].map(p=>'<script>\n'+read(p)+'\n</script>').join('\n'));fs.writeFileSync(path.join(root,'index.html'),html);
