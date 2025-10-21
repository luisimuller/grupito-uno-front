import { useState, useEffect } from 'react';
import "../styles/apionlypepes.css";

const ApiOnlyPepes = () => {
    const [pepeData, setPepeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pepeHistory, setPepeHistory] = useState([]);

    const fetchRandomPepe = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://api.onlypepes.com/v2/pepe');
            if (!response.ok) {
                throw new Error('Error al obtener el Pepe');
            }
            const data = await response.json();
            setPepeData(data);
            
            // Agregar al historial
            if (data && data.data) {
                setPepeHistory(prev => [data.data, ...prev.slice(0, 5)]);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomPepe();
    }, []);

    return (
        <div className="api-onlypepes">
            {/* Header con estilo del home */}
            <div className="api-header">
                <h1>🎨 OnlyPepes API</h1>
                <div className="subtitle">
                    Accede a más de 10,000 variaciones catalogadas de Pepe
                </div>
                {loading && (
                    <div className="loading-bar-container">
                        <div className="loading-bar-fill"></div>
                    </div>
                )}
            </div>

            {/* Controles */}
            <div className="controls">
                <button 
                    onClick={fetchRandomPepe} 
                    disabled={loading}
                    className="pepe-button"
                >
                    {loading ? '🔄 Cargando Pepe...' : '🎲 Obtener Nuevo Pepe'}
                </button>
            </div>

            {/* Estados */}
            {error && (
                <div className="error">
                    ❌ Error: {error}
                </div>
            )}

            {loading && (
                <div className="loading">
                    Cargando tu Pepe...
                    <div className="loading-bar-container">
                        <div className="loading-bar-fill"></div>
                    </div>
                </div>
            )}

            {pepeData && pepeData.data && (
                <div className="pepe-container">
                    <div className="current-pepe">
                        <img 
                            src={pepeData.data.url} 
                            alt="Random Pepe" 
                            className="main-pepe"
                        />
                        <div className="pepe-info">
                            <p><strong>URL:</strong> {pepeData.data.url}</p>
                            <p><strong>ID:</strong> {pepeData.data.id || 'N/A'}</p>
                            <p><strong>CDN:</strong> https://cdn.onlypepes.com/</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="features">
                <h2>✨ Características de la API</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>📚 Catálogo Completo</h3>
                        <p>Acceso a más de 10,000 variaciones catalogadas de Pepe</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔍 Búsqueda Avanzada</h3>
                        <p>Capacidades avanzadas de búsqueda y filtrado</p>
                    </div>
                    <div className="feature-card">
                        <h3>📊 Metadatos Detallados</h3>
                        <p>Información completa para cada meme de Pepe</p>
                    </div>
                    <div className="feature-card">
                        <h3>⚡ Alto Rendimiento</h3>
                        <p>CDN distribuido globalmente con respuesta &lt; 100ms</p>
                    </div>
                    <div className="feature-card">
                        <h3>📖 Documentación</h3>
                        <p>Documentación completa y ejemplos prácticos</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔄 Alta Disponibilidad</h3>
                        <p>99.9% uptime garantizado</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiOnlyPepes;
