import Icon from './Icon';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const getStarNum = (num) => {

    let impresiones = []

    for (let i = 0; i < num; i++) {

        impresiones.push(<Icon css="iconStar" icon={faStar} />);
    }

    return impresiones;
}