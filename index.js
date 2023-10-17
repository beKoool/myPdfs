fetch('pdfData.json')
.then(response => response.json())
.then(data => {
    const cards = document.getElementById('cards');

    data.forEach(pdf => {
        const card = document.createElement('div');
        card.classList.add('card');    
        card.setAttribute('data-title', `${pdf.title.grade} ${pdf.title.subject} ${pdf.title.desc}`); // Add a data-title attribute 
        card.innerHTML = `
            <div class="title" id="title">${pdf.title.grade} ${pdf.title.subject} ${pdf.title.desc}</div>
            <div class="btn">
            <a href="${pdf.link}" target="_blank">
                <button class="prev-btn">        
                    <svg class="prev-svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.719 3.438a3.281 3.281 0 0 0-3.282 3.28v21.563a3.281 3.281 0 0 0 3.282 3.282H28.28a3.28 3.28 0 0 0 3.282-3.282v-7.5a1.406 1.406 0 0 1 2.812 0v7.5a6.094 6.094 0 0 1-6.094 6.094H6.72a6.094 6.094 0 0 1-6.094-6.094V6.72A6.094 6.094 0 0 1 6.719.625h7.5a1.406 1.406 0 0 1 0 2.813h-7.5ZM19.375 2.03A1.406 1.406 0 0 1 20.781.625H32.97a1.406 1.406 0 0 1 1.406 1.406V14.22a1.406 1.406 0 0 1-2.813 0V5.425l-9.787 9.788a1.406 1.406 0 0 1-1.987-1.988l9.787-9.787h-8.794a1.406 1.406 0 0 1-1.406-1.407Z" fill="#212121"/>
                    </svg>
                                                        
                    Preview</button>
            </a>

            <a href="${pdf.link}" download>
                <button class="dwn-btn">
                    <svg class="dwn-svg" width="26" height="38" viewBox="0 0 26 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 36.25h23M13 1.75v26.833m0 0L22.583 19M13 28.583 3.417 19" stroke="#212121" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Download</button>    
            </div>
            </a>

        `;
        cards.appendChild(card);
    });
});

