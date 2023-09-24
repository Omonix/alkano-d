import imgPresent from "../../img/downloadMain.jpg";

const EntryMain = () => {
  return (
    <div className="entryMain">
      <div className="present">
        <div className="textPresent text">
          <p className="text">Sommaire</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            corrupti tempora numquam ratione, ab aspernatur illo ad laborum
            impedit architecto. Voluptate ad vero unde corporis magnam,
            asperiores fuga autem quia deserunt inventore at dignissimos quos
            dolore ex nisi minima impedit neque sapiente veniam itaque suscipit?
          </p>
        </div>
        <div className="imgParentPresent">
          <div className="gradienter"></div>
          <img className="imgPresent" src={imgPresent} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default EntryMain;
