// Configuración de la aplicación BiciNay
const CONFIG = {
    // Credenciales de Mapbox
    MAPBOX_ACCESS_TOKEN: 'pk.eyJ1IjoiZ3VpZ281NjciLCJhIjoiY21ibGF1bXdsMHluMTJrb2Z1NmptNWhlZyJ9.h1FAW0nyayHEZA6u8OJErg',
    
    // Configuración de la aplicación
    APP_TITLE: 'BiciNay - Todo para moverte en bici',
    APP_NAME: 'BiciNay',
    APP_SLOGAN: 'Todo para moverte en bici',
    APP_DESCRIPTION: 'Explora parques lineales, talleres y ciclopuertos en tu ciudad.',
    
    // Configuración del mapa (Tepic - Xalisco)
    MAP_CENTER_LNG: -104.8950,
    MAP_CENTER_LAT: 21.5030,
    MAP_ZOOM: 13.2,
    MAP_STYLE: 'mapbox://styles/mapbox/streets-v12',
    
    // Configuración de ubicación
    LOCATION_ENABLED: true,
    LOCATION_HIGH_ACCURACY: true,
    LOCATION_TIMEOUT: 10000,
    LOCATION_MAX_AGE: 30000,
    LOCATION_ZOOM: 16,
    
    // URLs de recursos
    GEOJSON_CICLOPUERTOS: 'GeoJSON/bicis.geojson',
    GEOJSON_PARQUES: 'GeoJSON/ciclovia.geojson',
    GEOJSON_NEGOCIOS: 'https://codigonayarita.github.io/negocios.json',
    GUIDE_PDF_URL: 'pdf/guia.pdf'
};

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
