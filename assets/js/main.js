// Прототип: лише локальна поведінка, без сторонніх скриптів і без надсилання даних.
(function(){
  var menu=document.getElementById('mmenu');
  document.querySelectorAll('[data-menu-open]').forEach(function(b){b.addEventListener('click',function(){menu.classList.add('open');document.body.style.overflow='hidden';});});
  document.querySelectorAll('[data-menu-close]').forEach(function(b){b.addEventListener('click',function(){menu.classList.remove('open');document.body.style.overflow='';});});
  var f=document.getElementById('szch-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();f.classList.add('sent');});}
})();
