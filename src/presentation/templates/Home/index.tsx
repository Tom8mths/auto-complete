import Base from "../Base";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Base paddingTop={false}>
      <div className="flex flex-col items-center justify-center h-screen-menu w-full py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Text>Welcome!</Text>
          <Link to="/movies-page">
            <Button color="purple">Go to auto-complete!</Button>
          </Link>
        </main>
      </div>
    </Base>
  );
}
