from playwright.sync_api import sync_playwright
import pathlib
root=pathlib.Path(__file__).resolve().parent.parent
pages=['index.html','abroad.html','szch.html','pl/index.html','en/index.html']
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
    for w,h,n in [(1366,768,'desktop'),(390,844,'mobile')]:
        pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=1)
        errs=[];pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
        for f in pages:
            pg.goto('http://localhost:8765/'+f);pg.wait_for_timeout(300)
            name=f.replace('/','_').replace('.html','')
            pg.screenshot(path=str(root/'_shots'/f'{name}_{n}.png'),full_page=True)
            ov=pg.evaluate('document.documentElement.scrollWidth>innerWidth')
            print(f,n,'overflow' if ov else 'ok',errs[:2], pg.evaluate("[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,4).map(e=>e.className+':'+Math.round(e.getBoundingClientRect().right))") if ov else '')
    b.close()
