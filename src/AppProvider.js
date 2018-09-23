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
    console.log('setting enviropoints to: ', updatedEnviroPoints);
    this.setState({ enviroPoints: updatedEnviroPoints });
    storeData(STORE_USER_ENVIRO_POINTS, updatedEnviroPoints.toString());
  };

  addCupsSaved = cups => {
    const { cupsSaved } = this.state;
    const updatedCupsSaved = cupsSaved + cups;
    this.setState({ cupsSaved: updatedCupsSaved });
    storeData(STORE_USER_CUPS_SAVED, updatedCupsSaved.toString());
  };

  addPointsToCafe = (cafe, logo, points) => {
    const { favoriteCafes } = this.state;
    const aquiredPoints = points < 10 ? points : points - 10;
    const cafeRecord = { cafe, logo, points: Number(aquiredPoints) };

    // TODO check if coffee house exists and change record
    // Otherwise, push new record
    if (favoriteCafes && favoriteCafes.length > 0) {
      favoriteCafes[0] = cafeRecord;
      this.setState({ favoriteCafes });
      storeData(STORE_FAV_CAFES, JSON.stringify(favoriteCafes));
    } else {
      const initialFavCafes = [{ cafeRecord }];
      this.setState({ initialFavCafes });
      storeData(STORE_FAV_CAFES, JSON.stringify(initialFavCafes));
    }
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addEnviroPoints: this.addEnviroPoints,
          addCupsSaved: this.addCupsSaved,
          addPointsToCafe: this.addPointsToCafe
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
