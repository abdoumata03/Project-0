import React from "react";

const ChallengeInput = () => {
  return (
    <div className="input">
      <input
        className="w-[652px] mq975:w-[550px] mq675:w-[300px] text-start Segoe mq750:w-[450px] mq450:w-[230px] h-[49px] text-[20px] border-[3px] [outline:none] border-solid border-blueviolet-200 px-[20px]"
        type="text"
        placeholder="Type Here..."
      />
    </div>
  );
};

export default ChallengeInput;
