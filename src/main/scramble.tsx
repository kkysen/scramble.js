import {FC} from "react";
import {Games} from "./game";
import {Instructions} from "./instructions";

export const Scramble: FC = () => {
    return <div>
        <div style={{
            textAlign: "center",
        }}>
            <Games/>
        </div>
        <Instructions/>
    </div>;
};
