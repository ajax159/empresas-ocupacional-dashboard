export interface AntecedentesOculares {
  glaucoma: boolean;
  retinopatiaDiabetica: boolean;
  ametropia: boolean;
  cataratas: boolean;
  pterigion: boolean;
  otros: string | null;
}

export interface AntecedentesSistemicos {
  hipertensionArterial: boolean;
  enfermedadTiroidea: boolean;
  dislipidemias: boolean;
  diabetesMellitus: boolean;
  otros: string | null;
}

export interface MedicionOcular {
  OD: string;
  OI: string;
}

export interface AgudezaVisual {
  lejos: {
    sinCorreccion: MedicionOcular;
    conCorreccion: MedicionOcular;
  };
  cerca: {
    sinCorreccion: MedicionOcular;
    conCorreccion: MedicionOcular;
  };
}

export interface VisionBinocular {
  lejos: string;
  cerca: string;
}

export interface PruebasComplementarias {
  testColores: string;
  testProfundidad: number;
  campimetria: string;
}

export interface Diagnostico {
  codigo: string;
  descripcion: string;
}

export interface EvaluacionOftalmologica {
  conduceVehiculos: boolean;
  usaLentes: boolean;
  antecedentesOculares: AntecedentesOculares;
  antecedentesSistemicos: AntecedentesSistemicos;
  agudezaVisual: AgudezaVisual;
  visionBinocular: VisionBinocular;
  pruebasComplementarias: PruebasComplementarias;
  conclusiones: string[];
  recomendaciones: string[];
  observaciones: string | null;
  diagnosticos: Diagnostico[];
}

export interface EvaluacionOftalmologicaAnual {
  año: number;
  evaluacionOftalmologica: EvaluacionOftalmologica;
}

export interface DatosOftalmologicos {
  pacienteId: number;
  nombre: string;
  años: EvaluacionOftalmologicaAnual[];
}

