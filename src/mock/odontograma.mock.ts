export interface AccionDental {
  codigo: string;
  tipo: string;
}

export interface PiezaDental {
  pieza: number;
  acciones: AccionDental[];
}

export interface OdontogramaAnual {
  año: number;
  odontograma: PiezaDental[];
}

export interface DatosOdontograma {
  pacienteId: number;
  años: OdontogramaAnual[];
}

export const codigosFDI: { [key: string]: string } = {
  "0": "Sano",
  "1": "Caries",
  "2": "Obturación",
  "3": "Ausente",
  "4": "Corona",
  "5": "Endodoncia",
  "6": "Implante",
  "7": "Prótesis",
  "8": "Fractura",
  "9": "Otro",
  "35_13": "Restauración sector 13",
  "35_14": "Restauración sector 14",
  "35_15": "Restauración sector 15",
  "35_16": "Restauración sector 16",
  "35_17": "Restauración sector 17",
  "35_18": "Restauración sector 18",
  "35_21": "Restauración oclusal",
  "35_22": "Restauración mesial",
  "35_23": "Restauración distal",
  "35_24": "Restauración vestibular",
  "35_25": "Restauración lingual",
};

export const datosOdontogramaMock: DatosOdontograma = {
  pacienteId: 1,
  años: [
    {
      año: 2022,
      odontograma: [
        { pieza: 11, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 12, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 13, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 14, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 15, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 16, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 17, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 18, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 21, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 22, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 23, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 24, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 25, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 26, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 27, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 28, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 31, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 32, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 33, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 34, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 35, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 36, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 37, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 38, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 41, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 42, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 43, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 44, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 45, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 46, acciones: [{ codigo: "1", tipo: "Caries" }] },
        { pieza: 47, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 48, acciones: [{ codigo: "3", tipo: "Ausente" }] },
      ]
    },
    {
      año: 2023,
      odontograma: [
        { pieza: 11, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 12, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 13, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 14, acciones: [{ codigo: "1", tipo: "Caries" }] }, // Nueva caries
        { pieza: 15, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 16, acciones: [{ codigo: "4", tipo: "Corona" }] }, // Corona
        { pieza: 17, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 18, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 21, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 22, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 23, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 24, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 25, acciones: [{ codigo: "1", tipo: "Caries" }] }, // Nueva caries
        { pieza: 26, acciones: [{ codigo: "5", tipo: "Endodoncia" }] }, // Endodoncia
        { pieza: 27, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 28, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 31, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 32, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 33, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 34, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 35, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 36, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 37, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 38, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 41, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 42, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 43, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 44, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 45, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 46, acciones: [{ codigo: "5", tipo: "Endodoncia" }] }, // Endodoncia
        { pieza: 47, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 48, acciones: [{ codigo: "3", tipo: "Ausente" }] },
      ]
    },
    {
      año: 2024,
      odontograma: [
        { pieza: 11, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 12, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 13, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 14, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 15, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 16, acciones: [{ codigo: "4", tipo: "Corona" }] },
        { pieza: 17, acciones: [{ codigo: "1", tipo: "Caries" }] }, // Nueva caries
        { pieza: 18, acciones: [{ codigo: "6", tipo: "Implante" }] }, // Implante
        { pieza: 21, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 22, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 23, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 24, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 25, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 26, acciones: [{ codigo: "4", tipo: "Corona" }] }, // Corona sobre endodoncia
        { pieza: 27, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 28, acciones: [{ codigo: "6", tipo: "Implante" }] }, // Implante
        { pieza: 31, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 32, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 33, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 34, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 35, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 36, acciones: [{ codigo: "4", tipo: "Corona" }] }, // Corona sobre endodoncia
        { pieza: 37, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 38, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 41, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 42, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 43, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 44, acciones: [{ codigo: "1", tipo: "Caries" }] }, // Nueva caries
        { pieza: 45, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 46, acciones: [{ codigo: "4", tipo: "Corona" }] }, // Corona sobre endodoncia
        { pieza: 47, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 48, acciones: [{ codigo: "3", tipo: "Ausente" }] },
      ]
    },
    {
      año: 2025,
      odontograma: [
        { pieza: 11, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 12, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 13, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 14, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 15, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 16, acciones: [{ codigo: "4", tipo: "Corona" }] },
        { pieza: 17, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 18, acciones: [{ codigo: "6", tipo: "Implante" }] },
        { pieza: 21, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 22, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 23, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 24, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 25, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 26, acciones: [{ codigo: "4", tipo: "Corona" }] },
        { pieza: 27, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 28, acciones: [{ codigo: "6", tipo: "Implante" }] },
        { pieza: 31, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 32, acciones: [{ codigo: "1", tipo: "Caries" }] }, // Nueva caries
        { pieza: 33, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 34, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 35, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 36, acciones: [{ codigo: "4", tipo: "Corona" }] },
        { pieza: 37, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 38, acciones: [{ codigo: "3", tipo: "Ausente" }] },
        { pieza: 41, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 42, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 43, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 44, acciones: [{ codigo: "2", tipo: "Obturación" }] }, // Tratada
        { pieza: 45, acciones: [{ codigo: "2", tipo: "Obturación" }] },
        { pieza: 46, acciones: [{ codigo: "4", tipo: "Corona" }] },
        { pieza: 47, acciones: [{ codigo: "0", tipo: "Sano" }] },
        { pieza: 48, acciones: [{ codigo: "3", tipo: "Ausente" }] },
      ]
    }
  ]
};
