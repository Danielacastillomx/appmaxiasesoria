const svgBase = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';

const SVG_ICONS = {
  glasses: `${svgBase}<rect x="2" y="10" width="7" height="5" rx="2.5"/><rect x="15" y="10" width="7" height="5" rx="2.5"/><path d="M9 12h6 M2 10l-1-3 M22 10l1-3"/></svg>`,
  star: `${svgBase}<path d="M12 2l2.4 7.6 8 2.4-8 2.4L12 22l-2.4-7.6-8-2.4 8-2.4L12 2z"/></svg>`,
  shield: `${svgBase}<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  minus: `${svgBase}<path d="M5 12h14"/></svg>`,
  drop: `${svgBase}<path d="M12 2.7S6 10 6 15.3a6 6 0 1012 0C18 10 12 2.7 12 2.7z"/></svg>`,
  microscope: `${svgBase}<rect x="3" y="9" width="18" height="6" rx="3"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/></svg>`,
  cross: `${svgBase}<circle cx="12" cy="12" r="10"/><path d="M12 8v8 M8 12h8"/></svg>`,
  pill: `${svgBase}<path d="M8.5 8.5l7 7 M15 5.5a5 5 0 017 7l-8 8a5 5 0 01-7-7l8-8z"/></svg>`,
  check: `${svgBase}<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 6-6"/></svg>`,
  x: `${svgBase}<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6 M9 9l6 6"/></svg>`,
  question: `${svgBase}<circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>`,
  eye: `${svgBase}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eye_slash: `${svgBase}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>`,
  eye_question: `${svgBase}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><path d="M12 9a2 2 0 112 2c-.5 0-1 .5-1 1"/><circle cx="12" cy="14" r=".5" fill="currentColor"/></svg>`,
  search: `${svgBase}<circle cx="11" cy="11" r="6"/><line x1="21" y1="21" x2="15.2" y2="15.2"/></svg>`,
  distort: `${svgBase}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  book: `${svgBase}<path d="M4 19.5A2.5 2.5 0 016.5 17H20 M4 19.5V4a2.5 2.5 0 012.5-2.5H20v15.5A2.5 2.5 0 0117.5 19.5H4z"/><path d="M8 7h6 M8 11h8"/></svg>`,
  cone: `${svgBase}<path d="M12 20s8-3 8-8-8-8-8-8c-2 0-8 3-8 8s6 8 8 8z M12 4c-4 0-5 3-5 8s1 8 5 8"/></svg>`,
  refresh: `${svgBase}<path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.7 2.7L3 8 M3 3v5h5"/></svg>`,
  eye_check: `${svgBase}<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><path d="M9 12l2 2 4-4"/></svg>`,
  diamond: `${svgBase}<path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20 M12 22V9 M6 3l6 6 M18 3l-6 6"/></svg>`,
  drop_x: `${svgBase}<path d="M12 2.7S6 10 6 15.3a6 6 0 1012 0C18 10 12 2.7 12 2.7z"/><path d="M9.5 13.5l5 5 M14.5 13.5l-5 5"/></svg>`
};

const DIAGNOSTICS = {
  MIOPIA: 'Miopía',
  ASTIGMATISMO: 'Astigmatismo',
  HIPERMETROPIA: 'Hipermetropía',
  PRESBICIA: 'Presbicia',
  QUERATOCONO: 'Queratocono',
  OJO_SECO: 'Ojo seco severo',
  NINGUNO: 'No tengo ningún diagnóstico',
  DESCONOZCO: 'No tengo conocimiento de mi diagnóstico'
};

const DIAGNOSTIC_MAPPING = {
  [DIAGNOSTICS.MIOPIA]: { top: 'Miopía', bottom: 'Dificultad para ver de lejos', emoji: SVG_ICONS.eye },
  [DIAGNOSTICS.HIPERMETROPIA]: { top: 'Hipermetropía', bottom: 'Dificultad para ver de cerca', emoji: SVG_ICONS.search },
  [DIAGNOSTICS.ASTIGMATISMO]: { top: 'Astigmatismo', bottom: 'Visión distorsionada', emoji: SVG_ICONS.distort },
  [DIAGNOSTICS.PRESBICIA]: { top: 'Presbicia', bottom: 'Dificultad para ver de lejos y de cerca + 40', emoji: SVG_ICONS.book },
  [DIAGNOSTICS.QUERATOCONO]: { top: 'Queratocono', bottom: 'Irregularidad de la córnea', emoji: SVG_ICONS.cone },
  [DIAGNOSTICS.OJO_SECO]: { top: 'Ojo seco severo', bottom: 'Resequedad extrema', emoji: SVG_ICONS.drop_x },
  [DIAGNOSTICS.NINGUNO]: { top: '', bottom: 'No tengo ningún diagnóstico', emoji: SVG_ICONS.eye_slash },
  [DIAGNOSTICS.DESCONOZCO]: { top: '', bottom: 'No tengo conocimiento de mi diagnóstico', emoji: SVG_ICONS.eye_question }
};

