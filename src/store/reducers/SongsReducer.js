const initialState = [
  {
    id: 1,
    title: "Summer Time",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474",
    audioUrl:
      "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga",
  },
  {
    id: 1,
    title: "Summer Time",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474",
    audioUrl:
      "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga",
  },
  {
    id: 1,
    title: "Summer Time",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474",
    audioUrl:
      "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga",
  },
  {
    id: 1,
    title: "Summer Time",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474",
    audioUrl:
      "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga",
  },
];

const New_Song = "New_Song";

export const SongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case New_Song:
      return [...state, action.payload];

    default:
      return state;
  }
};
