import React from 'react';
import "./Map.css";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapComponent = () => {
  const mapData = {
    center: [42.8746, 74.5698],
    zoom: 12,
  };

  // Пример данных для меток
  const places = [
    { id: 1, name: 'Головной офис', coordinates: [42.87634, 74.617911] },
  ];

  return (
    <YMaps query={{ apikey: '35facd3b-9b56-475e-a833-02855a96a481' }}>
      <Map 
        defaultState={mapData} 
        width="100%" 
        height="500px"
        defaultOptions={{
          suppressMapOpenBlock: true, // Отключение всплывающего окна
          yandexMapDisablePoiInteractivity: true, // Отключение интерактивности точек интереса
        }}
        options={{
          behaviors: ['drag', 'multiTouch'], // Убираем зум колесом без Ctrl
          restrictMapArea: true, // Ограничение движения карты (если нужно)
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']} // Добавляем контролы
        controls={['zoomControl', 'fullscreenControl']} // Добавляем кнопки зума и полноэкранного режима
      >
        {places.map(place => (
          <Placemark
            key={place.id}
            geometry={place.coordinates}
            properties={{
              balloonContent: place.name,
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default MapComponent;