const CORRECTIONS = {
  GAFAS: 'Gafas',
  LENTES_CONTACTO: 'Lentes de contacto',
  LENTES_ESPECIALIZADOS: 'Lentes de contacto especializados',
  CIRUGIA: 'Cirugía',
  NINGUNA: 'No uso ninguna corrección',
  MEDICAMENTOS: 'Medicamentos'
};

const PREFERENCES = {
  SI_DESEO: 'Sí, deseo continuar con esta misma solución',
  SI_PERO: 'Sí, pero me gustaría probar otra solución',
  NO: 'No, me gustaría probar otra solución',
  NO_LO_SE: 'No lo sé'
};

const RESULTS = {
  GAFAS: 'Gafas',
  LENTES_CONTACTO: 'Lentes de contacto',
  LENTES_ESPECIALIZADOS: 'Lentes de contacto especializados',
  ALT_ACTUAL: 'Alternativa actual de lentes de contacto especializados',
  OTRAS_ALT: 'Otras alternativas de lentes de contacto especializados',
  NO_NECESARIO: 'No es necesario que uses otra alternativa de corrección',
  TRATAMIENTO_OJO_SECO: 'Tratamiento ojo seco',
  MEDICAMENTOS: 'Medicamentos'
};

const EMOJI_MAP = {
  'Corregir mi diagnóstico': SVG_ICONS.eye_check,
  'Moda': SVG_ICONS.diamond,
  'Protección de la visión': SVG_ICONS.shield,
  'No tengo ningún interés': SVG_ICONS.minus,
  
  [CORRECTIONS.GAFAS]: SVG_ICONS.glasses,
  [CORRECTIONS.LENTES_CONTACTO]: SVG_ICONS.drop,
  [CORRECTIONS.LENTES_ESPECIALIZADOS]: SVG_ICONS.microscope,
  [CORRECTIONS.CIRUGIA]: SVG_ICONS.cross,
  [CORRECTIONS.NINGUNA]: SVG_ICONS.minus,
  [CORRECTIONS.MEDICAMENTOS]: SVG_ICONS.pill,
  
  [PREFERENCES.SI_DESEO]: SVG_ICONS.check,
  [PREFERENCES.SI_PERO]: SVG_ICONS.refresh,
  [PREFERENCES.NO]: SVG_ICONS.x,
  [PREFERENCES.NO_LO_SE]: SVG_ICONS.question,
  
  [RESULTS.GAFAS]: SVG_ICONS.glasses,
  [RESULTS.LENTES_CONTACTO]: SVG_ICONS.drop,
  [RESULTS.LENTES_ESPECIALIZADOS]: SVG_ICONS.microscope,
  [RESULTS.ALT_ACTUAL]: SVG_ICONS.check,
  [RESULTS.OTRAS_ALT]: SVG_ICONS.refresh,
  [RESULTS.NO_NECESARIO]: SVG_ICONS.check,
  [RESULTS.TRATAMIENTO_OJO_SECO]: SVG_ICONS.drop_x,
  [RESULTS.MEDICAMENTOS]: SVG_ICONS.pill
};

const state = {
  step: 1,
  data: {
    documentType: '',
    documentNumber: '',
    name: '',
    phone: '',
    interest: '',
    diagnostics: [],
    correction: '',
    preference: ''
  }
};

function render() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // clear

  const container = document.createElement('div');
  container.className = 'main-card';
  
  switch(state.step) {
    case 1: container.appendChild(renderStep1()); break;
    case 2: container.appendChild(renderStep2()); break;
    case 3: container.appendChild(renderStep3()); break;
    case 4: container.appendChild(renderStep4()); break;
    case 5: container.appendChild(renderStep5()); break;
    case 6: container.appendChild(renderStep6()); break;
  }
  
  app.appendChild(container);
}

