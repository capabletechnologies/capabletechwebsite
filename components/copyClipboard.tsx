import { copyToClipboard } from "@phntms/react-share";
import { RiFileCopy2Line } from "react-icons/ri";

const ClipBoardCopy = (params: any) => {

    const url = params.url

return (
<>
<div onClick={() => copyToClipboard(url)}><RiFileCopy2Line className="cursor-pointer"  /></div>
</>
)
};

export default ClipBoardCopy;