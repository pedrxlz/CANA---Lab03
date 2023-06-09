const escolherVideos = (videos, capacidade) => {
  videos.sort((a, b) => a - b);
  let pendrive = [];
  let espaço_livre = capacidade;

  for (let i = 0; i < videos.length; i++) {
    if (espaço_livre >= videos[i]) {
      console.log({ selecionou: videos[i] });
      pendrive.push(videos[i]);
      espaço_livre -= videos[i];
    }
  }

  return pendrive;
};
