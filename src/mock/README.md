# Gestión de Datos de Prueba

## Estructura Organizada

Los datos de prueba ahora están organizados en la carpeta `src/mock` con la siguiente estructura:

```
src/mock/
├── index.ts              # Exporta todos los datos mock
├── config.ts            # Configuración central para cambiar entre mock y API real
├── psicologia.mock.ts   # Datos de prueba para componentes de psicología
└── [futuro] otras especialidades médicas
```

## Configuración de Datos

### Cambio entre Mock y API Real

En `src/mock/config.ts`:

```typescript
// Cambiar a 'api' cuando uses datos reales
export const DATA_SOURCE = "mock";
```

### Uso en Componentes

```typescript
import { getDataSource, observacionConductasData } from "../../../mock";

// En el componente
const observacionData = getDataSource(observacionConductasData);
```

## Datos de Psicología Incluidos

- `observacionConductasData` - Datos de observación de conductas con historial
- `discursoData` - Datos de análisis del discurso
- `orientacionData` - Datos de orientación temporal/espacial
- `funcionesCognitivasData` - Evaluaciones de funciones cognitivas
- `aspectosBiopsicosocialesData` - Aspectos biopsicosociales
- `evaluacionPersonalidadData` - Evaluación de personalidad
- `diagnosticosPorAnoData` - Diagnósticos por año para gráficos
- `resumenDiagnosticosData` - Resumen de diagnósticos

## Ventajas de esta Estructura

1. **Centralización**: Todos los datos mock en un lugar
2. **Fácil migración**: Solo cambiar `DATA_SOURCE` para usar API real
3. **Organización**: Datos separados por especialidad médica
4. **Mantenimiento**: Fácil actualizar datos de prueba
5. **Tipado**: Preparado para TypeScript strict cuando se implementen APIs

## Próximos Pasos

Cuando implementes datos reales:

1. Cambiar `DATA_SOURCE` a `'api'` en `config.ts`
2. Implementar las llamadas a API en `getDataSource`
3. Los componentes seguirán funcionando sin cambios
