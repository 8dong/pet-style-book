import { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(mapScript);

    mapScript.addEventListener('load', () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');

        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨,
          scrollwheel: false
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    });
  }, []);

  return <MapBoxWrapper id='map' />;
};

const MapBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapBox;
