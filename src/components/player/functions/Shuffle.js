import {
  SetPlayList,
  RecentlyPlayed,
} from "../../../store/actions/PlayerActions";

export function Shuffle(list, dispatch, recentlyPlayed) {
  let currentIndex = list.length,
    randomIndex;

  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    if (recentlyPlayed.includes(item)) {
      return;
    } else {
      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [list[currentIndex], list[randomIndex]] = [
          list[randomIndex],
          list[currentIndex],
        ];
      }

      //console.log(list);
      dispatch(SetPlayList(list));
    }
  }
}

export function AddToRecentlyPlayed(uri, dispatch, recentlyPlayed) {
  if (!recentlyPlayed.includes(uri)) {
    dispatch(RecentlyPlayed(uri));
  }
}
