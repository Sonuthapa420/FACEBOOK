document.getElementById('seeMoreBtn').addEventListener('click', function() {
    var dropdownList = document.getElementById('dropdownList');
    if (dropdownList.classList.contains('hidden')) {
        dropdownList.classList.remove('hidden');
        dropdownList.classList.add('show');
    } else {
        dropdownList.classList.remove('show');
        dropdownList.classList.add('hidden');
    }
});
