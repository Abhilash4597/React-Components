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
        <Button primary rounded> 
          <GoBellFill />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <CgDanger />
          Secondary
        </Button>
      </div>
      <div>
        <Button danger>
          <IoIosWarning />
          Danger
        </Button>
      </div>
      <div>
        <Button warning>
          <GiPlainCircle />
          Warning
        </Button>
      </div>
      <div>
        <Button success>
          <FaWineBottle />
          Success
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage;
