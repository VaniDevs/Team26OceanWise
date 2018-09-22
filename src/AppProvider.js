import React from 'react';
import PropTypes from 'prop-types';
import App from './App';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  state = {
    cupsSaved: 0,
    enviroPoints: 0,
    favoriteCafes: []
  };

  addEnviroPoints = additionalPoints => {
    const { enviroPoints } = this.state;
    this.setState({ enviroPoints: enviroPoints + additionalPoints });
  };

  incrementCupsSaved = () => {
    const { cupsSaved } = this.state;
    this.setState({ cupsSaved: cupsSaved + 1 });
  };

  addCafe = cafe => {
    const { favoriteCafes } = this.state;
    const cafeRecord = { cafe, points: 0 };
    const updatedFavoriteCafes = favoriteCafes.push(cafeRecord);
    this.setState({ updatedFavoriteCafes });
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addEnviroPoints: this.addEnviroPoints,
          incrementCupsSaved: this.incrementCupsSaved,
          addCafe: this.addCafe
        }}>
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
