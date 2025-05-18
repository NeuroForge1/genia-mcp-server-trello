# Trello MCP Server para GENIA

Un servidor MCP (Model Context Protocol) para Trello que permite a GENIA interactuar con tableros, listas, tarjetas y otros recursos de Trello.

## Características

- Autenticación con API Key y Token de Trello
- Operaciones completas sobre tableros, listas y tarjetas
- Gestión de etiquetas y adjuntos
- Integración con el orquestador MCP de GENIA
- Soporte para autenticación por usuario

## Requisitos

- Node.js 16+
- NPX
- API Key y Token de Trello con los permisos adecuados

## Instalación

### Usando NPX

```bash
npx @delorenj/mcp-server-trello@latest
```

### Ejecución

```bash
TRELLO_API_KEY=your_api_key TRELLO_TOKEN=your_token npx @delorenj/mcp-server-trello@latest
```

## Operaciones Soportadas

### Tableros

- `get_boards`: Lista los tableros del usuario
- `get_board`: Obtiene información de un tablero específico
- `create_board`: Crea un nuevo tablero
- `update_board`: Actualiza la configuración de un tablero
- `delete_board`: Elimina un tablero

### Listas

- `get_lists`: Obtiene las listas de un tablero
- `get_list`: Obtiene información de una lista específica
- `create_list`: Crea una nueva lista en un tablero
- `update_list`: Actualiza una lista
- `archive_list`: Archiva una lista

### Tarjetas

- `get_cards_by_list_id`: Obtiene las tarjetas de una lista
- `get_card`: Obtiene información de una tarjeta específica
- `add_card_to_list`: Añade una nueva tarjeta a una lista
- `update_card`: Actualiza una tarjeta
- `move_card`: Mueve una tarjeta entre listas
- `archive_card`: Archiva una tarjeta

### Etiquetas y Adjuntos

- `add_label_to_card`: Añade una etiqueta a una tarjeta
- `remove_label_from_card`: Elimina una etiqueta de una tarjeta
- `add_attachment_to_card`: Añade un adjunto a una tarjeta
- `remove_attachment_from_card`: Elimina un adjunto de una tarjeta

## Integración con GENIA

Este servidor MCP está diseñado para integrarse con el orquestador MCP de GENIA, permitiendo que los usuarios conecten sus propias cuentas de Trello y ejecuten operaciones a través de la interfaz unificada de GENIA.

### Ejemplo de Configuración en el Orquestador

```python
orchestrator.register_server(
    name="trello",
    command=["npx", "@delorenj/mcp-server-trello@latest"],
    env_vars={
        "TRELLO_API_KEY": "${TRELLO_API_KEY}",
        "TRELLO_TOKEN": "${TRELLO_TOKEN}"
    }
)
```

## Manejo de Errores

El servidor incluye manejo robusto de errores para:

- Credenciales inválidas o expiradas
- Permisos insuficientes
- Límites de API excedidos
- Recursos no encontrados
- Errores de formato en solicitudes

Cada error incluye un código específico y un mensaje descriptivo para facilitar la depuración.

## Verificación de Dependencias

El servidor verifica automáticamente todas las dependencias necesarias al iniciar:

- Versión de Node.js
- Disponibilidad de NPX
- Validez de las credenciales de Trello
- Conectividad con la API de Trello

Si alguna dependencia falta o es incompatible, el servidor proporcionará instrucciones claras para resolverlo.

## Desarrollo

### Requisitos

- Node.js 16+
- npm o yarn

### Instalación de Dependencias

```bash
npm install
```

### Compilación

```bash
npm run build
```

### Pruebas

```bash
npm test
```

## Licencia

MIT

## Autor

GENIA Team
