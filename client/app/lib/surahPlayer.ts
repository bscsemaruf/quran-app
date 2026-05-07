let currentAudio: HTMLAudioElement | null = null;

export const stopSurahAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
};

export const setCurrentAudio = (audio: HTMLAudioElement) => {
  currentAudio = audio;
};
