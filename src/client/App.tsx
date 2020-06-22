import * as React from "react";
import { connect } from "react-redux";
import formatDistance from "date-fns/formatDistance";
import Item from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import {
  initializeGameState,
  resetGame,
  saveGame,
  setNewEarnings,
  toggleBuyMultiplier,
} from "./redux/actions";

/**
 * Application
 */
const App: React.SFC<{
  buyMultiplier: number;
  earnings: number;
  handleBuyMultiplierClick: Function;
  handleEarningsInterval: Function;
  handleInitializeGameState: Function;
  handleResetGame: Function;
  handleSaveGame: Function;
  items: any[];
  money: number;
  startTime: string;
}> = ({
  buyMultiplier,
  earnings,
  handleBuyMultiplierClick,
  handleEarningsInterval,
  handleInitializeGameState,
  handleResetGame,
  handleSaveGame,
  items,
  money,
  startTime,
}) => {
  /**
   * Earnings Interval
   */
  useInterval(() => {
    handleEarningsInterval(items);
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    handleSaveGame(items);
  }, 10000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    handleInitializeGameState();
  }, []);

  return (
    <div id="app">
      <h1>splague</h1>
      <button id="reset" onClick={() => handleResetGame()} type="button">
        RESET
      </button>

      {startTime && (
        <span>
          Time Played -{" "}
          {formatDistance(new Date(startTime), new Date(), {
            includeSeconds: true,
          })}
        </span>
      )}
      <span id="money">Money - ${money.toLocaleString()}</span>
      <span>Earnings - ${earnings.toLocaleString()}/second</span>
      <button onClick={() => handleBuyMultiplierClick()} type="button">
        Buy Multiplier - {buyMultiplier}
      </button>

      {items.map((itemProps) => (
        <Item key={itemProps.name} {...itemProps} />
      ))}

      <LoadingIndicator />
    </div>
  );
};

const mapStateToProps = ({ game }) => ({
  buyMultiplier: game.buyMultiplier,
  earnings: game.earnings,
  items: game.items,
  money: game.money,
  startTime: game.startTime,
});

const mapDispatchToProps = (dispatch) => ({
  handleBuyMultiplierClick: () => dispatch(toggleBuyMultiplier()),
  handleEarningsInterval: () => dispatch(setNewEarnings()),
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleResetGame: () => dispatch(resetGame()),
  handleSaveGame: () => dispatch(saveGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
