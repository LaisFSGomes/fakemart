import React from "react";
interface textWithLimitProps {
  title: string | undefined;
  charactersLimit: number | "unlimited";
}
export const TextWithLimit: React.FC<textWithLimitProps> = ({
  title,
  charactersLimit,
}) => {
  const showView = () => {
    if (title) {
      if (charactersLimit === "unlimited") {
        return `${title}`;
      } else {
        return `${
          title.length > charactersLimit
            ? title.slice(0, charactersLimit) + "..."
            : title
        }`;
      }
    }
    return "";
  };
  return <>{showView()}</>;
};
