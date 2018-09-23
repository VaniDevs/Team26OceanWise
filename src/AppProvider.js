import React from 'react';
import PropTypes from 'prop-types';

import { STORE_USER_CUPS_SAVED, STORE_FAV_CAFES, STORE_USER_ENVIRO_POINTS } from './constants';
import { getData, storeData } from './storageUtils';

export const AppContext = React.createContext();

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cupsSaved: 0,
      enviroPoints: 0,
      favoriteCafes: []
    };

    getData(STORE_USER_CUPS_SAVED)
      .then(value => {
        this.setState({ cupsSaved: Number(value) });
      })
      .catch(() => console.log('Error fetching storage'));

    getData(STORE_USER_ENVIRO_POINTS)
      .then(value => {
        this.setState({ enviroPoints: Number(value) });
      })
      .catch(() => console.log('Error fetching storage'));

    getData(STORE_FAV_CAFES)
      .then(value => {
        this.setState({ favoriteCafes: JSON.parse(value) });
      })
      .catch(() => console.log('Error fetching storage'));
  }

  addEnviroPoints = additionalPoints => {
    const { enviroPoints } = this.state;
    const updatedEnviroPoints = enviroPoints + additionalPoints;
    this.setState({ enviroPoints: updatedEnviroPoints });
    storeData(STORE_USER_ENVIRO_POINTS, updatedEnviroPoints.toString());
  };

  incrementCupsSaved = () => {
    const { cupsSaved } = this.state;
    const updatedCupsSaved = cupsSaved + 1;
    this.setState({ cupsSaved: updatedCupsSaved });
    storeData(STORE_USER_CUPS_SAVED, updatedCupsSaved.toString());
  };

  addCafe = cafe => {
    const { favoriteCafes } = this.state;
    const cafeRecord = { cafe, points: 0 };
    favoriteCafes.push(cafeRecord);
    this.setState({ favoriteCafes });
    storeData(STORE_FAV_CAFES, JSON.stringify(favoriteCafes));
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
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
