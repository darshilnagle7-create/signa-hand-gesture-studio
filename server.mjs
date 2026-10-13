import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/markdown; charset=utf-8','.png':'image/png','.svg':'image/svg+xml'};
createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const relative=normalize(pathname==='/'?'index.html':pathname.slice(1));if(relative.startsWith('..'))throw new Error('bad path');const file=join(root,relative);const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body)}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found')}}).listen(8000,()=>console.log('Signa is running at http://localhost:8000'));
