/* =========================================================
   MFIT - v8 (base v5 + melhorias)
   - Tema claro/escuro
   - Exportar PDF **só texto**
   - Upload de foto (Formspree) com spinner & auto-fechar
   - Cada exercício em bloco único (fileira) e bem identado
   ========================================================= */

// ===== Dados dos treinos (cada sessão separada) =====
window.__TRAINING__ = [
  // ===== TREINO DE QUADRÍCEPS =====
  {
    key: "quads",
    title: "Treino de Quadríceps",
    items: [
      {
        name: "Agachamento Sumô com Halteres",
        series: "3x10/10/10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: "https://media.musclewiki.com/media/uploads/videos/branded/female-dumbbell-sumo-squat-front.mp4"
      },
      {
        name: "Leg Press 45º",
        series: "4x15 (pés colados) + 15 (afastados)",
        carga: "12 kg",
        intervalo: "40s",
        video: "https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-leg-press-front.mp4"
      },
      {
        name: "Adução de Quadril Máquina",
        series: "3x10/10/10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: "https://media.musclewiki.com/media/uploads/videos/branded/female-Machine-seated-leg-curl-side.mp4"
      },
      {
        name: "Cadeira Flexorad",
        series: "3x10/10/10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Cadeira Flexora Unilateral",
        series: "3x10/10/10/10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Panturrilha no Step",
        series: "4x15",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Abdominal Canivete",
        series: "4x15",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Esteira Caminhada",
        series: "30 reps",
        carga: "",
        intervalo: "",
        video: null
      }
    ]
  },

  // ===== TREINO DE POSTERIOR E GLÚTEO =====
  {
    key: "posterior",
    title: "Treino de Posterior e Glúteo",
    items: [
      {
        name: "Agachamento com Halteres",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Abdução de Quadril Máquina",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Elíptico",
        series: "25 reps",
        carga: "0 kg",
        intervalo: "",
        video: null
      },
      {
        name: "Afundo com Barra Livre",
        series: "3x12 • 3x10 • 2x8",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Agachamento Sumô no Step com Halteres",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Abdução de Quadril Máquina",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Cadeira Extensora",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Cadeira Extensora Unilateral",
        series: "3x10+10+10 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      },
      {
        name: "Leg Press 45º Unilateral",
        series: "3x12 • 3x10 • 2x8",
        carga: "0 kg",
        intervalo: "60s",
        video: null
      }
    ]
  },

  // ===== TREINO DE PEITO, TRÍCEPS E BÍCEPS =====
  {
    key: "peito",
    title: "Treino de Peito, Tríceps e Bíceps",
    items: [
      {
        name: "Alongamento de Ombros e Tríceps II",
        series: "3x20",
        carga: "0 kg",
        intervalo: "",
        video: null
      },
      {
        name: "Bike Spinning Sentada",
        series: "40 reps",
        carga: "",
        intervalo: "",
        video: null
      },
      {
        name: "Abdominal Supra Solo",
        series: "5x15",
        carga: "0 kg",
        intervalo: "40s",
        video: null
      },
      {
        name: "Tríceps Unilateral na Polia Alta (Pegada Neutra)",
        series: "3x15",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Alongamento de Peitoral Espaldar",
        series: "3x15",
        carga: "0 kg",
        intervalo: "40s",
        video: null
      },
      {
        name: "Mobilidade de Ombro III",
        series: "3x20",
        carga: "0 kg",
        intervalo: "",
        video: null
      },
      {
        name: "Rosca Alternada com Halteres",
        series: "3x15",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Tríceps na Polia com Corda",
        series: "3x15 (Lento) + 15 (Curto)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Tríceps Unilateral na Polia Alta (Pegada Neutra)",
        series: "3x15",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Crucifixo com Halteres",
        series: "4x12",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Crucifixo Inclinado com Halteres",
        series: "4x12",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Rosca Martelo com Halteres",
        series: "4x12",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      }
    ]
  },

  // ===== TREINO DE OMBRO E COSTA =====
  {
    key: "ombro",
    title: "Treino de Ombro e Costa",
    items: [
      {
        name: "Puxada Alta (Pegada Neutra)",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Abdominal Canivete",
        series: "3x12",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Esteira Caminhada",
        series: "40 reps",
        carga: "",
        intervalo: "",
        video: null
      },
      {
        name: "Elevação Lateral Unilateral Sentado com Halteres",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Elevação Frontal Alternada",
        series: "3x12",
        carga: "4 a 6 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Desenvolvimento com Halteres (Pegada Neutra)",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Puxada Neutra Triângulo",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Remada Baixa Triângulo",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      },
      {
        name: "Puxada Aberta Barra Reta",
        series: "3x10/8/6 (Drop – faz tudo e conta como 1 série)",
        carga: "0 kg",
        intervalo: "30s",
        video: null
      }
    ]
  }
];

// ===== Renderização =====
const app = document.getElementById('app');

function render(){
  app.innerHTML = "";
  window.__TRAINING__.forEach(section => {
    const wrap = document.createElement('section');
    wrap.className = `section ${section.key}`;
    wrap.innerHTML = `
      <div class="section-header">
        <div class="section-title">
          <div class="badge">${section.title.split(' ').slice(0,1)[0][0]}</div>
          <strong>${section.title}</strong>
        </div>
        <div class="section-toggle">▼</div>
      </div>
      <div class="section-body"></div>
    `;
    const body = wrap.querySelector('.section-body');

    section.items.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="info">
          <h3>${ex.name}</h3>
          <div class="meta">
            <div><strong>Séries:</strong> ${ex.series || "-"}</div>
            ${ex.carga ? `<div><strong>Carga:</strong> ${ex.carga}</div>` : ""}
            ${ex.intervalo ? `<div><strong>Intervalo:</strong> ${ex.intervalo}</div>` : ""}
          </div>
        </div>
        ${ex.video ? `<div class="thumb"><video controls muted preload="metadata" playsinline src="${ex.video}"></video></div>` : ""}
      `;
      body.appendChild(card);
    });

    // toggle open/close
    wrap.querySelector('.section-toggle').addEventListener('click',()=>{
      body.style.display = body.style.display === 'none' ? 'grid' : 'none';
    });
    app.appendChild(wrap);
  });
}

render();

// ===== Tema claro/escuro =====
document.getElementById('btnTheme').addEventListener('click', ()=>{
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('prefers-dark', isDark ? '1':'0');
});
// Persistir preferência
if(localStorage.getItem('prefers-dark') === '1'){
  document.documentElement.classList.add('dark');
}

// ===== Exportar PDF (apenas texto) =====
document.getElementById('btnExport').addEventListener('click', ()=>{
  // Monta um HTML temporário só com texto
  const container = document.createElement('div');
  container.style.padding = '12px';
  container.style.maxWidth = '800px';
  container.innerHTML = `<h1 style="font-family:Inter,Arial;margin:0 0 8px">Plano de Treinos</h1>
                         <div style="color:#6b7280;margin-bottom:12px">Exportado em ${new Date().toLocaleString()}</div>`;
  window.__TRAINING__.forEach(section=>{
    const s = document.createElement('div');
    s.style.margin = '8px 0 12px';
    s.innerHTML = `<h2 style="font-size:16px;margin:8px 0">${section.title}</h2>`;
    section.items.forEach(ex=>{
      const item = document.createElement('div');
      item.style.margin = '0 0 8px';
      item.innerHTML = `
        <div><strong>${ex.name}</strong></div>
        <div>Séries: ${ex.series || '-'}</div>
        ${ex.carga ? `<div>Carga: ${ex.carga}</div>` : ""}
        ${ex.intervalo ? `<div>Intervalo: ${ex.intervalo}</div>` : ""}
      `;
      s.appendChild(item);
    });
    container.appendChild(s);
  });

  const opt = {
    margin:       10,
    filename:     'treino-texto.pdf',
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().from(container).set(opt).save();
});

// ===== Upload de Foto (Formspree) =====
const modal = document.getElementById('uploadModal');
const btnUpload = document.getElementById('btnUpload');
const closeModal = document.getElementById('closeModal');
const uploadForm = document.getElementById('uploadForm');
const statusBox = document.getElementById('uploadStatus');

btnUpload.addEventListener('click', ()=> modal.classList.remove('hidden'));
closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));

// Trocar pelo seu endpoint do Formspree
const ENDPOINT_URL = "https://formspree.io/f/SEU_ENDPOINT";

uploadForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  statusBox.innerHTML = '<div class="spinner"></div><div>Enviando...</div>';

  const formData = new FormData(uploadForm);
  try{
    const resp = await fetch(ENDPOINT_URL, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(resp.ok){
      statusBox.innerHTML = '<div class="success">✅ Enviado com sucesso!</div>';
      uploadForm.reset();
      setTimeout(()=>{
        modal.classList.add('hidden');
        statusBox.textContent = "";
      }, 2000);
    }else{
      statusBox.innerHTML = '<div class="error">❌ Erro ao enviar.</div>';
    }
  }catch(err){
    statusBox.innerHTML = '<div class="error">❌ Falha de conexão.</div>';
  }
});
