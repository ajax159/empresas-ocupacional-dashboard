export interface FactoresRiesgo {
  sarroDental: boolean;
  placaBacteriana: boolean;
  gingivitis: boolean;
  periodontitis: boolean;
  remanentesRadiculares: {
    tiene: boolean;
    cantidad: number;
  };
}

export interface CondicionesDentales {
  nCaries: number;
  detalleCaries: string[];
  piezasAusentes: {
    cantidad: number;
    detalle: string[];
  };
  remanenteRadicular: number;
  necrosisPulpar: number;
}

export interface Tratamientos {
  curaciones: number;
  exodoncia: number;
  protesis: number;
  profilaxis: number;
  endodoncia: number;
  otros: string;
}

export interface Diagnostico {
  codigo: string;
  descripcion: string;
  recomendacion: string;
}

export interface DatosAnuales {
  año: number;
  factoresRiesgo: FactoresRiesgo;
  condicionesDentales: CondicionesDentales;
  tratamientos: Tratamientos;
  diagnosticos: Diagnostico[];
}

export interface DatosOdontologicos {
  pacienteId: number;
  nombre: string;
  años: DatosAnuales[];
}

export const mockDatosOdontologicos: DatosOdontologicos = {
  pacienteId: 123,
  nombre: "Juan Pérez García",
  años: [
    {
      año: 2021,
      factoresRiesgo: {
        sarroDental: true,
        placaBacteriana: true,
        gingivitis: true,
        periodontitis: false,
        remanentesRadiculares: {
          tiene: true,
          cantidad: 3
        }
      },
      condicionesDentales: {
        nCaries: 5,
        detalleCaries: ["12", "22", "36", "14", "25"],
        piezasAusentes: {
          cantidad: 1,
          detalle: ["18"]
        },
        remanenteRadicular: 3,
        necrosisPulpar: 2
      },
      tratamientos: {
        curaciones: 3,
        exodoncia: 1,
        protesis: 0,
        profilaxis: 1,
        endodoncia: 1,
        otros: "Aplicación de flúor"
      },
      diagnosticos: [
        { 
          codigo: "K02.1", 
          descripcion: "Caries de dentina piezas múltiples", 
          recomendacion: "Curaciones inmediatas y control de higiene" 
        },
        { 
          codigo: "K05.1", 
          descripcion: "Gingivitis crónica", 
          recomendacion: "Profilaxis y educación en higiene oral" 
        },
        { 
          codigo: "K04.1", 
          descripcion: "Necrosis pulpar", 
          recomendacion: "Endodoncia o exodoncia según evaluación" 
        }
      ]
    },
    {
      año: 2022,
      factoresRiesgo: {
        sarroDental: true,
        placaBacteriana: false,
        gingivitis: true,
        periodontitis: false,
        remanentesRadiculares: {
          tiene: true,
          cantidad: 2
        }
      },
      condicionesDentales: {
        nCaries: 3,
        detalleCaries: ["12", "22", "36"],
        piezasAusentes: {
          cantidad: 2,
          detalle: ["11", "18"]
        },
        remanenteRadicular: 2,
        necrosisPulpar: 1
      },
      tratamientos: {
        curaciones: 2,
        exodoncia: 1,
        protesis: 1,
        profilaxis: 1,
        endodoncia: 1,
        otros: "Uso de enjuague antiséptico diario"
      },
      diagnosticos: [
        { 
          codigo: "K02.1", 
          descripcion: "Caries de dentina pieza 22", 
          recomendacion: "Curación inmediata" 
        },
        { 
          codigo: "K05.0", 
          descripcion: "Gingivitis aguda", 
          recomendacion: "Profilaxis y seguimiento mensual" 
        }
      ]
    },
    {
      año: 2023,
      factoresRiesgo: {
        sarroDental: false,
        placaBacteriana: true,
        gingivitis: false,
        periodontitis: false,
        remanentesRadiculares: {
          tiene: false,
          cantidad: 0
        }
      },
      condicionesDentales: {
        nCaries: 1,
        detalleCaries: ["15"],
        piezasAusentes: {
          cantidad: 3,
          detalle: ["11", "18", "26"]
        },
        remanenteRadicular: 0,
        necrosisPulpar: 0
      },
      tratamientos: {
        curaciones: 2,
        exodoncia: 1,
        protesis: 1,
        profilaxis: 2,
        endodoncia: 0,
        otros: "Control preventivo semestral"
      },
      diagnosticos: [
        { 
          codigo: "K02.0", 
          descripcion: "Caries inicial pieza 15", 
          recomendacion: "Curación y sellante" 
        },
        { 
          codigo: "Z01.2", 
          descripcion: "Examen odontológico de rutina", 
          recomendacion: "Continuar controles preventivos" 
        }
      ]
    },
    {
      año: 2024,
      factoresRiesgo: {
        sarroDental: false,
        placaBacteriana: false,
        gingivitis: false,
        periodontitis: false,
        remanentesRadiculares: {
          tiene: false,
          cantidad: 0
        }
      },
      condicionesDentales: {
        nCaries: 0,
        detalleCaries: [],
        piezasAusentes: {
          cantidad: 3,
          detalle: ["11", "18", "26"]
        },
        remanenteRadicular: 0,
        necrosisPulpar: 0
      },
      tratamientos: {
        curaciones: 1,
        exodoncia: 0,
        protesis: 0,
        profilaxis: 2,
        endodoncia: 0,
        otros: "Mantenimiento de prótesis"
      },
      diagnosticos: [
        { 
          codigo: "Z01.2", 
          descripcion: "Examen odontológico preventivo", 
          recomendacion: "Mantener higiene actual, control en 6 meses" 
        },
        { 
          codigo: "Z46.3", 
          descripcion: "Ajuste de prótesis dental", 
          recomendacion: "Control anual de prótesis" 
        }
      ]
    }
  ]
};

