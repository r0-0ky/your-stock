import { YMaps, Map } from '@pbe/react-yandex-maps';

export const YaMap: React.FC = () => {
  
  return (
    <YMaps query={{ lang: 'en_RU', apikey: '83e6cd78-8915-4d26-b052-eebf4d11facf'}}>
      <div>
        <Map width='100%' height='100vh' defaultState={{ center: [59.938784, 30.314997], zoom: 11 }} />
      </div>
    </YMaps>
  )
}