export interface AudiometriaData {
  anio: number;
  audiometria_ocupacional: {
    trabajoAnterior: {
      expuestoRuido: string;
      apreciacionRuido: string;
      usoTapones: string;
      usoOrejeras: string;
      tiempoTrabajo: string;
      horasDiaExpuesto: string;
    };
    trabajoActual: {
      expuestoRuido: string;
      apreciacionRuido: string;
      usoTapones: string;
      usoOrejeras: string;
      tiempoTrabajo: string;
      horasDiaExpuesto: string;
    };
    antecedentesRelacionados: {
      consumoTabaco: string;
      exposicionQuimicos: string;
      servicioMilitar: {
        respuesta: string;
        descripcion: string;
      };
      hobbiesRuido: {
        respuesta: string;
        descripcion: string;
      };
      usoOtotoxicos: string;
      infeccionOido: string;
    };
    sintomasActuales: {
      hipoacusia: string;
      otalgia: string;
      zumbidos: string;
      mareos: string;
      otitis: string;
      resfrio: string;
    };
    audiograma: {
      oidoDerecho: {
        aerea: {
          250: number;
          500: number;
          1000: number;
          2000: number;
          3000: number;
          4000: number;
          6000: number;
          8000: number;
        };
        osea: {
          250: number | null;
          500: number | null;
          1000: number | null;
          2000: number | null;
          3000: number | null;
          4000: number | null;
          6000: number | null;
          8000: number | null;
        };
      };
      oidoIzquierdo: {
        aerea: {
          250: number;
          500: number;
          1000: number;
          2000: number;
          3000: number;
          4000: number;
          6000: number;
          8000: number;
        };
        osea: {
          250: number | null;
          500: number | null;
          1000: number | null;
          2000: number | null;
          3000: number | null;
          4000: number | null;
          6000: number | null;
          8000: number | null;
        };
      };
    };
    diagnostico: {
      cie_10: string;
      descripcion: string;
      recomendaciones: string;
    };
  };
}

