import Base from "../Base";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import AutoComplete from "../../components/AutoComplete";

export default function AutoCompletePage() {
  const suggestions = [
    "Alligator",
    "Bask",
    "Crocodilian",
    "Death Roll",
    "Eggs",
    "Jaws",
    "Reptile",
    "Solitary",
    "Tail",
    "Wetlands",
  ];
  return (
    <Base paddingTop={false}>
      <div className="flex flex-col items-center justify-center h-screen-menu w-full py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Button color="purple">
            <Link to="/">Go back!</Link>
          </Button>
          <Text>Welcome to auto complete!</Text>
          <AutoComplete suggestions={suggestions}></AutoComplete>
        </main>
      </div>
    </Base>
  );
}
