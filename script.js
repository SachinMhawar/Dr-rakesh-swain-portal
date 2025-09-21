let selectedDisease = "";

function openPopup(disease) {
  selectedDisease = disease; 
  const popup = document.getElementById("pdfPopup");
  const langDiv = document.getElementById("language-buttons");

  const languages = [
    "English","Hindi"
  ];

  langDiv.innerHTML = "";
  languages.forEach(lang => {
    const btn = document.createElement("button");
    btn.innerText = lang;
    btn.className = "language-btn";
    btn.onclick = () => downloadPDF(lang);
    langDiv.appendChild(btn);
  });
  

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("pdfPopup").style.display = "none";
}

function downloadPDF(language) {
  const filePath = `pdfs/${selectedDisease}/${language.toLowerCase()}.pdf`;

  const link = document.createElement("a");
  link.href = filePath;
  link.download = `${selectedDisease}-${language}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  closePopup();
}