function openNav() {
    document.getElementById("mydashboard").style.width = "250px";
    document.getElementById("utama").style.marginLeft = "250px";
  
  }
  
  function closeNav() {
    document.getElementById("mydashboard").style.width = "0";
    document.getElementById("utama").style.marginLeft= "0";
  
  }
  /* Toggle Sidebar JavaScript */
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
  