function createButton(text, onClick, className = 'btn-primary') {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.className = `btn ${className}`;
  btn.onclick = onClick;
  return btn;
}

function renderNavButtons(onNext, onPrev = null) {
  const nav = document.createElement('div');
  nav.className = 'nav-buttons';
  if (onPrev) {
    nav.appendChild(createButton('Anterior', onPrev, 'btn-secondary'));
  }
  if (onNext) {
    nav.appendChild(createButton('Siguiente', onNext, 'btn-primary'));
  }
  return nav;
}

function goNext(validateFn) {
  if (validateFn && !validateFn()) {
    alert('Por favor completa todos los campos requeridos.');
    return;
  }
  state.step++;
  render();
}

function goPrev() {
  state.step--;
  render();
}

// Step 1: Registro
function renderStep1() {
  const div = document.createElement('div');
  div.innerHTML = `
    <img src="logo.jpg" onerror="this.onerror=null; this.src='logo.jpeg';" alt="Maxi Gafas" style="max-width: 200px; margin: 0 auto 16px auto; display: block;">
    <h2 class="main-title">Asesoría Virtual</h2>
    <p class="subtitle">Registra tus datos y conoce cuál es la mejor alternativa visual para ti</p>
    <div class="form-group">
      <label>Tipo de documento</label>
      <select id="docType">
        <option value="">Selecciona...</option>
        <option value="CC" ${state.data.documentType === 'CC' ? 'selected' : ''}>Cédula de Ciudadanía</option>
        <option value="TI" ${state.data.documentType === 'TI' ? 'selected' : ''}>Tarjeta de Identidad</option>
        <option value="CE" ${state.data.documentType === 'CE' ? 'selected' : ''}>Cédula de Extranjería</option>
        <option value="Pasaporte" ${state.data.documentType === 'Pasaporte' ? 'selected' : ''}>Pasaporte</option>
      </select>
    </div>
    <div class="form-group">
      <label>Número de documento</label>
      <input type="text" id="docNum" value="${state.data.documentNumber}">
    </div>
    <div class="form-group">
      <label>Nombre completo</label>
      <input type="text" id="name" value="${state.data.name}">
    </div>
    <div class="form-group">
      <label>Número celular</label>
      <input type="tel" id="phone" value="${state.data.phone}">
    </div>
  `;
  const nav = renderNavButtons(() => {
    state.data.documentType = document.getElementById('docType').value;
    state.data.documentNumber = document.getElementById('docNum').value.trim();
    state.data.name = document.getElementById('name').value.trim();
    state.data.phone = document.getElementById('phone').value.trim();
    goNext(() => state.data.documentType && state.data.documentNumber && state.data.name && state.data.phone);
  });
  div.appendChild(nav);
  return div;
}

// Step 2: Interés
function renderStep2() {
  const div = document.createElement('div');
  div.innerHTML = `
    <p class="subtitle">Es un gusto para nosotros tenerte en nuestra plataforma de asesoría, vamos a resolver de manera interactiva las siguientes preguntas, estás a poco de conocer la mejor solución para tu visión.</p>
    <h2 class="question-title">¿Cuál es el <em><strong>interés</strong></em> de usar una solución visual?</h2>
  `;
  const options = ['Corregir mi diagnóstico', 'Moda', 'Protección de la visión', 'No tengo ningún interés'];
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-list';
  
  options.forEach(opt => {
    const label = document.createElement('label');
    label.className = `option-card ${state.data.interest === opt ? 'selected' : ''}`;
    label.innerHTML = `
      <input type="radio" name="interest" value="${opt}" ${state.data.interest === opt ? 'checked' : ''}>
      <span class="opt-main-text" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; text-align: center;">
        <span style="display: flex; align-items: center; justify-content: center; color: ${state.data.interest === opt ? 'var(--primary-color)' : '#6b7280'}; transform: scale(1.3); margin-bottom: 4px;">${EMOJI_MAP[opt]}</span>
        <span>${opt}</span>
      </span>
    `;
    label.onclick = () => {
      document.querySelectorAll('input[name="interest"]').forEach(el => el.checked = false);
      label.querySelector('input').checked = true;
      state.data.interest = opt;
      render();
    };
    optionsDiv.appendChild(label);
  });
  div.appendChild(optionsDiv);
  
  const nav = renderNavButtons(
    () => goNext(() => state.data.interest !== ''),
    goPrev
  );
  div.appendChild(nav);
  return div;
}

