module.exports = (str) => {
  switch (str) {
    case "love":
      return str.replace(/love/g, "❤");
      break;

    case "happy":
      return str.replace(/happy/g, "😊");
      break;

    case "thumbs up":
      return str.replace(/thumbs up/g, "👍");
      break;

    case "music":
      return str.replace(/music/g, "🎶");
      break;

    case "clap":
      return str.replace(/clap/g, "👏");
      break;

    case "ninja cat":
      return str.replace(/ninja cat/g, "🐱‍👤");
      break;

    case "kiss":
      return str.replace(/kiss/g, "💋");
      break;

    case "balloon":
      return str.replace(/balloon/g, "🎈");
      break;

    default:
      console.log(
        "🤷‍♂️Ordet känns inte igen, testa att ändra första bokstaven till liten"
      );
      break;
  }
};
