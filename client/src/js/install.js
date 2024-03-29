const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Done - TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';

// Done -TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {    
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});

// done -TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('Installed', 'appinstalled', event);
  });
