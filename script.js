
       
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄'; 
            snowflake.style.left = Math.random() * 100 + 'vw'; 
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 
            document.body.appendChild(snowflake); 

            
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        
        setInterval(createSnowflake, 200);
       
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('sidebar');
        const sidebarLinks = document.querySelectorAll('#sidebar a');
    
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show'); 
        });
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show'); 
            });
        });
        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = navMenu.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);
        
            if (!isClickInsideSidebar && !isClickOnMenuToggle) {
                navMenu.classList.remove('show'); 
            }
        });
   
        