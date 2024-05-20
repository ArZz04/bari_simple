function toggleSucursal() {
  const sucursalParques = document.querySelector('.parques');
  const sucursalValle = document.querySelector('.valle');

  const container = document.querySelector('.container');

  if (sucursalParques.classList.contains('selected')) {
    sucursalParques.classList.remove('selected');
    sucursalValle.classList.add('selected');
    container.innerHTML = sectionButtons('valle'); // Cambiar a 'valle'
  } else {
    sucursalParques.classList.add('selected');
    sucursalValle.classList.remove('selected');
    container.innerHTML = sectionButtons('parques'); // Cambiar a 'parques'
  };
}

function generateButtonSection(sucursal, baseUrl) {
  return `
    <section class="section-container">
      <h1>PANTALLAS</h1>
      <ul class="container-boxes">
        <li class="button-box"> 
          <a href="${baseUrl}/res.html">
            <img src="./public/images/res.png" alt="">
            <p>RES</p>
          </a>
        </li>
        <li class="button-box">
          <a href="${baseUrl}/cerdo.html">
            <img src="./public/images/cerdo.png" alt="">
            <p>CERDO</p>
          </a>
        </li>
        <li class="button-box">
          <a href="${baseUrl}/centro.html">
            <img src="./public/images/screen.png" alt="">
            <p>CENTRO</p>
          </a>
        </li>
        <li class="button-box">
          <a href="${baseUrl}/pollo.html">
            <img src="./public/images/pollo.png" alt="">
            <p>POLLO</p>
          </a>
        </li>
        <li class="button-box">
          <a href="${baseUrl}/marisco.html">
            <img src="./public/images/pescado.png" alt="">
            <p>MARISCO</p>
          </a>
        </li>
      </ul>
    </section>
    <section class="box-preview">
      <img class="img-preview" src="${sucursal === 'parques' ? 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg' : 'https://wallpapers-clan.com/wp-content/uploads/2023/11/cool-vaporwave-art-desktop-wallpaper-preview.jpg'}" alt="">
    </section>
  `;
}

function sectionButtons(sucursal) {
  let baseUrl = sucursal === 'parques' ? './routes/parques' : './routes/valle';
  return generateButtonSection(sucursal, baseUrl);
}