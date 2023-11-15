'use client'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

 const YandexMap = () => (
    <YMaps>
        <Map defaultState={{ center: [53.902663831585, 27.54739182454717], zoom: 16, controls: ["zoomControl", "fullscreenControl", "searchControl", "rulerControl", "typeSelector"],}} modules={["control.ZoomControl", "control.FullscreenControl", "control.SearchControl", "control.RulerControl", "control.TypeSelector"]} width={"100%"} height={'500px'}>
            <Placemark geometry={[53.902663831585, 27.54739182454717]} />
        </Map>
    </YMaps>
);

export default YandexMap;