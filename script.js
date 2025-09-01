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
  statusBox.innerHTML = '<div class="spinner"></div><div>Enviando...</div>';

  const formData = new FormData(uploadForm);
  try {
    const resp = await fetch(ENDPOINT_URL, {
      method:"POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(resp.ok){
      statusBox.innerHTML = '<div class="success">✅ Enviado com sucesso!</div>';
      uploadForm.reset();
      setTimeout(()=>{
        modal.classList.add('hidden');
        statusBox.textContent = "";
      },2000);
    }else{
      statusBox.innerHTML = '<div class="error">❌ Erro ao enviar.</div>';
    }
  } catch(err){
    statusBox.innerHTML = '<div class="error">❌ Falha de conexão.</div>';
  }
});
