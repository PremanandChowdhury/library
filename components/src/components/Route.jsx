import PropTypes from 'prop-types';

// Local imports
import useNavigation from '../hooks/use-navigation';

const Route = ({path, children}) => {
    const {currentPath } = useNavigation();

    return currentPath === path ? children : null;
}

Route.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Route;