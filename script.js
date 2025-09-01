
function filterRows(query) {
  const q = query.toLowerCase().trim();
  const rows = document.querySelectorAll('#students tbody tr');
  let visible = 0;
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    const match = text.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  document.getElementById('count').textContent = visible.toString();
}

function sortBy(colIndex) {
  const tbody = document.querySelector('#students tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const isNumber = colIndex === 0 || colIndex === 6;

  const sorted = rows.sort((a, b) => {
    const A = a.children[colIndex].innerText.trim();
    const B = b.children[colIndex].innerText.trim();
    if (isNumber) return Number(A) - Number(B);
    return A.localeCompare(B);
  });

  const ths = document.querySelectorAll('thead th');
  const current = ths[colIndex];
  const asc = current.getAttribute('data-asc') !== 'true';
  ths.forEach(th => th.removeAttribute('data-asc'));
  current.setAttribute('data-asc', String(asc));
  if (!asc) sorted.reverse();

  sorted.forEach(r => tbody.appendChild(r));
}
