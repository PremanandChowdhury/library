import { GoBell, GoDownload, GoDatabase } from "react-icons/go";
import Button from "../components/ui/Button";

const ButtonListPage = () => {
  function handleClick() {
    console.log("Button is clicked!!!");
  }

  function handleMouseLeave() {
    console.log("Button has MouseLeave!!!");
  }

  function handleMouseEnter() {
    console.log("Button has mouse enter!!!");
  }

  return (
    <div className="flex justify-center gap-2">
      <div>
        <Button className="mb-5" primary onClick={handleClick}>
          <GoBell />
          Simple button
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleMouseEnter}>
          <GoDownload />
          onMouseEnter button
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Simple button
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleMouseLeave}>
          Simple button
        </Button>
      </div>
      <div>
        <Button danger outline>
          Simple button
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Simple button
        </Button>
      </div>
    </div>
  );
};

export default ButtonListPage;
