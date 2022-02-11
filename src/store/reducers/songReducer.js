const initialState = [
  {
    _id: 1,
    title: "Summer Time",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/0eb8d9cf-1f70-46da-8ae8-b3e5331ca474",
    url: "https://storage.googleapis.com/beatdealer-beats/(FREE)%20xxxtentacion%20type%20beat%20mess.mp3.mpga",
  },
  {
    _id: 2,
    title: "Relapse",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/4d440821-bd1b-4307-b01e-83c635eca3a2",
    url: "https://storage.googleapis.com/beatdealer-beats/RELAPSE%20V1.mp3.mpga",
  },
  {
    _id: 3,
    title: "Think Once",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/30744c0d-8da8-4e58-919a-e5fa1a6dfad6",
    url: "https://storage.googleapis.com/beatdealer-beats/think%20once%20-%203.mp3.mpga",
  },
  {
    _id: 4,
    title: "Baby Back",
    duration: "",
    image:
      "https://storage.googleapis.com/beatdealer-images/407392e4-cd69-4ba4-8e2c-88f8536dfa98",
    url: "https://storage.googleapis.com/beatdealer-beats/baby%20come%20back.wav.wav",
  },
];

const New_Song = "New_Song";
const Get_All_Songs = "Get_All_Songs";

export const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_All_Songs:
      return [...state, ...action.payload];
    case New_Song:
      return [...state, action.payload];

    default:
      return state;
  }
};
