import {FC} from "react";
import {Games} from "./game";
import {Instructions} from "./instructions";

export const Scramble: FC = () => {
    return <div>
        <div style={{
            textAlign: "center",
            // width: "80vw",
            // maxHeight: "100vw",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        }}>
            <Games/>
        </div>
        <Instructions/>
    </div>;
};