export const mockPacientesOdontologia: DatosOdontologicos[] = [
  mockDatosOdontologicos,
  {
    pacienteId: 124,
    nombre: "María González López",
    años: [
      {
        año: 2021,
        factoresRiesgo: {
          sarroDental: false,
          placaBacteriana: true,
          gingivitis: false,
          periodontitis: true,
          remanentesRadiculares: {
            tiene: false,
            cantidad: 0
          }
        },
        condicionesDentales: {
          nCaries: 2,
          detalleCaries: ["16", "37"],
          piezasAusentes: {
            cantidad: 4,
            detalle: ["17", "18", "27", "28"]
          },
          remanenteRadicular: 0,
          necrosisPulpar: 1
        },
        tratamientos: {
          curaciones: 1,
          exodoncia: 2,
          protesis: 1,
          profilaxis: 3,
          endodoncia: 1,
          otros: "Tratamiento periodontal"
        },
        diagnosticos: [
          { 
            codigo: "K05.3", 
            descripcion: "Periodontitis crónica", 
            recomendacion: "Raspado y alisado radicular" 
          },
          { 
            codigo: "K02.1", 
            descripcion: "Caries profunda", 
            recomendacion: "Endodoncia pieza 37" 
          }
        ]
      },
      {
        año: 2022,
        factoresRiesgo: {
          sarroDental: false,
          placaBacteriana: false,
          gingivitis: false,
          periodontitis: true,
          remanentesRadiculares: {
            tiene: false,
            cantidad: 0
          }
        },
        condicionesDentales: {
          nCaries: 1,
          detalleCaries: ["24"],
          piezasAusentes: {
            cantidad: 4,
            detalle: ["17", "18", "27", "28"]
          },
          remanenteRadicular: 0,
          necrosisPulpar: 0
        },
        tratamientos: {
          curaciones: 1,
          exodoncia: 0,
          protesis: 0,
          profilaxis: 4,
          endodoncia: 0,
          otros: "Mantenimiento periodontal"
        },
        diagnosticos: [
          { 
            codigo: "K05.3", 
            descripcion: "Periodontitis en mantenimiento", 
            recomendacion: "Control periodontal trimestral" 
          }
        ]
      }
    ]
  }
];