export const audiometriaData: AudiometriaData[] = [
  {
    anio: 2022,
    audiometria_ocupacional: {
      trabajoAnterior: {
        expuestoRuido: "NO",
        apreciacionRuido: "N.A.",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "",
        horasDiaExpuesto: "N.A."
      },
      trabajoActual: {
        expuestoRuido: "SI",
        apreciacionRuido: "RUIDO LEVE",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "17 AÑOS",
        horasDiaExpuesto: "20 HRS"
      },
      antecedentesRelacionados: {
        consumoTabaco: "NO",
        exposicionQuimicos: "NO",
        servicioMilitar: {
          respuesta: "NO",
          descripcion: ""
        },
        hobbiesRuido: {
          respuesta: "NO",
          descripcion: ""
        },
        usoOtotoxicos: "NO",
        infeccionOido: "NO"
      },
      sintomasActuales: {
        hipoacusia: "NO",
        otalgia: "NO",
        zumbidos: "NO",
        mareos: "NO",
        otitis: "NO",
        resfrio: "NO"
      },
      audiograma: {
        oidoDerecho: {
          aerea: {
            250: 20,
            500: 15,
            1000: 10,
            2000: 15,
            3000: 25,
            4000: 30,
            6000: 20,
            8000: 25
          },
          osea: {
            250: 10,
            500: 5,
            1000: 0,
            2000: 5,
            3000: 20,
            4000: null,
            6000: null,
            8000: null
          }
        },
        oidoIzquierdo: {
          aerea: {
            250: 15,
            500: 15,
            1000: 10,
            2000: 20,
            3000: 25,
            4000: 30,
            6000: 15,
            8000: 20
          },
          osea: {
            250: null,
            500: 5,
            1000: 0,
            2000: 10,
            3000: 20,
            4000: 25,
            6000: 10,
            8000: null
          }
        }
      },
      diagnostico: {
        cie_10: "",
        descripcion: "AUDICION NORMAL BILATERAL",
        recomendaciones: "MANTENER MEDIDAS PREVENTIVAS. USO DE EPP AUDITIVOS. CONTROL AUDIOMÉTRICO ANUAL."
      }
    }
  },
  {
    anio: 2023,
    audiometria_ocupacional: {
      trabajoAnterior: {
        expuestoRuido: "NO",
        apreciacionRuido: "N.A.",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "",
        horasDiaExpuesto: "N.A."
      },
      trabajoActual: {
        expuestoRuido: "SI",
        apreciacionRuido: "RUIDO MODERADO",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "18 AÑOS",
        horasDiaExpuesto: "22 HRS"
      },
      antecedentesRelacionados: {
        consumoTabaco: "NO",
        exposicionQuimicos: "NO",
        servicioMilitar: {
          respuesta: "NO",
          descripcion: ""
        },
        hobbiesRuido: {
          respuesta: "NO",
          descripcion: ""
        },
        usoOtotoxicos: "NO",
        infeccionOido: "NO"
      },
      sintomasActuales: {
        hipoacusia: "LEVE",
        otalgia: "NO",
        zumbidos: "NO",
        mareos: "NO",
        otitis: "NO",
        resfrio: "NO"
      },
      audiograma: {
        oidoDerecho: {
          aerea: {
            250: 22,
            500: 18,
            1000: 12,
            2000: 18,
            3000: 30,
            4000: 35,
            6000: 25,
            8000: 30
          },
          osea: {
            250: 12,
            500: 8,
            1000: 2,
            2000: 8,
            3000: 25,
            4000: null,
            6000: null,
            8000: null
          }
        },
        oidoIzquierdo: {
          aerea: {
            250: 18,
            500: 18,
            1000: 12,
            2000: 22,
            3000: 30,
            4000: 35,
            6000: 20,
            8000: 25
          },
          osea: {
            250: null,
            500: 8,
            1000: 2,
            2000: 12,
            3000: 25,
            4000: 30,
            6000: 12,
            8000: null
          }
        }
      },
      diagnostico: {
        cie_10: "",
        descripcion: "HIPOACUSIA NEUROSENSORIAL LEVE BILATERAL INICIAL",
        recomendaciones: "USO OBLIGATORIO DE EPP AUDITIVOS. EVALUACIÓN DE PUESTO DE TRABAJO. CONTROL AUDIOMÉTRICO SEMESTRAL."
      }
    }
  },
  {
    anio: 2024,
    audiometria_ocupacional: {
      trabajoAnterior: {
        expuestoRuido: "NO",
        apreciacionRuido: "N.A.",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "",
        horasDiaExpuesto: "N.A."
      },
      trabajoActual: {
        expuestoRuido: "SI",
        apreciacionRuido: "RUIDO MODERADO",
        usoTapones: "SI",
        usoOrejeras: "NO",
        tiempoTrabajo: "19 AÑOS",
        horasDiaExpuesto: "22 HRS"
      },
      antecedentesRelacionados: {
        consumoTabaco: "NO",
        exposicionQuimicos: "NO",
        servicioMilitar: {
          respuesta: "NO",
          descripcion: ""
        },
        hobbiesRuido: {
          respuesta: "NO",
          descripcion: ""
        },
        usoOtotoxicos: "NO",
        infeccionOido: "NO"
      },
      sintomasActuales: {
        hipoacusia: "LEVE",
        otalgia: "NO",
        zumbidos: "OCASIONAL",
        mareos: "NO",
        otitis: "NO",
        resfrio: "NO"
      },
      audiograma: {
        oidoDerecho: {
          aerea: {
            250: 23,
            500: 18,
            1000: 13,
            2000: 18,
            3000: 32,
            4000: 40,
            6000: 28,
            8000: 35
          },
          osea: {
            250: 13,
            500: 8,
            1000: 3,
            2000: 8,
            3000: 27,
            4000: null,
            6000: null,
            8000: null
          }
        },
        oidoIzquierdo: {
          aerea: {
            250: 18,
            500: 18,
            1000: 13,
            2000: 23,
            3000: 32,
            4000: 38,
            6000: 22,
            8000: 30
          },
          osea: {
            250: null,
            500: 8,
            1000: 3,
            2000: 13,
            3000: 27,
            4000: 33,
            6000: 14,
            8000: null
          }
        }
      },
      diagnostico: {
        cie_10: "",
        descripcion: "HIPOACUSIA NEUROSENSORIAL LEVE BILATERAL D/C HIPOACUSIA INDUCIDA POR RUIDO LEVE BILATERAL",
        recomendaciones: "CONTINUAR USO DE EPP AUDITIVOS. EVALUACIÓN MÉDICA ESPECIALIZADA. CONTROL AUDIOMÉTRICO SEMESTRAL. ROTACIÓN DE PUESTO SI ES POSIBLE."
      }
    }
  },
  {
    anio: 2025,
    audiometria_ocupacional: {
      trabajoAnterior: {
        expuestoRuido: "NO",
        apreciacionRuido: "N.A.",
        usoTapones: "NO",
        usoOrejeras: "NO",
        tiempoTrabajo: "",
        horasDiaExpuesto: "N.A."
      },
      trabajoActual: {
        expuestoRuido: "SI",
        apreciacionRuido: "RUIDO MODERADO",
        usoTapones: "SI",
        usoOrejeras: "SI",
        tiempoTrabajo: "20 AÑOS",
        horasDiaExpuesto: "24 HRS"
      },
      antecedentesRelacionados: {
        consumoTabaco: "NO",
        exposicionQuimicos: "NO",
        servicioMilitar: {
          respuesta: "NO",
          descripcion: ""
        },
        hobbiesRuido: {
          respuesta: "NO",
          descripcion: ""
        },
        usoOtotoxicos: "NO",
        infeccionOido: "NO"
      },
      sintomasActuales: {
        hipoacusia: "LEVE",
        otalgia: "NO",
        zumbidos: "SI",
        mareos: "NO",
        otitis: "NO",
        resfrio: "NO"
      },
      audiograma: {
        oidoDerecho: {
          aerea: {
            250: 25,
            500: 20,
            1000: 15,
            2000: 20,
            3000: 35,
            4000: 45,
            6000: 30,
            8000: 40
          },
          osea: {
            250: 15,
            500: 10,
            1000: 5,
            2000: 10,
            3000: 30,
            4000: null,
            6000: null,
            8000: null
          }
        },
        oidoIzquierdo: {
          aerea: {
            250: 20,
            500: 20,
            1000: 15,
            2000: 25,
            3000: 35,
            4000: 40,
            6000: 25,
            8000: 35
          },
          osea: {
            250: null,
            500: 10,
            1000: 5,
            2000: 15,
            3000: 30,
            4000: 35,
            6000: 15,
            8000: null
          }
        }
      },
      diagnostico: {
        cie_10: "",
        descripcion: "HIPOACUSIA NEUROSENSORIAL LEVE BILATERAL D/C HIPOACUSIA INDUCIDA POR RUIDO LEVE BILATERAL SEGUN ESCALA KLOCKHOFF",
        recomendaciones: "EVITAR LA EXPOSICIÓN A RUIDO LABORAL >= 85 DB / > 8HRS DIARIAS, 40 HRS SEMANALES, SIN USO DE EPP AUDITIVOS. SEGUIMIENTO POR VIGILANCIA MÉDICO OCUPACIONAL Y EVALUACIÓN DE RIESGOS AUDITIVOS SEGÚN PUESTO LABORAL. CONTROL AUDIOMÉTRICO PERIÓDICO."
      }
    }
  }
];
