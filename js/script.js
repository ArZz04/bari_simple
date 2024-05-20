function toggleSucursal() {
    const sucursalParques = document.querySelector('.parques');
    const sucursalValle = document.querySelector('.valle');

    if (sucursalParques.classList.contains('selected')) {
      sucursalParques.classList.remove('selected');
      sucursalValle.classList.add('selected');
    } else {
      sucursalParques.classList.add('selected');
      sucursalValle.classList.remove('selected');
    }
  }