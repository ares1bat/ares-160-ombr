// Прототип: лише локальна поведінка, без сторонніх скриптів і без надсилання даних.
(function(){
  var menu=document.getElementById('mmenu');
  document.querySelectorAll('[data-menu-open]').forEach(function(b){b.addEventListener('click',function(){menu.classList.add('open');document.body.style.overflow='hidden';});});
  document.querySelectorAll('[data-menu-close]').forEach(function(b){b.addEventListener('click',function(){menu.classList.remove('open');document.body.style.overflow='';});});
  var f=document.getElementById('szch-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    if(!f.reportValidity())return;
    var mode=(e.submitter&&e.submitter.getAttribute('data-send'))||'wa';
    var via=f.querySelector('input[name=via]:checked');
    var labels={call:'Дзвінок',wa:'WhatsApp',tg:'Telegram',signal:'Signal'};
    var txt='Анонімна заявка (повернення з СЗЧ)\nІм’я/позивний: '+f.name.value+'\nКонтакт: '+f.contact.value+'\nЗручніше: '+(via?labels[via.value]:'—');
    if(mode==='mail'){location.href='mailto:ares.1bat@gmail.com?subject='+encodeURIComponent('Анонімна заявка — повернення з СЗЧ')+'&body='+encodeURIComponent(txt);}
    else{window.open('https://wa.me/380990641565?text='+encodeURIComponent(txt),'_blank','noopener');}
    f.classList.add('sent');});}
})();
