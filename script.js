// Placeholder for window.__TRAINING__ (mantido do v5 formatado)

// ====== Upload Modal ======
const modal = document.getElementById('uploadModal');
const btnUpload = document.getElementById('btnUpload');
const closeModal = document.getElementById('closeModal');
const uploadForm = document.getElementById('uploadForm');
const statusBox = document.getElementById('uploadStatus');

btnUpload.addEventListener('click', ()=> modal.classList.remove('hidden'));
closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));

// Submeter foto para Formspree
const ENDPOINT_URL = "https://formspree.io/f/SEU_ENDPOINT"; // troque aqui pelo seu endpoint
uploadForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  statusBox.textContent = "Enviando...";

  const formData = new FormData(uploadForm);
  try {
    const resp = await fetch(ENDPOINT_URL, {
      method:"POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(resp.ok){
      statusBox.textContent = "✅ Enviado com sucesso!";
      uploadForm.reset();
    }else{
      statusBox.textContent = "❌ Erro ao enviar.";
    }
  } catch(err){
    statusBox.textContent = "❌ Falha de conexão.";
  }
});
