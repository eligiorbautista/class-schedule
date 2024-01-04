document.getElementById('toggleModeBtn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    var icons = document.getElementsByClassName('btn-icon');
    var button = document.getElementById('toggleModeBtn');
    var modal = document.getElementById('disableModal');
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.toggle('fa-toggle-off');
        icons[i].classList.toggle('fa-toggle-on');
    }
    button.classList.toggle('btn-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        button.style.setProperty('background-color', '#ffffff', 'important');
        button.style.setProperty('color', '#000000', 'important');
        button.innerHTML = '<i class="fa-solid fa-sun" style="color:#ffc107"></i>';
        modal.classList.add('dark-mode-modal');
    } else {
        button.style.setProperty('background-color', '#1d1d1d', 'important');
        button.style.setProperty('color', '#ffffff', 'important');
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        modal.classList.remove('dark-mode-modal');
    }
});
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    displayModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
        e.preventDefault();
        displayModal();
    }
});
document.addEventListener('mousedown', function (e) {
    if (e.button === 2) {
        e.preventDefault();
        displayModal();
    }
});
document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();
        displayModal();
    }
});
function displayModal() {
    var modalHtml = '<div class="modal fade" id="disableModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
        + '<div class="modal-dialog modal-dialog-centered" role="document">'
        + '<div class="modal-content">'
        + '<div class="modal-header">'
        + '<h5 class="modal-title text-black" id="disableModal">Notice: Right-Click Disabled for Copyright Protection</h5 > '
        + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        + '<span aria-hidden="true">&times;</span>'
        + '</button>'
        + '</div>'
        + '<div class="modal-body">'
        + '<p>Right-click functionality on this page is disabled to protect my copyrighted content.<br><br>For content access or queries, contact me at it.elibautista@gmail.com.<br><br>Thank you for understanding.<br><br>Best,<br>Eli Bautista'
        + '</div>'
        + '<div class="modal-footer">'
        + '<button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    $('#disableModal').modal('show');
}