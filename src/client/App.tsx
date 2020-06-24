import * as React from "react";
import { connect } from "react-redux";
import format from "date-fns/format";
import formatDistance from "date-fns/formatDistance";
import ItemComponent from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import useInterval from "./hooks/useInterval";
import {
  initializeGameState,
  progressDate,
  resetGame,
  saveGame,
  setNewEarnings,
  toggleBuyMultiplier,
  setChapter,
  setStoryText,
  setTheme,
} from "./redux/actions";
import { Item, Theme, Population, RootState } from "./types";

interface AppProps {
  avatar: string;
  buyMultiplier: number;
  chapter: number;
  date: string;
  earnings: number;
  handleBuyMultiplierClick: () => void;
  handleDateInterval: () => void;
  handleEarningsInterval: () => void;
  handleGoOn: () => void;
  handleInitializeGameState: () => void;
  handleResetGame: () => void;
  handleSaveGame: () => void;
  handleStartDay: () => void;
  handleStartJourny: () => void;
  handleThemeToggle: (theme: Theme) => void;
  items: Item[];
  money: number;
  name: string;
  population: Population;
  startTime: string;
  story: string;
  theme: Theme;
}

/**
 * Application
 */
const App: React.SFC<AppProps> = (props: AppProps) => {
  const {
    avatar,
    buyMultiplier,
    chapter,
    date,
    earnings,
    handleBuyMultiplierClick,
    handleDateInterval,
    handleEarningsInterval,
    handleGoOn,
    handleInitializeGameState,
    handleResetGame,
    handleSaveGame,
    handleStartDay,
    handleStartJourny,
    handleThemeToggle,
    items,
    money,
    name,
    population,
    startTime,
    story,
    theme,
  } = props;
  /**
   * Earnings Interval
   */
  useInterval(() => {
    handleEarningsInterval();
  }, 1000);

  /**
   * Save Game State
   */
  useInterval(() => {
    handleSaveGame();
  }, 10000);

  /**
   * Date Interval
   */
  useInterval(() => {
    handleDateInterval();
  }, 60000);

  /**
   * Initialize Game State
   */
  React.useEffect(() => {
    handleInitializeGameState();
  }, []);

  return (
    <div className={theme} id="app">
      <h1>splague</h1>
      <img alt="Player Avatar" id="avatar" src={avatar} />
      <span id="name">{name}</span>
      <span id="date">{format(new Date(date), "MMMM, yyy G")}</span>
      <p id="story">{story}</p>

      {chapter === 0 && (
        <button id={`story-${chapter}`} onClick={() => handleStartJourny()}>
          Start Journy
        </button>
      )}
      {chapter === 1 && (
        <button id={`story-${chapter}`} onClick={() => handleGoOn()}>
          Go on ...
        </button>
      )}
      {chapter === 2 && (
        <button id={`story-${chapter}`} onClick={() => handleStartDay()}>
          Start day
        </button>
      )}

      <button id="theme-toggle" onClick={() => handleThemeToggle(theme)}>
        Toggle Theme
      </button>

      {chapter > 2 && (
        <>
          <button id="reset" onClick={() => handleResetGame()} type="button">
            RESET
          </button>

          {startTime && (
            <span id="time-played">
              Time Played -{" "}
              {formatDistance(new Date(startTime), new Date(), {
                includeSeconds: true,
              })}
            </span>
          )}
          <span>
            Money - $<span id="money">{money.toLocaleString()}</span>
          </span>
          <span id="earnings">
            Earnings - ${earnings.toLocaleString()}/second
          </span>
          <span id="alive-population">
            Alive Population - {population.alive.toLocaleString()}
          </span>
          <span id="dead-population">
            Dead Population - {population.dead.toLocaleString()}
          </span>
          <span id="infected-population">
            Infected Population - {population.infected.toLocaleString()}
          </span>
          <button onClick={() => handleBuyMultiplierClick()} type="button">
            Buy Multiplier - {buyMultiplier}
          </button>

          {items.map((itemProps) => (
            <ItemComponent key={itemProps.name} {...itemProps} />
          ))}
        </>
      )}

      <LoadingIndicator />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  avatar: state.player.avatar,
  buyMultiplier: state.game.buyMultiplier,
  chapter: state.story.chapter,
  date: state.game.date,
  earnings: state.game.earnings,
  items: state.game.items,
  money: state.game.money,
  name: state.player.name,
  population: state.world.population,
  startTime: state.game.startTime,
  story: state.story.text,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleBuyMultiplierClick: () => dispatch(toggleBuyMultiplier()),
  handleDateInterval: () => dispatch(progressDate()),
  handleEarningsInterval: () => dispatch(setNewEarnings()),
  handleGoOn: () => {
    dispatch(setChapter(2));
    dispatch(setStoryText("... the Black Plague starts in 1346. Good luck."));
  },
  handleInitializeGameState: () => dispatch(initializeGameState()),
  handleResetGame: () => dispatch(resetGame()),
  handleSaveGame: () => dispatch(saveGame()),
  handleStartDay: () => {
    dispatch(setChapter(3));
    dispatch(setStoryText("12 months before death..."));
  },
  handleStartJourny: () => {
    dispatch(setChapter(1));
    dispatch(
      setStoryText(
        "You are a level headed doctor of medicine living in Western Europe. Above all else, you desire to help others. The year is 1345."
      )
    );
  },
  handleThemeToggle: (theme: Theme) => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
