// Formulario de solicitud
        document.getElementById('serviceRequestForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const requirement = document.getElementById('requirement').value;
            const message = document.getElementById('message').value;
            
            // Validación simple
            if (!name || !email || !phone || !requirement) {
                alert('Por favor, complete todos los campos obligatorios (*)');
                return;
            }
            
            // Simular envío del formulario
            alert(`¡Gracias ${name}!\nSu solicitud de ${requirement} ha sido enviada correctamente.\nNos contactaremos al ${phone} o ${email} en las próximas 24 horas.`);
            
            // Limpiar formulario
            document.getElementById('serviceRequestForm').reset();
        });

        // Efecto del footer al aparecer
        document.addEventListener('DOMContentLoaded', function() {
            const footer = document.getElementById('mainFooter');
            
            // Función para verificar si el footer está visible
            function isFooterVisible() {
                const rect = footer.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                );
            }
            
            // Mostrar el footer con efecto cuando sea visible
            function showFooterOnScroll() {
                if (isFooterVisible()) {
                    footer.classList.add('visible');
                    // Remover el event listener después de que el footer sea visible
                    window.removeEventListener('scroll', showFooterOnScroll);
                }
            }
            
            // Verificar si el footer ya es visible al cargar la página
            if (isFooterVisible()) {
                footer.classList.add('visible');
            } else {
                // Agregar listener para el scroll
                window.addEventListener('scroll', showFooterOnScroll);
            }
        });

        // Cambio de color del header al hacer scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 82, 165, 0.95)';
                header.style.padding = '10px 5%';
            } else {
                header.style.backgroundColor = 'var(--azul-rey)';
                header.style.padding = '15px 5%';
            }
        });