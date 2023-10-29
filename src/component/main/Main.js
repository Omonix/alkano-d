import downloadImg from "../../img/downloadImg.png";
import torrentPack from "../../torrentPack.json";
import defaultImgFilm from "../../img/filmWithoutImg.png";

const Main = () => {
  return (
    <div className="main">
      <div className="entryMain">
        <div className="present">
          <div className="textPresent text">
            <p className="coming text">Welcome !</p>
            <p className="text">
              {
                "You are on the good site for download all films !\nThis is not legal but it's just a test and this web site don't have API server."
              }
            </p>
          </div>
          <div className="imgParentPresent">
            <div className="gradienter"></div>
            <img className="imgPresent" src={downloadImg} alt="img" />
          </div>
        </div>
      </div>
      <div className="text filmsTable">
        {torrentPack.map((element, index) => {
          return (
            <div className="individualFilm" key={index}>
              <div className="textNameFilm">{element.name}</div>
              <div className="imgIndividualFilm">
                <img
                  className="imgFilm"
                  src={defaultImgFilm}
                  alt="individualImg"
                />
              </div>
              <div>{element.wanTo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
