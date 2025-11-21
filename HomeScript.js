//const bubbles  = document.querySelectorAll('.bub');
const panel    = document.getElementById('panel');
const backdrop = document.getElementById('backdrop');
const titleEl  = document.getElementById('tab-title');
const descEl   = document.getElementById('tab-desc');
const closeBtn = document.getElementById('close-tab');

// Building information data
const buildingInfo = {
    1:  {
        title: 'ACCOKEEK HALL',
        desc: 'Houses the campus library and eLearning center, your quiet corner for research, study sessions, and finding inspiration.',},

    14:  {
        title: 'KENT HALL',
        desc: 'This building keeps campus operations humming, think administration, maintenance, and behind-the-scenes folks who make everything run smoothly.'},

    5:  {
        title: 'BLADEN HALL - NORTH',
        desc: 'Bladen Hall North is your first stop for enrollment, records, and student-services—think “we’ve got you” central.'},

    16:  {
        title: 'DUKES STUDENT CENTER',
        desc: 'This is where the campus really vibes, your go-to for the bookstore, student groups, lounge space and everything in between'},

    6: {
        title: 'BLADEN HALL - SOUTH',
        desc: 'Home to the campus computer lab, help desk, Testing Center, and Math Learning Center. Everything you need to study, troubleshoot, and stay on top of your coursework.'},

    9: {
        title: 'CENTER FOR PERFORMING ARTS',
        desc: 'The creative heart of PGCC. With multiple theatres, rehearsal spaces, art studios, and the Encore Café, this building brings music, performance, and culture to life all under one roof.'},

    17: {
        title: 'MARLBORO HALL',
        desc: 'This is the Newest building on campus, opening 2026'},

    15: {
        title: 'LANHAM HALL',
        desc: 'Lanham Hall is home to a wide range of student support services, including STRIVE, TRIO, the Veterans Center, Tutoring and Writing Centers, Disability Support Services (DSS), Counseling Services, the Honors Program and Academy, Continuing Education offices, and the Academy of Health Sciences.'},

    10: {
        title: 'CHESAPEAKE HALL',
        desc: 'a science and growth powerhouse on the campus. With science labs,the Natural Sciences department and the Financial Empowerment Center all under one roof, this building fuels innovation, experiments, and hands-on learning.'}
};
console.log(buildingInfo);


// When bubble clicked → open Panel with info
function openPanelForBubble(bub) {
    const num = bub.dataset.name;
    console.log(num);
    const info = buildingInfo[num] || { title: 'Building' + num, desc: 'Details coming soon.'};
    console.log(info);

    titleEl.textContent = info.title;
    descEl.textContent  = info.desc;

    panel.classList.remove('d-none');
    backdrop.classList.remove('d-none');
}

fetch("Pics/test1-map.svg")
    .then(r => r.text())
    .then(svg => {
        document.getElementById("map-container").innerHTML = svg;

        // NOW the SVG DOM exists, so we can query it
        const bubbles = document.querySelectorAll('.bub');

        bubbles.forEach(bub => {
            console.log('binding click to', bub.id || bub.dataset.name); // for debugging x Tracking
            bub.addEventListener('click', () => openPanelForBubble(bub));
        });
    })
    .catch(err => console.error('SVG load error:', err));

// When Panel X button clicked → Close Panel
function closePanel() {
    panel.classList.add('d-none');
    backdrop.classList.add('d-none');
}

closeBtn.addEventListener('click', closePanel);
backdrop.addEventListener('click', closePanel);