// Step 3: Diagnóstico (Múltiple)
function renderStep3() {
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="question-title">Tienes alguno de estos <em><strong>diagnósticos</strong></em> (puedes seleccionar una o varias opciones)</h2>`;
  
  const options = Object.values(DIAGNOSTICS);
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-list multi';
  
  options.forEach(opt => {
    const isSelected = state.data.diagnostics.includes(opt);
    const map = DIAGNOSTIC_MAPPING[opt];
    const label = document.createElement('label');
    label.className = `option-card ${isSelected ? 'selected' : ''}`;
    
    label.innerHTML = `
      <input type="checkbox" value="${opt}" ${isSelected ? 'checked' : ''}>
      <span class="opt-main-text" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; text-align: center;">
        ${map.emoji ? `<span style="display: flex; align-items: center; justify-content: center; color: ${isSelected ? 'var(--primary-color)' : '#6b7280'}; transform: scale(1.3); margin-bottom: 4px;">${map.emoji}</span>` : ''}
        <span>${map.top ? map.top : map.bottom}</span>
      </span>
      ${map.top ? `<span class="opt-sub-text" style="text-align: center; margin-top: 4px;">${map.bottom}</span>` : ''}
    `;
    
    label.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        if (opt === DIAGNOSTICS.NINGUNO || opt === DIAGNOSTICS.DESCONOZCO) {
          state.data.diagnostics = [opt];
        } else {
          state.data.diagnostics = state.data.diagnostics.filter(d => d !== DIAGNOSTICS.NINGUNO && d !== DIAGNOSTICS.DESCONOZCO);
          state.data.diagnostics.push(opt);
        }
      } else {
        state.data.diagnostics = state.data.diagnostics.filter(d => d !== opt);
      }
      if (state.data.diagnostics.includes(DIAGNOSTICS.NINGUNO) && state.data.correction !== CORRECTIONS.GAFAS) {
        state.data.correction = '';
      }
      render();
    });
    
    optionsDiv.appendChild(label);
  });
  div.appendChild(optionsDiv);
  
  const nav = renderNavButtons(
    () => goNext(() => state.data.diagnostics.length > 0),
    goPrev
  );
  div.appendChild(nav);
  return div;
}

// Step 4: Corrección actual
function renderStep4() {
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="question-title">¿Cómo <em><strong>corriges</strong></em> o <em><strong>proteges</strong></em> actualmente tu visión?</h2>`;
  
  let options = [
    CORRECTIONS.GAFAS,
    CORRECTIONS.LENTES_CONTACTO,
    CORRECTIONS.LENTES_ESPECIALIZADOS,
    CORRECTIONS.CIRUGIA,
    CORRECTIONS.NINGUNA
  ];
  
  if (state.data.diagnostics.includes(DIAGNOSTICS.OJO_SECO)) {
    options.push(CORRECTIONS.MEDICAMENTOS);
  }
  
  if (state.data.diagnostics.includes(DIAGNOSTICS.NINGUNO)) {
    options = [CORRECTIONS.GAFAS];
  }

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-list';
  
  options.forEach(opt => {
    const label = document.createElement('label');
    label.className = `option-card ${state.data.correction === opt ? 'selected' : ''}`;
    label.innerHTML = `
      <input type="radio" name="correction" value="${opt}" ${state.data.correction === opt ? 'checked' : ''}>
      <span class="opt-main-text" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; text-align: center;">
        <span style="display: flex; align-items: center; justify-content: center; color: ${state.data.correction === opt ? 'var(--primary-color)' : '#6b7280'}; transform: scale(1.3); margin-bottom: 4px;">${EMOJI_MAP[opt]}</span>
        <span>${opt}</span>
      </span>
    `;
    label.onclick = () => {
      state.data.correction = opt;
      state.data.preference = '';
      render();
    };
    optionsDiv.appendChild(label);
  });
  div.appendChild(optionsDiv);
  
  const nav = renderNavButtons(
    () => goNext(() => state.data.correction !== ''),
    goPrev
  );
  div.appendChild(nav);
  return div;
}

