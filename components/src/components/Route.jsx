import {useContext} from 'react';
import NavigationContext from '../context/navigation';
import PropTypes from 'prop-types';

const Route = ({path, children}) => {
    const {currentPath } = useContext(NavigationContext);

    return currentPath === path ? children : null;
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Route;