export const mockDatosOftalmologicos: DatosOftalmologicos = {
  pacienteId: 1,
  nombre: "Juan Pérez Rodríguez",
  años: [
    {
      año: 2022,
      evaluacionOftalmologica: {
        conduceVehiculos: true,
        usaLentes: false,
        antecedentesOculares: {
          glaucoma: false,
          retinopatiaDiabetica: false,
          ametropia: false,
          cataratas: false,
          pterigion: false,
          otros: null
        },
        antecedentesSistemicos: {
          hipertensionArterial: false,
          enfermedadTiroidea: false,
          dislipidemias: false,
          diabetesMellitus: false,
          otros: null
        },
        agudezaVisual: {
          lejos: {
            sinCorreccion: { OD: "20/20", OI: "20/25" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          },
          cerca: {
            sinCorreccion: { OD: "20/30", OI: "20/30" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          }
        },
        visionBinocular: {
          lejos: "20/20",
          cerca: "20/25"
        },
        pruebasComplementarias: {
          testColores: "NORMAL",
          testProfundidad: 40,
          campimetria: "NORMAL"
        },
        conclusiones: [
          "AGUDEZA VISUAL NORMAL",
          "NO DISCROMATOPSIA", 
          "ESTEREOPSIS NORMAL"
        ],
        recomendaciones: [
          "CONTROL OFTALMOLÓGICO ANUAL",
          "USO DE PROTECCIÓN OCULAR EN ACTIVIDADES DE RIESGO"
        ],
        observaciones: null,
        diagnosticos: []
      }
    },
    {
      año: 2023,
      evaluacionOftalmologica: {
        conduceVehiculos: true,
        usaLentes: true,
        antecedentesOculares: {
          glaucoma: false,
          retinopatiaDiabetica: false,
          ametropia: true,
          cataratas: false,
          pterigion: false,
          otros: null
        },
        antecedentesSistemicos: {
          hipertensionArterial: true,
          enfermedadTiroidea: false,
          dislipidemias: false,
          diabetesMellitus: false,
          otros: null
        },
        agudezaVisual: {
          lejos: {
            sinCorreccion: { OD: "20/30", OI: "20/40" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          },
          cerca: {
            sinCorreccion: { OD: "20/100", OI: "20/100" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          }
        },
        visionBinocular: {
          lejos: "20/20",
          cerca: "20/20"
        },
        pruebasComplementarias: {
          testColores: "NORMAL",
          testProfundidad: 30,
          campimetria: "NORMAL"
        },
        conclusiones: [
          "MIOPÍA LEVE BILATERAL",
          "PRESBICIA INCIPIENTE",
          "NO DISCROMATOPSIA",
          "ESTEREOPSIS NORMAL"
        ],
        recomendaciones: [
          "USO DE LENTES CORRECTORES",
          "CONTROL OFTALMOLÓGICO CADA 6 MESES",
          "PROTECCIÓN UV"
        ],
        observaciones: "Inicio de cambios refractivos",
        diagnosticos: [
          { codigo: "H52.1", descripcion: "Miopía" },
          { codigo: "H52.4", descripcion: "Presbicia incipiente" }
        ]
      }
    },
    {
      año: 2024,
      evaluacionOftalmologica: {
        conduceVehiculos: true,
        usaLentes: true,
        antecedentesOculares: {
          glaucoma: false,
          retinopatiaDiabetica: false,
          ametropia: true,
          cataratas: false,
          pterigion: true,
          otros: null
        },
        antecedentesSistemicos: {
          hipertensionArterial: true,
          enfermedadTiroidea: false,
          dislipidemias: true,
          diabetesMellitus: false,
          otros: null
        },
        agudezaVisual: {
          lejos: {
            sinCorreccion: { OD: "20/40", OI: "20/50" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          },
          cerca: {
            sinCorreccion: { OD: "20/200", OI: "20/200" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          }
        },
        visionBinocular: {
          lejos: "20/20",
          cerca: "20/20"
        },
        pruebasComplementarias: {
          testColores: "NORMAL",
          testProfundidad: 25,
          campimetria: "NORMAL"
        },
        conclusiones: [
          "MIOPÍA PROGRESIVA",
          "PRESBICIA ESTABLECIDA",
          "PTERIGION NASAL GRADO I OD",
          "NO DISCROMATOPSIA",
          "ESTEREOPSIS NORMAL"
        ],
        recomendaciones: [
          "USO PERMANENTE DE LENTES BIFOCALES",
          "PROTECCIÓN UV OBLIGATORIA",
          "CONTROL CADA 4 MESES",
          "SEGUIMIENTO DE PTERIGION"
        ],
        observaciones: "Progresión de defecto refractivo, aparición de pterigion",
        diagnosticos: [
          { codigo: "H52.1", descripcion: "Miopía" },
          { codigo: "H52.4", descripcion: "Presbicia" },
          { codigo: "H11.0", descripcion: "Pterigion nasal" }
        ]
      }
    },
    {
      año: 2025,
      evaluacionOftalmologica: {
        conduceVehiculos: false,
        usaLentes: true,
        antecedentesOculares: {
          glaucoma: false,
          retinopatiaDiabetica: false,
          ametropia: true,
          cataratas: false,
          pterigion: true,
          otros: null
        },
        antecedentesSistemicos: {
          hipertensionArterial: true,
          enfermedadTiroidea: false,
          dislipidemias: true,
          diabetesMellitus: false,
          otros: null
        },
        agudezaVisual: {
          lejos: {
            sinCorreccion: { OD: "20/50", OI: "20/60" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          },
          cerca: {
            sinCorreccion: { OD: "20/200", OI: "20/200" },
            conCorreccion: { OD: "20/20", OI: "20/20" }
          }
        },
        visionBinocular: {
          lejos: "20/20",
          cerca: "20/20"
        },
        pruebasComplementarias: {
          testColores: "NORMAL",
          testProfundidad: 25,
          campimetria: "NORMAL"
        },
        conclusiones: [
          "PRESBICIA CORREGIDA",
          "NO DISCROMATOPSIA",
          "ESTEREOPSIS NORMAL",
          "CAMPIMETRIA NORMAL",
          "PTERIGION NASAL GRADO II OD",
          "PTERIGION NASAL GRADO I OI"
        ],
        recomendaciones: [
          "USO DE LENTES CORRECTORES PARA VISIÓN DE CERCA",
          "USO DE LENTES CON PROTECCIÓN UV ANTE EXPOSICIÓN A RADIACIÓN SOLAR",
          "CONTROL OFTALMOLÓGICO CADA 06 MESES"
        ],
        observaciones: null,
        diagnosticos: [
          { codigo: "H52.4", descripcion: "Presbicia" },
          { codigo: "H11.0", descripcion: "Pterigion nasal" }
        ]
      }
    }
  ]
};
