function cambiaScopri() {
  const scopri = document.querySelector('.Scopri');
  scopri.removeEventListener('click', cambiaScopri);
  
  const immaginePrima = document.querySelector('.Immagine2');
  const immagineDopo = document.querySelector('#Immagine4');
  const testoNascosto = document.querySelector('.testo-extra');
  const indietrobordo = document.querySelector('#indietro');
  const indietro = document.querySelector('#indietro p');
  const h3 = document.querySelectorAll('#htre');
  const contenuto2Extra = document.querySelector('#contenuto2-extra');
  const testodopo=document.querySelector('#testodopo');
  const back=document.querySelector('#back');
  const scelta=document.querySelector('.scelta');
  const fitness=document.querySelector('.fitness');
  const scheda=document.querySelector('#scheda p');
  const petto=document.querySelector('#petto h2');
  const pettotesto=document.querySelector('#pettotesto');
  const pettotesto2=document.querySelector('#pettotesto2');
  const spalle=document.querySelector('#spalle h2');
  const spalletesto=document.querySelector('#spalletesto');
  const spalletesto2=document.querySelector('#spalletesto2');
  const gambe=document.querySelector('#gambe h2');
  const gambetesto=document.querySelector('#gambetesto');
  const gambetesto2=document.querySelector('#gambetesto2');
  
  



  scopri.classList.add('hidden');
  immaginePrima.classList.add('hidden');
  scelta.classList.add('hidden');
  fitness.classList.add('hidden');
  immagineDopo.classList.remove('hidden');
  scheda.classList.remove('hidden');
  testoNascosto.classList.remove('hidden');
  indietro.classList.remove('hidden');
  indietrobordo.classList.remove('hidden');
  testodopo.classList.remove('hidden');
  contenuto2Extra.classList.remove('hidden');
  back.classList.remove('hidden');
  petto.classList.remove('hidden');
  pettotesto.classList.remove('hidden');
  pettotesto2.classList.remove('hidden');
  spalle.classList.remove('hidden');
  spalletesto.classList.remove('hidden');
  spalletesto2.classList.remove('hidden');
  gambe.classList.remove('hidden');
  gambetesto.classList.remove('hidden');
  gambetesto2.classList.remove('hidden');


  h3.forEach(element => {
    element.classList.remove('hidden');
  });
  


  indietro.addEventListener('click', tornaIndietro);
}

function tornaIndietro() {
  const scopri = document.querySelector('.Scopri');
  scopri.addEventListener('click', cambiaScopri);
  
  const immaginePrima = document.querySelector('.Immagine2');
  const immagineDopo = document.querySelector('#Immagine4');
  const testoNascosto = document.querySelector('.testo-extra');
  const indietrobordo = document.querySelector('#indietro');
  const indietro = document.querySelector('#indietro p');
  const h3 = document.querySelectorAll('#htre');
  const contenuto2Extra = document.querySelector('#contenuto2-extra');
  const testodopo=document.querySelector('#testodopo p');
  const back=document.querySelector('#back');
  const scelta=document.querySelector('.scelta');
  const fitness=document.querySelector('.fitness');
  const scheda=document.querySelector('#scheda p');
  const petto=document.querySelector('#petto h2');
  const pettotesto=document.querySelector('#pettotesto');
  const pettotesto2=document.querySelector('#pettotesto2');
  const spalle=document.querySelector('#spalle h2');
  const spalletesto=document.querySelector('#spalletesto');
  const spalletesto2=document.querySelector('#spalletesto2');
  const gambe=document.querySelector('#gambe h2');
  const gambetesto=document.querySelector('#gambetesto');
  const gambetesto2=document.querySelector('#gambetesto2');
  




  scopri.classList.remove('hidden');
  immaginePrima.classList.remove('hidden');
  scelta.classList.remove('hidden');
  fitness.classList.remove('hidden');
  immagineDopo.classList.add('hidden');
  testoNascosto.classList.add('hidden');
  indietro.classList.add('hidden');
  indietrobordo.classList.add('hidden');
  testodopo.classList.add('hidden');
  back.classList.add('hidden');
  scheda.classList.add('hidden');
  contenuto2Extra.classList.add('hidden');
  petto.classList.add('hidden');
  pettotesto.classList.add('hidden');
  pettotesto2.classList.add('hidden');
  spalle.classList.add('hidden');
  spalletesto.classList.add('hidden');
  spalletesto2.classList.add('hidden');
  gambe.classList.add('hidden');
  gambetesto.classList.add('hidden');
  gambetesto2.classList.add('hidden');


  h3.forEach(element => {
    element.classList.add('hidden');
  });
  

  indietro.removeEventListener('click', tornaIndietro);
}

const scopri = document.querySelector('.Scopri');
scopri.addEventListener('click', cambiaScopri);



