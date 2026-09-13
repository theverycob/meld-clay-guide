const comparison=document.getElementById('comparison');
const range=document.getElementById('compare-range');
function show(value){range.value=value;comparison.style.setProperty('--split',value+'%');range.setAttribute('aria-valuetext',value+' percent before image revealed');}
range.addEventListener('input',()=>show(range.value));
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.view)));
show(range.value);
