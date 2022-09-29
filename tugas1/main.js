const addTabelFilds = () => {
    const tabel = document.getElementById('tabel');

    // in header.
    const headerTr = tabel.querySelector('thead tr');
    const th = document.createElement('th');
    th.innerText = 'Mutu';
    headerTr.appendChild(th);

    // in body.
    const bodyTrs = tabel.querySelectorAll('tbody tr');
    bodyTrs.forEach((tr) => {
        const td = document.createElement('td');
        tr.appendChild(td);
    });
};

const calculateQualityPoint = () => {
    const tabel = document.getElementById('tabel');
    const bodyTrs = tabel.querySelectorAll('tbody tr');
    bodyTrs.forEach((tr) => {
        let pointLabel = 'E';
        const tds = tr.querySelectorAll('td');
        const point = Number(tds[3].innerText) || 0;
        if (point >= 80) pointLabel = 'A';
        else if (point >= 70) pointLabel = 'AB';
        else if (point >= 60) pointLabel = 'B';
        else if (point >= 50) pointLabel = 'BC';
        else if (point >= 40) pointLabel = 'C';
        else if (point >= 10) pointLabel = 'D';
        tds[4].innerText = pointLabel;
    });
};

// Event handdler.
const button = document.getElementById('calculate');
button.addEventListener('click', () => {
    addTabelFilds();
    calculateQualityPoint();
    button.parentNode.removeChild(button);
});
