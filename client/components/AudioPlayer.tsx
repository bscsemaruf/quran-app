export default function AudioPlayer({ number }: any) {
  const play = () => {
    new Audio(
      `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`,
    ).play();
  };

  return <button onClick={play}>▶</button>;
}
