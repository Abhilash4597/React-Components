import Button from "../components/Button";
import { GoBellFill } from "react-icons/go";
import { CgDanger } from "react-icons/cg";
import { IoIosWarning } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";
import { FaWineBottle } from "react-icons/fa";



function ButtonPage() {

  return (
    <div>
      <div>
        <Button primary> 
          <GoBellFill />
          Click
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <CgDanger />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger>
          <IoIosWarning />
          Click Me
        </Button>
      </div>
      <div>
        <Button warning>
          <GiPlainCircle />
          Click Me
        </Button>
      </div>
      <div>
        <Button success>
          <FaWineBottle />
          Click Me
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage;