// Step 5: Satisfacción actual
function renderStep5() {
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="question-title">¿Te sientes a gusto con tu <em><strong>corrección actual</strong></em>?</h2>`;
  
  let options = Object.values(PREFERENCES);
  
  const hasQueratocono = state.data.diagnostics.includes(DIAGNOSTICS.QUERATOCONO);
  const hasOjoSeco = state.data.diagnostics.includes(DIAGNOSTICS.OJO_SECO);
  const correction = state.data.correction;
  
  const isQueratoconoRestricted = hasQueratocono && (correction === CORRECTIONS.GAFAS || correction === CORRECTIONS.NINGUNA);
  const isOjoSecoRestricted = hasOjoSeco && (correction === CORRECTIONS.GAFAS || correction === CORRECTIONS.NINGUNA || correction === CORRECTIONS.LENTES_CONTACTO);
  
  if (isQueratoconoRestricted || isOjoSecoRestricted) {
    options = options.filter(opt => opt !== PREFERENCES.SI_DESEO);
  }

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-list';
  
  options.forEach(opt => {
    const label = document.createElement('label');
    label.className = `option-card ${state.data.preference === opt ? 'selected' : ''}`;
    label.innerHTML = `
      <input type="radio" name="preference" value="${opt}" ${state.data.preference === opt ? 'checked' : ''}>
      <span class="opt-main-text" style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span style="display: flex; align-items: center; color: ${state.data.preference === opt ? 'var(--primary-color)' : '#6b7280'};">${EMOJI_MAP[opt]}</span>
        ${opt}
      </span>
    `;
    label.onclick = () => {
      state.data.preference = opt;
      render();
    };
    optionsDiv.appendChild(label);
  });
  div.appendChild(optionsDiv);
  
  const nav = renderNavButtons(
    () => goNext(() => state.data.preference !== ''),
    goPrev
  );
  div.appendChild(nav);
  return div;
}

// Step 6: Resultados
function getRecommendations() {
  const d = state.data.diagnostics;
  const c = state.data.correction;
  const p = state.data.preference;
  
  let group = 'A';
  if (d.includes(DIAGNOSTICS.NINGUNO)) group = 'D';
  else if (d.includes(DIAGNOSTICS.DESCONOZCO)) group = 'E';
  else if (d.includes(DIAGNOSTICS.QUERATOCONO)) group = 'B';
  else if (d.length === 1 && d[0] === DIAGNOSTICS.OJO_SECO) group = 'C';
  else group = 'A';

  let results = [];
  
  const logic = {
    'A': {
      [CORRECTIONS.GAFAS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.GAFAS],
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_CONTACTO]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.LENTES_CONTACTO],
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS, RESULTS.GAFAS],
        [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS, RESULTS.GAFAS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS, RESULTS.GAFAS]
      },
      [CORRECTIONS.LENTES_ESPECIALIZADOS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.ALT_ACTUAL],
        [PREFERENCES.SI_PERO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO_LO_SE]: [RESULTS.ALT_ACTUAL, RESULTS.OTRAS_ALT]
      },
      [CORRECTIONS.CIRUGIA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.NINGUNA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.MEDICAMENTOS]: { // Fallback just in case
         [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
         [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
         [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
         [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      }
    },
    'B': {
      [CORRECTIONS.GAFAS]: {
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_CONTACTO]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.LENTES_CONTACTO],
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_ESPECIALIZADOS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.ALT_ACTUAL],
        [PREFERENCES.SI_PERO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO_LO_SE]: [RESULTS.ALT_ACTUAL, RESULTS.OTRAS_ALT]
      },
      [CORRECTIONS.CIRUGIA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.NINGUNA]: {
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.MEDICAMENTOS]: { 
         [PREFERENCES.SI_PERO]: [RESULTS.LENTES_ESPECIALIZADOS],
         [PREFERENCES.NO]: [RESULTS.LENTES_ESPECIALIZADOS],
         [PREFERENCES.NO_LO_SE]: [RESULTS.LENTES_ESPECIALIZADOS]
      }
    },
    'C': {
      [CORRECTIONS.GAFAS]: {
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_CONTACTO]: {
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_ESPECIALIZADOS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.ALT_ACTUAL],
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.OTRAS_ALT],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.OTRAS_ALT],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.OTRAS_ALT]
      },
      [CORRECTIONS.CIRUGIA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.NINGUNA]: {
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.MEDICAMENTOS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS],
        [PREFERENCES.SI_PERO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.TRATAMIENTO_OJO_SECO, RESULTS.MEDICAMENTOS, RESULTS.LENTES_ESPECIALIZADOS]
      }
    },
    'D': {
      [CORRECTIONS.GAFAS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.GAFAS],
        [PREFERENCES.SI_PERO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.NO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS]
      }
    },
    'E': {
      [CORRECTIONS.GAFAS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.GAFAS],
        [PREFERENCES.SI_PERO]: [RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_CONTACTO]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.LENTES_CONTACTO],
        [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.LENTES_ESPECIALIZADOS]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.ALT_ACTUAL],
        [PREFERENCES.SI_PERO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO]: [RESULTS.OTRAS_ALT],
        [PREFERENCES.NO_LO_SE]: [RESULTS.ALT_ACTUAL, RESULTS.OTRAS_ALT]
      },
      [CORRECTIONS.CIRUGIA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      },
      [CORRECTIONS.NINGUNA]: {
        [PREFERENCES.SI_DESEO]: [RESULTS.NO_NECESARIO],
        [PREFERENCES.SI_PERO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS],
        [PREFERENCES.NO_LO_SE]: [RESULTS.GAFAS, RESULTS.LENTES_CONTACTO, RESULTS.LENTES_ESPECIALIZADOS]
      }
    }
  };

  results = logic[group]?.[c]?.[p] || [RESULTS.NO_NECESARIO];

  // Adición si tiene ojo seco severo en un grupo que no sea el C (es decir, combinado)
  if (group !== 'C' && d.includes(DIAGNOSTICS.OJO_SECO)) {
    if (!results.includes(RESULTS.TRATAMIENTO_OJO_SECO)) results.push(RESULTS.TRATAMIENTO_OJO_SECO);
    if (!results.includes(RESULTS.MEDICAMENTOS)) results.push(RESULTS.MEDICAMENTOS);
    if (!results.includes(RESULTS.LENTES_ESPECIALIZADOS)) results.push(RESULTS.LENTES_ESPECIALIZADOS);
  }

  return results;
}

function renderStep6() {
  const div = document.createElement('div');
  div.innerHTML = `<h2 class="question-title">Para tu <em><strong>condición</strong></em>, tenemos estas <em><strong>alternativas</strong></em> para ti.</h2>`;
  
  const recs = getRecommendations();
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options-list multi final-options';
  
  recs.forEach(rec => {
    const label = document.createElement('label');
    label.className = 'option-card';
    label.innerHTML = `
      <input type="checkbox" value="${rec}">
      <span class="opt-main-text" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; text-align: center;">
        <span style="display: flex; align-items: center; justify-content: center; color: #6b7280; transform: scale(1.3); margin-bottom: 4px;">${EMOJI_MAP[rec]}</span>
        <span>${rec}</span>
      </span>
    `;
    label.querySelector('input').addEventListener('change', (e) => {
      const span = label.querySelector('.opt-main-text span');
      if(e.target.checked) {
        label.classList.add('selected');
        span.style.color = 'var(--primary-color)';
      }
      else {
        label.classList.remove('selected');
        span.style.color = '#6b7280';
      }
    });
    optionsDiv.appendChild(label);
  });
  div.appendChild(optionsDiv);
  
  const nav = renderNavButtons(
    () => {
      const selected = Array.from(div.querySelectorAll('input:checked')).map(el => el.value);
      if (selected.length === 0) {
        alert('Por favor selecciona al menos una opción.');
        return;
      }
      alert('¡Gracias! Hemos recibido tu información y pronto te contactaremos.');
      state.step = 1;
      state.data = { documentType: '', documentNumber: '', name: '', phone: '', interest: '', diagnostics: [], correction: '', preference: '' };
      render();
    },
    goPrev
  );
  const nextBtn = nav.querySelectorAll('button')[1];
  nextBtn.textContent = 'Enviar';
  nextBtn.classList.replace('btn-primary', 'btn-success');
  
  div.appendChild(nav);
  return div;
}

// Init
window.onload = () => {
  render();
};
