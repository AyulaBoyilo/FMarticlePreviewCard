document.querySelector('.btn-share-light').addEventListener('click', showSocial);

document.querySelector('.btn-share-dark').addEventListener('click', hideSocial);

function showSocial(){
  document.querySelector('.social').classList.remove('hidden');
}

function hideSocial(){
  document.querySelector('.social').classList.add('hidden');
}