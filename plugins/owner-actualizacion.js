import _0x5d41f3 from'axios';let previousCommitSHA='',previousUpdatedAt='';const owner='OFC-YOVANI',repo='HADES-BOT-OMEGA',handler=async(_0x271f6d,{conn:_0x525a4e,text:_0xde0ff1,usedPrefix:_0x4015bd,command:_0x35b0e4})=>{async function _0x4c46bd(){try{const _0x26bae1=await _0x5d41f3['get']('https://api.github.com/repos/'+owner+'/'+repo+'/commits?per_page=1'),{sha:_0x5718d8,commit:{message:_0x101610},html_url:_0x207f0e}=_0x26bae1['data'][0x0];(_0x5718d8!==previousCommitSHA||_0x101610!==previousUpdatedAt)&&(previousCommitSHA=_0x5718d8,previousUpdatedAt=_0x101610,_0x525a4e['sendMessage'](_0x271f6d['chat'],{'text':'[❗]\x20The\x20repository\x20has\x20been\x20updated!-\x0a\x20Repository:\x20'+_0x207f0e+'\x0a:commit\x20message\x20'+_0x101610},{'quoted':_0x271f6d}));}catch(_0x541571){_0x271f6d['reply']('[❗]\x20Error\x20al\x20verificar\x20el\x20repositorio:',_0x541571['message']);}}setInterval(_0x4c46bd,0xea60);};handler['command']=/^(actualizar|actualizacion)/i,handler['rowner']=!![];export default handler;