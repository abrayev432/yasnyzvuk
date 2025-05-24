
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapbox-token') || '');
  const [tokenSubmitted, setTokenSubmitted] = useState(!!localStorage.getItem('mapbox-token'));

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox-token', mapboxToken);
      setTokenSubmitted(true);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.7068, 55.6954], // Координаты ул. Люблинская д. 100 кор. 2
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for "Ясный звук"
    const marker = new mapboxgl.Marker({
      color: '#1EAEDB', // Brand color
      scale: 1.2
    })
      .setLngLat([37.7068, 55.6954])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #1EAEDB;">Ясный звук</h3>
              <p style="margin: 0; font-size: 14px;">ул. Люблинская д. 100 кор. 2<br>Москва, Россия</p>
              <p style="margin: 4px 0 0 0; font-size: 12px;">+7 (495) 799-09-26</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  if (!tokenSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-md h-[400px] flex flex-col justify-center items-center space-y-4">
        <h3 className="text-lg font-medium text-center">Настройка карты</h3>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          Для отображения интерактивной карты необходим токен Mapbox. 
          Получите его на <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">mapbox.com</a>
        </p>
        <div className="flex flex-col space-y-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Введите Mapbox токен"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
            Применить токен
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md h-[400px] md:h-auto">
      <div ref={mapContainer} className="w-full h-full min-h-[400px]" />
    </div>
  );
};

export default MapboxMap;
