import Frame from "../ThumbnailCard/Frame";
import StyledImage from "../ThumbnailCard/StyledImage";
import TextField from "../ThumbnailCard/TextField";
import SocialIcons from "../ThumbnailCard/SocialIcons";

const Share = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-[400px] h-[250px] bg-white rounded-xl p-8">
                <Frame />
                <StyledImage />
                <TextField />
                <SocialIcons />
            </div>
        </div>
    );
};

export default Share;
