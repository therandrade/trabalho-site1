const btnFechar = document.querySelector('.btn-fechar');
const inputPesquisa = document.querySelector('.input-pesquisa');


btnFechar.addEventListener('click', () => {
    inputPesquisa.value = ''; 
    inputPesquisa.placeholder = 'Buscar...'; 
});

function togglePopup() {
    const popup = document.getElementById('popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block'; 
    } else {
        popup.style.display = 'none'; 
    }
}

function togglePesquisaPopup() {
    const popupPesquisa = document.getElementById('popup-pesquisa');
    popupPesquisa.style.display = popupPesquisa.style.display === 'block' ? 'none' : 'block';
}

function toggleSacolaPopup() {
    const popupSacola = document.getElementById('popup-sacola');
    if (popupSacola.style.display === 'none' || popupSacola.style.display === '') {
        popupSacola.style.display = 'block'; 
    } else {
        popupSacola.style.display = 'none';
    }
}

document.getElementById("comprar-button").onclick = function() {
    window.location.href = "home"; // Substitua pelo URL desejado
};
